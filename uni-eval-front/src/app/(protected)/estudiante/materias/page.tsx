"use client"

import { useState, useEffect } from "react"
import { authService } from "@/src/api"
import type { UserProfile } from "@/src/api"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { GraduationCap, MapPin, Calendar, BookOpen, User } from "lucide-react"

export default function MateriasPage() {
  const [perfil, setPerfil] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cargar = async () => {
      try {
        const response = await authService.getProfile()
        if (response.success && response.data) {
          setPerfil(response.data)
        } else {
          setError("No se pudo cargar el perfil")
        }
      } catch {
        setError("Error al cargar las materias")
      } finally {
        setLoading(false)
      }
    }
    cargar()
  }, [])

  const capitalize = (str?: string | null) => {
    if (!str) return ""
    return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Mis Materias
          </h1>
          {perfil && (
            <p className="text-gray-500 text-sm mt-1">
              {capitalize(perfil.nombre_completo)}
            </p>
          )}
        </div>

        {/* Info del estudiante */}
        {loading ? (
          <div className="space-y-3 mb-6">
            <Skeleton className="h-16 w-full rounded-xl" />
            <Skeleton className="h-16 w-full rounded-xl" />
          </div>
        ) : perfil ? (
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white rounded-xl border p-3 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Programa</p>
                <p className="text-sm font-medium truncate">{perfil.programa || "—"}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border p-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Sede</p>
                <p className="text-sm font-medium truncate">{perfil.sede || "—"}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border p-3 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Periodo</p>
                <p className="text-sm font-medium">{perfil.periodo || "—"}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border p-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Semestre</p>
                <p className="text-sm font-medium truncate">{perfil.semestre || "—"}</p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Lista de materias */}
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center text-red-600 text-sm">
            {error}
          </div>
        ) : perfil?.materias && perfil.materias.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">
              {perfil.materias.length} materia{perfil.materias.length !== 1 ? "s" : ""} registrada{perfil.materias.length !== 1 ? "s" : ""}
            </p>
            {perfil.materias.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border p-4 flex items-start justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900">
                    {m.nombre || `Materia ${m.codigo}`}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Código: {m.codigo}</p>
                  {m.docente?.nombre && (
                    <div className="flex items-center gap-1 mt-2">
                      <User className="h-3 w-3 text-gray-400" />
                      <p className="text-xs text-gray-500">
                        {capitalize(m.docente.nombre)}
                      </p>
                    </div>
                  )}
                </div>
                {m.semestre && (
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {m.semestre}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border p-8 text-center text-gray-400 text-sm">
            No hay materias registradas para este periodo.
          </div>
        )}
      </div>
    </div>
  )
}
