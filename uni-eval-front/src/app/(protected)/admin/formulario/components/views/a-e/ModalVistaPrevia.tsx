"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Eye,
  ChevronDown,
  ChevronUp,
  BookOpen,
  User,
  MessageSquare,
  AlertTriangle,
  Info,
} from "lucide-react";
import { configuracionEvaluacionService } from "@/src/api";
import type { ConfiguracionAspectosEscalasResponse } from "@/src/api/services/app/cfg-t.service";

interface ModalVistaPreviaProps {
  isOpen: boolean;
  onClose: () => void;
  cfgTId: number | null;
  configName?: string;
}

export function ModalVistaPrevia({
  isOpen,
  onClose,
  cfgTId,
  configName,
}: ModalVistaPreviaProps) {
  const [config, setConfig] = useState<ConfiguracionAspectosEscalasResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [openAspecto, setOpenAspecto] = useState<number | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen || !cfgTId) return;
    setConfig(null);
    setOpenAspecto(null);
    setWarnings([]);
    loadPreview(cfgTId);
  }, [isOpen, cfgTId]);

  const loadPreview = async (id: number) => {
    setLoading(true);
    try {
      const response = await configuracionEvaluacionService.getAspectosConEscalas(id);
      if (response.success && response.data) {
        setConfig(response.data);
        detectWarnings(response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const detectWarnings = (data: ConfiguracionAspectosEscalasResponse) => {
    const w: string[] = [];

    if (!data.aspectos?.length) {
      w.push("No hay aspectos configurados. El estudiante verá un formulario vacío.");
    }

    const aspectosSinOpciones = data.aspectos.filter(
      (a) => !a.opciones?.length || a.opciones.every((op) => !op.sigla && !op.nombre)
    );
    if (aspectosSinOpciones.length > 0 && aspectosSinOpciones.length < data.aspectos.length) {
      w.push(
        `${aspectosSinOpciones.length} aspecto(s) sin escalas vinculadas — aparecerán como pregunta abierta.`
      );
    }

    const puntajeCero = data.aspectos.flatMap((a) => a.opciones).filter(
      (op) => op.puntaje !== null && Number(op.puntaje) === 0
    );
    if (puntajeCero.length > 0) {
      w.push(
        `${puntajeCero.length} opción(es) con puntaje 0 — no sumarán a la nota del docente.`
      );
    }

    setWarnings(w);
  };

  const isAspectoSinEscala = (aspecto: ConfiguracionAspectosEscalasResponse["aspectos"][number]) =>
    !aspecto.opciones?.length || aspecto.opciones.every((op) => !op.sigla && !op.nombre && !op.descripcion);

  const totalAspectos = config?.aspectos.length || 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Eye className="h-4 w-4 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-base font-bold leading-tight">Vista Previa</DialogTitle>
              {configName && (
                <p className="text-xs text-gray-400 truncate mt-0.5">{configName}</p>
              )}
            </div>
            <Badge className="bg-indigo-50 text-indigo-600 border-none text-xs font-semibold">
              Solo lectura
            </Badge>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 pt-4 space-y-4">

          {/* Banner informativo */}
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3">
            <Info className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700">
              Así verá el estudiante el formulario al momento de evaluar al docente. Las respuestas están deshabilitadas.
            </p>
          </div>

          {/* Advertencias */}
          {warnings.length > 0 && (
            <div className="space-y-2">
              {warnings.map((w, i) => (
                <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700">{w}</p>
                </div>
              ))}
            </div>
          )}

          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-20 rounded-2xl" />
              <Skeleton className="h-16 rounded-2xl" />
              <Skeleton className="h-16 rounded-2xl" />
              <Skeleton className="h-16 rounded-2xl" />
            </div>
          ) : !config ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              No se pudo cargar la vista previa.
            </div>
          ) : (
            <div className="space-y-3">

              {/* Header del formulario (como lo ve el estudiante) */}
              <Card className="rounded-2xl shadow-sm border">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-base font-bold leading-tight">
                    {config.tipo_evaluacion?.tipo?.nombre || "Evaluación docente"}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Materia del estudiante</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <User className="h-3.5 w-3.5" />
                    <span>Nombre del docente</span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>0 de {totalAspectos} respondidos</span>
                      <span className="font-semibold text-blue-500">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Aspectos */}
              {config.aspectos.map((aspecto, index) => {
                const abierto = openAspecto === aspecto.id;
                const esSinEscala = isAspectoSinEscala(aspecto);
                const tienePuntajeCero = aspecto.opciones.some(
                  (op) => op.puntaje !== null && Number(op.puntaje) === 0
                );

                return (
                  <Card key={aspecto.id} className="rounded-xl shadow-sm overflow-hidden">
                    <button
                      type="button"
                      className="w-full text-left p-4 flex justify-between items-start gap-2 hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenAspecto(abierto ? null : aspecto.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-indigo-400">#{index + 1}</span>
                          <h3 className="font-semibold text-sm leading-snug">{aspecto.nombre}</h3>
                          {esSinEscala && (
                            <Badge className="bg-purple-50 text-purple-600 border-none text-[10px] font-semibold h-4 px-1.5">
                              Abierta
                            </Badge>
                          )}
                          {tienePuntajeCero && !esSinEscala && (
                            <Badge className="bg-amber-50 text-amber-600 border-none text-[10px] font-semibold h-4 px-1.5">
                              Puntaje 0
                            </Badge>
                          )}
                        </div>
                        {aspecto.descripcion && (
                          <p className="text-xs text-gray-400 mt-0.5 leading-snug">{aspecto.descripcion}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0 mt-0.5 text-gray-400">
                        {abierto ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </button>

                    {abierto && (
                      <CardContent className="border-t pt-3 pb-4 px-4 space-y-2">
                        {esSinEscala ? (
                          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3 text-xs text-gray-400 text-center">
                            El estudiante escribirá su respuesta aquí (pregunta abierta)
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {aspecto.opciones.map((op) => (
                              <div
                                key={op.id}
                                className="flex items-center justify-between border rounded-xl p-3 bg-white gap-3"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-xs leading-snug">
                                    {op.sigla} - {op.nombre}
                                  </p>
                                  {op.descripcion && (
                                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">{op.descripcion}</p>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                    Number(op.puntaje) === 0
                                      ? 'bg-amber-50 text-amber-500'
                                      : 'bg-indigo-50 text-indigo-500'
                                  }`}>
                                    {op.puntaje ?? 0} pts
                                  </span>
                                  <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {!esSinEscala && aspecto.es_cmt && (
                          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3">
                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>
                                Comentario del aspecto
                                {aspecto.es_cmt_oblig && (
                                  <span className="text-red-400 ml-1">(obligatorio)</span>
                                )}
                              </span>
                            </div>
                            <div className="text-xs text-gray-300 italic">El estudiante escribirá aquí...</div>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>
                );
              })}

              {/* Comentario general */}
              {config.es_cmt_gen && (
                <Card className="rounded-xl shadow-sm">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-gray-400" />
                      <h3 className="font-semibold text-sm">Comentario general</h3>
                      {config.es_cmt_gen_oblig && (
                        <Badge className="bg-red-50 text-red-500 border-none text-[10px] font-semibold h-4 px-1.5">
                          Obligatorio
                        </Badge>
                      )}
                    </div>
                    <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3 text-xs text-gray-300 italic">
                      El estudiante escribirá un comentario general aquí...
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Resumen */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-4 space-y-2">
                <p className="text-xs font-semibold text-slate-500">Resumen del formulario</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-800">{totalAspectos}</p>
                    <p className="text-[10px] text-slate-400">Aspectos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-800">
                      {config.aspectos.filter((a) => !isAspectoSinEscala(a)).length}
                    </p>
                    <p className="text-[10px] text-slate-400">Con escala</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-800">
                      {config.aspectos.filter((a) => isAspectoSinEscala(a)).length}
                    </p>
                    <p className="text-[10px] text-slate-400">Abiertas</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full rounded-xl h-11 font-semibold"
          >
            Cerrar vista previa
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
