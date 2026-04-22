import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { BaseModal } from "@/components/modals";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AlertCircle, Plus, Settings, Trash2, ChevronDown, ChevronRight, CheckCircle2, Info, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  aEService,
  configuracionEvaluacionService,
  type Aspecto,
  type Escala,
  type AspectoEscalaBulkInput,
} from "@/src/api";

interface ModalAeProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void | Promise<void>;
  cfgTId?: number | null;
  aspectos: Aspecto[];
  escalas: Escala[];
}

interface AspectoEnriquecido extends Aspecto {
  cfg_t_id: number;
  tipo_evaluacion: string;
  tipo_form_nombre: string; // Nombre del tipo de formulario (tipo_form_id.nombre)
  es_configuracion_actual: boolean;
}

interface EscalaEnriquecida extends Escala {
  cfg_t_id: number;
  tipo_evaluacion: string;
  tipo_form_nombre: string; // Nombre del tipo de formulario (tipo_form_id.nombre)
  puntaje: number;
  es_configuracion_actual: boolean;
}

interface AspectoState {
  id: number;
  cfg_t_id: number;
  selected: boolean;
  es_cmt: boolean;
  es_cmt_oblig: boolean;
}

interface EscalaState {
  id: number;
  cfg_t_id: number;
  selected: boolean;
}

interface AeItemState {
  id: string;
  tipoConfiguracion: 'conEscalas' | 'sinEscalas' | null; // null = sin seleccionar tipo
  es_pregunta_abierta: boolean; // Deprecated, usar tipoConfiguracion
  escalas: EscalaState[];
  escalaOpen: { es_cmt: boolean; es_cmt_oblig: boolean };
  aspectos: AspectoState[];
  currentStep: number;
}

const createAspectosState = (aspectos: AspectoEnriquecido[], es_pregunta_abierta: boolean): AspectoState[] =>
  aspectos.map((a) => ({
    id: a.id,
    cfg_t_id: a.cfg_t_id,
    selected: false,
    es_cmt: es_pregunta_abierta, // Para preguntas abiertas, el comentario siempre está activo
    es_cmt_oblig: false,
  }));

const createEscalasState = (escalas: EscalaEnriquecida[]): EscalaState[] =>
  escalas.map((e) => ({
    id: e.id,
    cfg_t_id: e.cfg_t_id,
    selected: false,
  }));

const createItem = (aspectos: AspectoEnriquecido[], escalas: EscalaEnriquecida[]): AeItemState => ({
  id: `${Date.now()}-${Math.random()}`,
  tipoConfiguracion: null, // Sin tipo asignado, el usuario debe seleccionar
  es_pregunta_abierta: false, // Se asignará cuando se seleccione tipo
  escalas: createEscalasState(escalas),
  escalaOpen: { es_cmt: true, es_cmt_oblig: false },
  aspectos: createAspectosState(aspectos, false), // Por defecto false
  currentStep: 1, // Step 1 es seleccionar tipo
});

export function ModalAe({ isOpen, onClose, onSuccess, cfgTId, aspectos, escalas }: ModalAeProps) {
  const { toast } = useToast();
  const [items, setItems] = useState<AeItemState[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingConfig, setIsLoadingConfig] = useState(false);
  const [tiposSeleccionados, setTiposSeleccionados] = useState<Set<'conEscalas' | 'sinEscalas'>>(new Set());
  const [aspectosConfigurados, setAspectosConfigurados] = useState<AspectoEnriquecido[]>([]);
  const [escalasConfiguradas, setEscalasConfiguradas] = useState<EscalaEnriquecida[]>([]);
  const [aspectosExpandidos, setAspectosExpandidos] = useState<Record<string, boolean>>({});
  const [escalasExpandidas, setEscalasExpandidas] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isOpen) return;

    const loadConfiguracion = async () => {
      setIsLoadingConfig(true);
      setError(null);

      if (!cfgTId) {
        setAspectosConfigurados([]);
        setEscalasConfiguradas([]);
        setItems([]);
        setError("Selecciona una configuración válida antes de continuar");
        setIsLoadingConfig(false);
        return;
      }

      // Obtener solo cfg_a/cfg_e de la configuracion seleccionada
      const response = await configuracionEvaluacionService.getCfgACfgE(cfgTId);
      if (response.success && response.data) {
        const configs = Array.isArray(response.data) ? response.data : [response.data];

        // Consolidar aspectos y escalas unicos de la configuracion activa
        // Usando clave compuesta: id-cfg_t_id para evitar duplicados
        const aspectosMap = new Map<string, AspectoEnriquecido>();
        const escalasMap = new Map<string, EscalaEnriquecida>();

        configs.forEach((config) => {
          const tipoEvalNombre = config.tipo_evaluacion?.tipo?.nombre || 'Sin tipo';
          const categoriaNombre = config.tipo_evaluacion?.categoria?.nombre || '';
          const tipoCompleto = categoriaNombre ? `${categoriaNombre} - ${tipoEvalNombre}` : tipoEvalNombre;
          const tipoFormNombre = 'Configuracion seleccionada';

          // Agregar aspectoss únicos (diferenciados por id + cfg_t_id)
          config.cfg_a
            .filter((a) => a.es_activo)
            .forEach((a) => {
              const key = `${a.id}-${a.cfg_t_id}`;
              if (!aspectosMap.has(key)) {
                aspectosMap.set(key, {
                  id: a.id,
                  nombre: a.aspecto.nombre,
                  descripcion: a.aspecto.descripcion,
                  cfg_t_id: a.cfg_t_id,
                  tipo_evaluacion: tipoCompleto,
                  tipo_form_nombre: tipoFormNombre,
                  es_configuracion_actual: true,
                });
              }
            });

          // Agregar escalas únicas (diferenciadas por id + cfg_t_id)
          config.cfg_e
            .filter((e) => e.es_activo)
            .forEach((e) => {
              const key = `${e.id}-${e.cfg_t_id}`;
              if (!escalasMap.has(key)) {
                escalasMap.set(key, {
                  id: e.id,
                  sigla: e.escala.sigla,
                  nombre: e.escala.nombre,
                  descripcion: e.escala.descripcion,
                  cfg_t_id: e.cfg_t_id,
                  tipo_evaluacion: tipoCompleto,
                  tipo_form_nombre: tipoFormNombre,
                  puntaje: e.puntaje,
                  es_configuracion_actual: true,
                });
              }
            });
        });

        const aspectosCfg = Array.from(aspectosMap.values()).sort((a, b) => {
          // Primero los de la configuración actual, luego por nombre
          if (a.es_configuracion_actual !== b.es_configuracion_actual) {
            return a.es_configuracion_actual ? -1 : 1;
          }
          return a.nombre.localeCompare(b.nombre);
        });
        const escalasCfg = Array.from(escalasMap.values()).sort((a, b) => {
          // Primero los de la configuración actual, luego por nombre
          if (a.es_configuracion_actual !== b.es_configuracion_actual) {
            return a.es_configuracion_actual ? -1 : 1;
          }
          return a.nombre.localeCompare(b.nombre);
        });

        setAspectosConfigurados(aspectosCfg);
        setEscalasConfiguradas(escalasCfg);
        setItems([]);
        setTiposSeleccionados(new Set());

        // Expandir automáticamente la configuración actual
        const tiposUnicos = new Set<string>();
        aspectosCfg.forEach(a => tiposUnicos.add(`${a.tipo_evaluacion}|CFG_${a.cfg_t_id}`));
        escalasCfg.forEach(e => tiposUnicos.add(`${e.tipo_evaluacion}|CFG_${e.cfg_t_id}`));
        
        const aspectosExp: Record<string, boolean> = {};
        const escalasExp: Record<string, boolean> = {};
        tiposUnicos.forEach(key => {
          const [tipoEval, cfgPart] = key.split('|');
          const cfgId = parseInt(cfgPart.replace('CFG_', ''));
          const esActual = aspectosCfg.some(a => a.cfg_t_id === cfgId && a.es_configuracion_actual) ||
                          escalasCfg.some(e => e.cfg_t_id === cfgId && e.es_configuracion_actual);
          aspectosExp[key] = esActual;
          escalasExp[key] = esActual;
        });
        
        setAspectosExpandidos(aspectosExp);
        setEscalasExpandidas(escalasExp);

        if (aspectosCfg.length === 0 && escalasCfg.length === 0) {
          setError("No hay aspectos o escalas configurados");
        }
      } else {
        setAspectosConfigurados([]);
        setEscalasConfiguradas([]);
        setItems([]);
        setError("No se pudo cargar el banco de aspectos y escalas");
      }

      setIsLoadingConfig(false);
    };

    loadConfiguracion();
  }, [isOpen, cfgTId]);

  const aspectosById = useMemo(
    () => new Map(aspectosConfigurados.map((a) => [`${a.id}-${a.cfg_t_id}`, a])),
    [aspectosConfigurados]
  );

  const aspectosPorTipo = useMemo(() => {
    const grupos: Record<string, AspectoEnriquecido[]> = {};
    aspectosConfigurados.forEach((aspecto) => {
      // Agrupar por tipo_evaluacion + cfg_t_id para diferenciar configuraciones
      const key = `${aspecto.tipo_evaluacion}|CFG_${aspecto.cfg_t_id}`;
      if (!grupos[key]) {
        grupos[key] = [];
      }
      grupos[key].push(aspecto);
    });
    return grupos;
  }, [aspectosConfigurados]);

  const escalasPorTipo = useMemo(() => {
    const grupos: Record<string, EscalaEnriquecida[]> = {};
    escalasConfiguradas.forEach((escala) => {
      // Agrupar por tipo_evaluacion + cfg_t_id para diferenciar configuraciones
      const key = `${escala.tipo_evaluacion}|CFG_${escala.cfg_t_id}`;
      if (!grupos[key]) {
        grupos[key] = [];
      }
      grupos[key].push(escala);
    });
    return grupos;
  }, [escalasConfiguradas]);

  const updateItem = (itemId: string, updates: Partial<AeItemState>) => {
    setItems((prev) => prev.map((it) => (it.id === itemId ? { ...it, ...updates } : it)));
  };

  const updateAspecto = (itemId: string, aspectoId: number, cfgTId: number, updates: Partial<AspectoState>) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== itemId) return it;
        // Si es pregunta abierta, siempre mantener es_cmt en true
        const finalUpdates = it.es_pregunta_abierta && 'es_cmt' in updates
          ? { ...updates, es_cmt: true }
          : updates;
        return {
          ...it,
          aspectos: it.aspectos.map((a) =>
            a.id === aspectoId && a.cfg_t_id === cfgTId ? { ...a, ...finalUpdates } : a
          ),
        };
      })
    );
  };

  const toggleEscala = (itemId: string, escalaId: number, cfgTId: number) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== itemId) return it;
        return {
          ...it,
          escalas: it.escalas.map((e) =>
            e.id === escalaId && e.cfg_t_id === cfgTId
              ? { ...e, selected: !e.selected }
              : e
          ),
        };
      })
    );
  };

  const setAllEscalas = (itemId: string, selected: boolean) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== itemId) return it;
        return {
          ...it,
          escalas: it.escalas.map((e) => ({ ...e, selected })),
        };
      })
    );
  };

  const setAllAspectos = (itemId: string, selected: boolean) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== itemId) return it;
        return {
          ...it,
          aspectos: it.aspectos.map((a) => ({
            ...a,
            selected,
            es_cmt: it.es_pregunta_abierta ? true : selected ? a.es_cmt : false,
            es_cmt_oblig: selected ? a.es_cmt_oblig : false,
          })),
        };
      })
    );
  };

  const addItem = () => {
    setItems((prev) => [...prev, createItem(aspectosConfigurados, escalasConfiguradas)]);
  };

  const toggleTipoSeleccion = (tipo: 'conEscalas' | 'sinEscalas') => {
    const newSet = new Set(tiposSeleccionados);
    if (newSet.has(tipo)) {
      newSet.delete(tipo);
    } else {
      newSet.add(tipo);
    }
    setTiposSeleccionados(newSet);
  };

  const continuarConTiposSeleccionados = () => {
    if (tiposSeleccionados.size === 0) {
      setError("Debes seleccionar al menos un tipo");
      return;
    }
    
    // Crear bloques para cada tipo seleccionado
    const nuevosItems: AeItemState[] = [];
    tiposSeleccionados.forEach(tipo => {
      const item = createItem(aspectosConfigurados, escalasConfiguradas);
      item.tipoConfiguracion = tipo;
      item.es_pregunta_abierta = tipo === 'sinEscalas';
      item.aspectos = createAspectosState(aspectosConfigurados, tipo === 'sinEscalas');
      item.escalas = createEscalasState(escalasConfiguradas);
      item.currentStep = 2; // Avanzar al paso 2
      nuevosItems.push(item);
    });
    
    setItems(nuevosItems);
    setTiposSeleccionados(new Set());
    setError(null);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((it) => it.id !== itemId));
  };

  const getMaxStep = (item: AeItemState): number => {
    if (!item.tipoConfiguracion) return 1; // Solo seleccionar tipo
    return item.tipoConfiguracion === 'sinEscalas' ? 2 : 4;
  };

  const validateStep = (item: AeItemState, step: number): boolean => {
    if (step === 1) {
      if (!item.tipoConfiguracion) {
        setError("Debes seleccionar un tipo de configuración");
        return false;
      }
    }
    if (step === 2 && item.tipoConfiguracion === 'conEscalas') {
      if (item.escalas.filter(e => e.selected).length === 0) {
        setError("Debes seleccionar al menos una escala");
        return false;
      }
    }
    if ((step === 2 && item.tipoConfiguracion === 'sinEscalas') || (step === 3 && item.tipoConfiguracion === 'conEscalas')) {
      const selectedAspectos = item.aspectos.filter((a) => a.selected);
      if (selectedAspectos.length === 0) {
        setError("Debes seleccionar al menos un aspecto");
        return false;
      }
    }
    setError(null);
    return true;
  };

  const goToNext = (itemId: string) => {
    const item = items.find((it) => it.id === itemId);
    if (!item) return;

    const maxStep = getMaxStep(item);
    if (!validateStep(item, item.currentStep)) return;

    if (item.currentStep < maxStep) {
      updateItem(itemId, { currentStep: item.currentStep + 1 });
    }
  };

  const goToPrev = (itemId: string) => {
    const item = items.find((it) => it.id === itemId);
    if (!item) return;

    if (item.currentStep > 1) {
      setError(null);
      updateItem(itemId, { currentStep: item.currentStep - 1 });
    }
  };

  const allItemsCompleted = (): boolean => {
    return items.length > 0 && items.every(item => item.currentStep === getMaxStep(item));
  };

  const validate = () => {
    if (aspectosConfigurados.length === 0) {
      setError("No hay aspectos configurados para esta evaluación");
      return false;
    }

    if (items.length === 0) {
      setError("Agrega al menos un bloque de configuración");
      return false;
    }

    for (const item of items) {
      if (!item.tipoConfiguracion) {
        setError("Los bloques deben tener un tipo de configuración seleccionado");
        return false;
      }
      const selectedAspectos = item.aspectos.filter((a) => a.selected);
      if (selectedAspectos.length === 0) {
        setError("Cada bloque debe tener al menos un aspecto seleccionado");
        return false;
      }
      if (item.tipoConfiguracion === 'conEscalas' && escalasConfiguradas.length === 0) {
        setError("No hay escalas configuradas para preguntas cerradas");
        return false;
      }
      if (item.tipoConfiguracion === 'conEscalas' && item.escalas.filter(e => e.selected).length === 0) {
        setError("Las preguntas cerradas deben tener al menos una escala");
        return false;
      }
    }

    setError(null);
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsLoading(true);
    try {
      const payload: AspectoEscalaBulkInput = {
        items: items.map((item) => ({
          es_pregunta_abierta: item.es_pregunta_abierta,
          escalas: item.es_pregunta_abierta
            ? [{ id: null, es_cmt: true, es_cmt_oblig: item.escalaOpen.es_cmt_oblig }]
            : item.escalas.filter(e => e.selected).map(e => e.id),
          aspectos: item.aspectos
            .filter((a) => a.selected)
            .map((a) => ({
              id: a.id,
              es_cmt: item.es_pregunta_abierta ? true : a.es_cmt,
              es_cmt_oblig: a.es_cmt_oblig,
            })),
        })),
      };

      console.log("📤 ModalAe payload:", JSON.stringify(payload, null, 2));

      const response = await aEService.bulkCreateAE(payload);
      if (response.success) {
        toast({
          title: "Configuración guardada",
          description: response.data?.message || "Bulk A/E procesado correctamente",
        });
        await Promise.resolve(onSuccess());
        onClose();
      } else {
        throw new Error("No se pudo guardar la configuración");
      }
    } catch (err) {
      toast({
        title: "Error al guardar",
        description: "No se pudo completar la operación. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Componer Aspectos y Escalas"
      description="Configura paso a paso cómo se evaluarán los aspectos"
      icon={Settings}
      size="lg"
      className="max-h-[86vh] rounded-2xl"
      headerClassName="p-4 sm:p-5"
      contentClassName="p-4 sm:p-5 bg-white"
      footerClassName="p-3 sm:p-4"
      closeOnOverlayClick={!isLoading && !isLoadingConfig}
      showCloseButton={!isLoading && !isLoadingConfig}
      footer={
        <div className="flex w-full gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isLoading || isLoadingConfig}
            className="flex-1 h-10 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading || isLoadingConfig || !allItemsCompleted()}
            className="flex-1 h-10 rounded-xl bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 active:scale-95 transition-all"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Guardando...
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Guardar configuración
              </>
            )}
          </Button>
        </div>
      }
    >
      {isLoadingConfig ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Cargando configuración...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Formulario inicial de selección de tipos */}
            {items.length === 0 && (
              <Card className="border border-slate-200 rounded-xl shadow-none">
                <CardContent className="p-5 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900">Selecciona los tipos de configuración</h3>
                    <p className="text-sm text-muted-foreground">
                      Puedes seleccionar uno o ambos tipos. Se crearán bloques separados para cada uno.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Opción 1: Con escalas */}
                    <label
                      className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                        tiposSeleccionados.has('conEscalas')
                          ? 'border-primary/50 bg-primary/5'
                          : 'border-slate-200 hover:border-primary/40 hover:bg-slate-50'
                      }`}
                    >
                      <Checkbox
                        checked={tiposSeleccionados.has('conEscalas')}
                        onCheckedChange={() => toggleTipoSeleccion('conEscalas')}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium flex items-center gap-2 text-sm">
                          📊 Con escalas numéricas
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Los evaluadores calificarán usando una escala numérica y podrán dejar comentarios opcionales
                        </p>
                      </div>
                    </label>

                    {/* Opción 2: Sin escalas */}
                    <label
                      className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                        tiposSeleccionados.has('sinEscalas')
                          ? 'border-primary/50 bg-primary/5'
                          : 'border-slate-200 hover:border-primary/40 hover:bg-slate-50'
                      }`}
                    >
                      <Checkbox
                        checked={tiposSeleccionados.has('sinEscalas')}
                        onCheckedChange={() => toggleTipoSeleccion('sinEscalas')}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium flex items-center gap-2 text-sm">
                          📝 Sin escalas (comentarios)
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Los evaluadores escribirán comentarios obligatorios sin asignar una puntuación numérica
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-start gap-3 p-4 text-destructive bg-destructive/10 border-2 border-destructive/50 rounded-lg">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {/* Botón Continuar */}
                  <Button
                    onClick={() => continuarConTiposSeleccionados()}
                    className="w-full gap-2 h-10 rounded-xl"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Continuar con {tiposSeleccionados.size > 0 ? (tiposSeleccionados.size === 1 ? 'este tipo' : 'estos tipos') : 'un tipo'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {items.map((item, itemIndex) => {
              const maxStep = getMaxStep(item);
              const progress = (item.currentStep / maxStep) * 100;
              const selectedEscalas = escalasConfiguradas.filter((e) =>
                item.escalas.some((es) => es.id === e.id && es.cfg_t_id === e.cfg_t_id && es.selected)
              );
              const selectedAspectos = item.aspectos.filter((a) => a.selected);
              const selectedAspectoNombres = selectedAspectos
                .map((a) => aspectosById.get(`${a.id}-${a.cfg_t_id}`)?.nombre)
                .filter(Boolean) as string[];
              const withComments = selectedAspectos.filter((a) => a.es_cmt).length;
              const withRequiredComments = selectedAspectos.filter((a) => a.es_cmt_oblig).length;

              const STEPS: Record<number, {title: string; description: string; icon: string}> = {
                1: item.tipoConfiguracion === null
                  ? { title: "Selecciona tipo de configuración", description: "¿Deseas usar aspectos con escalas numéricas o sin escalas?", icon: "🔍" }
                  : { title: "Selecciona tipo de configuración", description: "Tipo seleccionado", icon: "✅" },
                2: item.tipoConfiguracion === 'sinEscalas'
                  ? { title: "Selecciona aspectos", description: "Elige los aspectos que se evaluarán (comentarios siempre activos)", icon: "🎯" }
                  : { title: "Selecciona escalas", description: "Elige las escalas de calificación para esta pregunta", icon: "📊" },
                3: { title: "Selecciona aspectos", description: "Elige los aspectos que se evaluarán y configura comentarios", icon: "🎯" },
                4: { title: "Resumen", description: "Revisa tu configuración antes de guardar", icon: "✅" },
              };

              return (
                <Card key={item.id} className="border border-slate-200 shadow-none overflow-hidden rounded-xl">
                  {/* Header del wizard */}
                  <div className="bg-slate-50 border-b border-slate-200 p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs rounded-full">
                            Bloque #{itemIndex + 1}
                          </Badge>
                          {item.tipoConfiguracion && (
                            <Badge variant="secondary" className="text-xs rounded-full">
                              {item.tipoConfiguracion === 'sinEscalas' ? "Sin escalas" : "Con escalas"}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                          {STEPS[item.currentStep].icon} {STEPS[item.currentStep].title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {STEPS[item.currentStep].description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      {Array.from({ length: maxStep }, (_, idx) => idx + 1).map((step) => {
                        const isDone = step < item.currentStep;
                        const isCurrent = step === item.currentStep;
                        return (
                          <span
                            key={`${item.id}-step-${step}`}
                            className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[11px] font-medium transition-all ${
                              isDone
                                ? "bg-emerald-100 text-emerald-700"
                                : isCurrent
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            {isDone ? "✓" : step}
                          </span>
                        );
                      })}
                    </div>

                    {/* Barra de progreso */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground whitespace-nowrap">
                        Paso {item.currentStep} de {maxStep}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-4">
                    {/* PASO 1: Seleccionar tipo de configuración */}
                    {item.currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                          <p className="text-sm font-medium">
                            ✅ Tipo: {item.tipoConfiguracion === 'sinEscalas' ? "Sin escalas (comentarios siempre activos)" : "Con escalas numéricas"}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* PASO 2: Escalas (solo para con escalas) */}
                    {item.currentStep === 2 && item.tipoConfiguracion === 'conEscalas' && (
                      <div className="space-y-4">
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm font-semibold">Selecciona las respuestas (escalas) reutilizables</p>
                              <p className="text-xs text-muted-foreground">
                                Las escalas elegidas aqui se aplicaran a todos los aspectos que selecciones en el siguiente paso.
                              </p>
                            </div>
                            <Badge variant="secondary" className="w-fit">
                              {item.escalas.filter((e) => e.selected).length} seleccionada{item.escalas.filter((e) => e.selected).length !== 1 ? 's' : ''}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllEscalas(item.id, true)}>
                              Seleccionar todas
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllEscalas(item.id, false)}>
                              Limpiar seleccion
                            </Button>
                          </div>
                        </div>

                        {Object.entries(escalasPorTipo).map(([key, escalasGrupo]) => {
                          const [tipoEval, cfgPart] = key.split('|');
                          const esActual = escalasGrupo[0]?.es_configuracion_actual;
                          return (
                            <Collapsible
                              key={key}
                              open={escalasExpandidas[key]}
                              onOpenChange={(open) => setEscalasExpandidas(prev => ({ ...prev, [key]: open }))}
                            >
                              <Card className={`transition-all ${esActual ? 'border-primary/50 shadow-sm bg-primary/5' : 'border-muted'}`}>
                                <CollapsibleTrigger className="w-full">
                                  <div className="flex items-center justify-between p-4 hover:bg-primary/5 transition-all rounded-lg">
                                    <div className="flex items-center gap-3">
                                      {escalasExpandidas[key] ? 
                                        <ChevronDown className="h-5 w-5 text-primary" /> : 
                                        <ChevronRight className="h-5 w-5" />
                                      }
                                      <div className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-sm">{tipoEval}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                          {escalasGrupo.length} escala{escalasGrupo.length !== 1 ? 's' : ''}
                                        </span>
                                      </div>
                                    </div>
                                    {(() => {
                                      const seleccionadas = escalasGrupo.filter(e => item.escalas.some(es => es.id === e.id && es.cfg_t_id === e.cfg_t_id && es.selected)).length;
                                      return seleccionadas > 0 ? (
                                        <Badge variant="default" className="gap-1">
                                          <CheckCircle2 className="h-3 w-3" />
                                          {seleccionadas}
                                        </Badge>
                                      ) : null;
                                    })()}
                                  </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <div className="p-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-muted/20">
                                    {escalasGrupo.map((escala) => {
                                      const isSelected = item.escalas.some(e => e.id === escala.id && e.cfg_t_id === escala.cfg_t_id && e.selected);
                                      return (
                                        <label
                                          key={`${escala.id}-${escala.cfg_t_id}`}
                                          className={`flex flex-col gap-2 rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-md ${
                                            isSelected 
                                              ? 'border-primary bg-primary/10 shadow-sm' 
                                              : 'border-muted hover:border-primary/50 hover:bg-muted/50'
                                          }`}
                                        >
                                          <div className="flex items-start gap-2">
                                            <Checkbox
                                              checked={isSelected}
                                              onCheckedChange={() => toggleEscala(item.id, escala.id, escala.cfg_t_id)}
                                              className="mt-0.5"
                                            />
                                            <div className="flex-1">
                                              <div className="font-semibold text-sm">
                                                {escala.nombre}
                                              </div>
                                              <div className="text-xs text-muted-foreground">
                                                {escala.sigla}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ml-6">
                                            <Badge variant="secondary" className="text-xs">
                                              {escala.puntaje} pts
                                            </Badge>
                                          </div>
                                        </label>
                                      );
                                    })}
                                  </div>
                                </CollapsibleContent>
                              </Card>
                            </Collapsible>
                          );
                        })}
                      </div>
                    )}

                    {/* PASO 2: Aspectos (solo para sin escalas) */}
                    {item.currentStep === 2 && item.tipoConfiguracion === 'sinEscalas' && (
                      <div className="space-y-4">
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-semibold">Selecciona las preguntas (aspectos) para comentarios</p>
                            <Badge variant="secondary" className="w-fit">
                              {item.aspectos.filter((a) => a.selected).length} seleccionada{item.aspectos.filter((a) => a.selected).length !== 1 ? 's' : ''}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllAspectos(item.id, true)}>
                              Seleccionar todas
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllAspectos(item.id, false)}>
                              Limpiar seleccion
                            </Button>
                          </div>
                        </div>

                        {Object.entries(aspectosPorTipo).map(([key, aspectosGrupo]) => {
                          const [tipoEval, cfgPart] = key.split('|');
                          const esActual = aspectosGrupo[0]?.es_configuracion_actual;
                          const aspectosDelItem = item.aspectos.filter(a => aspectosGrupo.some(ag => ag.id === a.id && ag.cfg_t_id === a.cfg_t_id));
                          
                          return (
                            <Collapsible
                              key={key}
                              open={aspectosExpandidos[key]}
                              onOpenChange={(open) => setAspectosExpandidos(prev => ({ ...prev, [key]: open }))}
                            >
                              <Card className={`transition-all ${esActual ? 'border-primary/50 shadow-sm bg-primary/5' : 'border-muted'}`}>
                                <CollapsibleTrigger className="w-full">
                                  <div className="flex items-center justify-between p-4 hover:bg-primary/5 transition-all rounded-lg">
                                    <div className="flex items-center gap-3">
                                      {aspectosExpandidos[key] ? 
                                        <ChevronDown className="h-5 w-5 text-primary" /> : 
                                        <ChevronRight className="h-5 w-5" />
                                      }
                                      <div className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-sm">{tipoEval}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                          {aspectosGrupo.length} aspecto{aspectosGrupo.length !== 1 ? 's' : ''}
                                        </span>
                                      </div>
                                    </div>
                                    {(() => {
                                      const seleccionados = aspectosDelItem.filter(a => a.selected).length;
                                      return seleccionados > 0 ? (
                                        <Badge variant="default" className="gap-1">
                                          <CheckCircle2 className="h-3 w-3" />
                                          {seleccionados}
                                        </Badge>
                                      ) : null;
                                    })()}
                                  </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <div className="p-4 pt-2 bg-muted/20">
                                    <div className="rounded-lg border-2 border-muted bg-background overflow-x-auto">
                                      <Table>
                                        <TableHeader>
                                          <TableRow className="bg-primary/10">
                                            <TableHead className="w-[60px] font-bold">✓</TableHead>
                                            <TableHead className="font-bold">Aspecto</TableHead>
                                            <TableHead className="w-[150px] font-bold text-center">⚠️ Obligatorio</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {aspectosDelItem.map((asp) => {
                                            const aspecto = aspectosById.get(`${asp.id}-${asp.cfg_t_id}`);
                                            return (
                                              <TableRow 
                                                key={`${asp.id}-${asp.cfg_t_id}`}
                                                className={asp.selected ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'}
                                              >
                                                <TableCell>
                                                  <Checkbox
                                                    checked={asp.selected}
                                                    onCheckedChange={(value) =>
                                                      updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                        selected: Boolean(value),
                                                      })
                                                    }
                                                  />
                                                </TableCell>
                                                <TableCell>
                                                  <div className="flex flex-col gap-1.5">
                                                    <span className="font-semibold text-sm">
                                                      {aspecto?.nombre ?? `Aspecto #${asp.id}`}
                                                    </span>
                                                    {aspecto?.descripcion && (
                                                      <span className="text-xs text-muted-foreground line-clamp-2">
                                                        {aspecto.descripcion}
                                                      </span>
                                                    )}
                                                  </div>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                  <div className="flex items-center justify-center gap-2">
                                                    <Switch
                                                      checked={asp.es_cmt_oblig}
                                                      disabled={!asp.selected}
                                                      onCheckedChange={(value) =>
                                                        updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                          es_cmt_oblig: Boolean(value),
                                                        })
                                                      }
                                                    />
                                                    <span className="text-sm font-medium">
                                                      {asp.es_cmt_oblig ? "✓" : "✗"}
                                                    </span>
                                                  </div>
                                                </TableCell>
                                              </TableRow>
                                            );
                                          })}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </Card>
                            </Collapsible>
                          );
                        })}
                      </div>
                    )}

                    {/* PASO 3: Aspectos */}
                    {item.currentStep === 3 && item.tipoConfiguracion === 'conEscalas' && (
                      <div className="space-y-4">
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm font-semibold">Selecciona los aspectos (preguntas)</p>
                              <p className="text-xs text-muted-foreground">Cada aspecto seleccionado usara exactamente las escalas elegidas en el paso anterior.</p>
                            </div>
                            <Badge variant="secondary" className="w-fit">
                              {item.aspectos.filter((a) => a.selected).length} seleccionada{item.aspectos.filter((a) => a.selected).length !== 1 ? 's' : ''}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllAspectos(item.id, true)}>
                              Seleccionar todas
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => setAllAspectos(item.id, false)}>
                              Limpiar seleccion
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedEscalas.map((escala) => (
                                <Badge key={`${escala.id}-${escala.cfg_t_id}`} variant="outline" className="text-xs">
                                  {escala.sigla} - {escala.nombre}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        {Object.entries(aspectosPorTipo).map(([key, aspectosGrupo]) => {
                          const [tipoEval, cfgPart] = key.split('|');
                          const esActual = aspectosGrupo[0]?.es_configuracion_actual;
                          const aspectosDelItem = item.aspectos.filter(a => aspectosGrupo.some(ag => ag.id === a.id && ag.cfg_t_id === a.cfg_t_id));
                          
                          return (
                            <Collapsible
                              key={key}
                              open={aspectosExpandidos[key]}
                              onOpenChange={(open) => setAspectosExpandidos(prev => ({ ...prev, [key]: open }))}
                            >
                              <Card className={`transition-all ${esActual ? 'border-primary/50 shadow-sm bg-primary/5' : 'border-muted'}`}>
                                <CollapsibleTrigger className="w-full">
                                  <div className="flex items-center justify-between p-4 hover:bg-primary/5 transition-all rounded-lg">
                                    <div className="flex items-center gap-3">
                                      {aspectosExpandidos[key] ? 
                                        <ChevronDown className="h-5 w-5 text-primary" /> : 
                                        <ChevronRight className="h-5 w-5" />
                                      }
                                      <div className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-sm">{tipoEval}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                          {aspectosGrupo.length} aspecto{aspectosGrupo.length !== 1 ? 's' : ''}
                                        </span>
                                      </div>
                                    </div>
                                    {(() => {
                                      const seleccionados = aspectosDelItem.filter(a => a.selected).length;
                                      return seleccionados > 0 ? (
                                        <Badge variant="default" className="gap-1">
                                          <CheckCircle2 className="h-3 w-3" />
                                          {seleccionados}
                                        </Badge>
                                      ) : null;
                                    })()}
                                  </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <div className="p-4 pt-2 bg-muted/20">
                                    <div className="rounded-lg border-2 border-muted bg-background overflow-x-auto">
                                      <Table>
                                        <TableHeader>
                                          <TableRow className="bg-primary/10">
                                            <TableHead className="w-[60px] font-bold">✓</TableHead>
                                            <TableHead className="font-bold">Aspecto</TableHead>
                                            {!item.es_pregunta_abierta && (
                                              <>
                                                <TableHead className="w-[150px] font-bold text-center">💬 Comentario</TableHead>
                                                <TableHead className="w-[150px] font-bold text-center">⚠️ Obligatorio</TableHead>
                                              </>
                                            )}
                                            {item.es_pregunta_abierta && (
                                              <TableHead className="w-[150px] font-bold text-center">⚠️ Comentario obligatorio</TableHead>
                                            )}
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {aspectosDelItem.map((asp) => {
                                            const aspecto = aspectosById.get(`${asp.id}-${asp.cfg_t_id}`);
                                            return (
                                              <TableRow 
                                                key={`${asp.id}-${asp.cfg_t_id}`}
                                                className={asp.selected ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'}
                                              >
                                                <TableCell>
                                                  <Checkbox
                                                    checked={asp.selected}
                                                    onCheckedChange={(value) =>
                                                      updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                        selected: Boolean(value),
                                                      })
                                                    }
                                                  />
                                                </TableCell>
                                                <TableCell>
                                                  <div className="flex flex-col gap-1.5">
                                                    <span className="font-semibold text-sm">
                                                      {aspecto?.nombre ?? `Aspecto #${asp.id}`}
                                                    </span>
                                                    {aspecto?.descripcion && (
                                                      <span className="text-xs text-muted-foreground line-clamp-2">
                                                        {aspecto.descripcion}
                                                      </span>
                                                    )}
                                                  </div>
                                                </TableCell>
                                                {!item.es_pregunta_abierta && (
                                                  <>
                                                    <TableCell className="text-center">
                                                      <div className="flex items-center justify-center gap-2">
                                                        <Switch
                                                          checked={asp.es_cmt}
                                                          disabled={!asp.selected}
                                                          onCheckedChange={(value) =>
                                                            updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                              es_cmt: Boolean(value),
                                                              es_cmt_oblig: Boolean(value) && asp.es_cmt_oblig,
                                                            })
                                                          }
                                                        />
                                                        <span className="text-sm font-medium">
                                                          {asp.es_cmt ? "✓" : "✗"}
                                                        </span>
                                                      </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                      <div className="flex items-center justify-center gap-2">
                                                        <Switch
                                                          checked={asp.es_cmt_oblig}
                                                          disabled={!asp.selected || !asp.es_cmt}
                                                          onCheckedChange={(value) =>
                                                            updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                              es_cmt_oblig: Boolean(value),
                                                              es_cmt: true,
                                                            })
                                                          }
                                                        />
                                                        <span className="text-sm font-medium">
                                                          {asp.es_cmt_oblig ? "✓" : "✗"}
                                                        </span>
                                                      </div>
                                                    </TableCell>
                                                  </>
                                                )}
                                                {item.es_pregunta_abierta && (
                                                  <TableCell className="text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                      <Switch
                                                        checked={asp.es_cmt_oblig}
                                                        disabled={!asp.selected}
                                                        onCheckedChange={(value) =>
                                                          updateAspecto(item.id, asp.id, asp.cfg_t_id, {
                                                            es_cmt_oblig: Boolean(value),
                                                          })
                                                        }
                                                      />
                                                      <span className="text-sm font-medium">
                                                        {asp.es_cmt_oblig ? "✓" : "✗"}
                                                      </span>
                                                    </div>
                                                  </TableCell>
                                                )}
                                              </TableRow>
                                            );
                                          })}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </Card>
                            </Collapsible>
                          );
                        })}
                      </div>
                    )}



                    {/* PASO 4: Resumen (solo para con escalas) */}
                    {item.currentStep === 4 && item.tipoConfiguracion === 'conEscalas' && (
                      <div className="space-y-4">
                        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                          <h4 className="font-semibold text-emerald-900">Regla final que se guardara</h4>
                          <p className="text-sm text-slate-600">
                            Cada aspecto seleccionado se evaluara con las respuestas (escalas) elegidas en este bloque.
                          </p>

                          <div className="grid gap-2 sm:grid-cols-3">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                              <p className="text-xs uppercase tracking-wide text-slate-500">Respuestas</p>
                              <p className="text-xl font-semibold text-slate-900">{selectedEscalas.length}</p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                              <p className="text-xs uppercase tracking-wide text-slate-500">Preguntas</p>
                              <p className="text-xl font-semibold text-slate-900">{selectedAspectos.length}</p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                              <p className="text-xs uppercase tracking-wide text-slate-500">Comentarios obligatorios</p>
                              <p className="text-xl font-semibold text-slate-900">{withRequiredComments}</p>
                            </div>
                          </div>

                          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-2">
                            <p className="text-xs font-semibold text-slate-600">Respuestas que se aplicaran:</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedEscalas.length > 0 ? (
                                selectedEscalas.map((escala) => (
                                  <Badge key={`${escala.id}-${escala.cfg_t_id}`} variant="outline" className="text-xs">
                                    {escala.sigla} - {escala.nombre}
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-xs text-slate-500">No hay respuestas seleccionadas.</span>
                              )}
                            </div>
                          </div>

                          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-2">
                            <p className="text-xs font-semibold text-slate-600">Preguntas que usaran esas respuestas:</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedAspectoNombres.length > 0 ? (
                                selectedAspectoNombres.map((nombre, idx) => (
                                  <Badge key={`${item.id}-asp-${idx}`} variant="secondary" className="text-xs">
                                    {nombre}
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-xs text-slate-500">No hay preguntas seleccionadas.</span>
                              )}
                            </div>
                          </div>

                          <div className="text-xs text-slate-600">
                            Comentarios activos: <span className="font-semibold text-slate-900">{withComments}</span> de <span className="font-semibold text-slate-900">{selectedAspectos.length}</span> preguntas.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Error message */}
                    {error && (
                      <div className="flex items-start gap-3 p-4 text-destructive bg-destructive/10 border-2 border-destructive/50 rounded-lg">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Error</p>
                          <p className="text-sm">{error}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>

                  {/* Footer con botones de navegación */}
                  <div className="border-t bg-slate-50 p-3 flex flex-wrap items-center justify-between gap-2">
                    {/* Mostrar Atrás solo si no está en Step 1 */}
                    {!(item.currentStep === 1 && item.tipoConfiguracion === null) && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => goToPrev(item.id)}
                        disabled={item.currentStep === 1}
                        className="gap-2 h-9 rounded-lg"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Atrás
                      </Button>
                    )}

                    {item.currentStep === maxStep ? (
                      <div className="text-[11px] text-slate-600 order-3 w-full sm:order-none sm:w-auto">
                        ✅ Configuración completada
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-600 order-3 w-full sm:order-none sm:w-auto">
                        Paso {item.currentStep} de {maxStep}
                      </div>
                    )}

                    {/* Mostrar Siguiente solo si tipo está seleccionado y no es el último paso */}
                    {!(item.currentStep === 1 && item.tipoConfiguracion === null) && item.currentStep < maxStep && (
                      <Button
                        type="button"
                        onClick={() => goToNext(item.id)}
                        className="gap-2 h-9 rounded-lg"
                      >
                        Siguiente
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

    </BaseModal>
  );
}
