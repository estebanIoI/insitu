"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { authService, type UserProfile } from "@/src/api"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  User as UserIcon,
  LogOut,
  Calendar,
  ChevronDown,
  GraduationCap,
  ChevronRight,
  Building2,
  FileText,
  ArrowLeft,
  MapPin,
  BookOpen,
} from "lucide-react"
import type { User } from "@/src/api/core/auth/types"

interface HeaderProps {
  onLogout?: () => void
}

export function Header({ onLogout }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [perfilAcademico, setPerfilAcademico] = useState<UserProfile | null>(null)
  const [loadingPerfil, setLoadingPerfil] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const isInEvaluacion =
    pathname?.includes("/estudiante/evaluacion/") ||
    pathname?.includes("/estudiante/evaluar/") ||
    (pathname?.includes("/estudiante/dashboard/") && pathname !== "/estudiante/dashboard")

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) setUser(JSON.parse(storedUser))
    } catch (error) {
      console.error("Error loading user:", error)
    }
  }, [])

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        setLoadingPerfil(true)
        const response = await authService.getProfile()
        if (response.success && response.data) setPerfilAcademico(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingPerfil(false)
      }
    }

    if (user) cargarPerfil()
  }, [user])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const capitalizeName = (name?: string | null) => {
    if (!name) return ""
    return name
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  }

  const getInitials = (name?: string | null) => {
    if (!name) return "U"
    return capitalizeName(name)
      .split(" ")
      .map((w) => w.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase()
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    if (onLogout) onLogout()
    else window.location.href = "/"
  }

  if (!user) {
    return (
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h1 className="font-bold text-base sm:text-lg">EduPortal</h1>
          </Link>
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </header>
    )
  }

  const capitalizedName = capitalizeName(user.user_name)

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b shadow"
            : "bg-white/60 backdrop-blur"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">

          {/* Left */}
          <div className="flex items-center gap-3">
            {isInEvaluacion && (
              <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h1 className="font-bold text-base sm:text-lg">EduPortal</h1>
            </Link>
          </div>

          {/* Right */}
          <DropdownMenu onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 rounded-xl px-2 min-w-0"
              >
                {/* NOMBRE AL LADO DEL ICON */}
                <span className="font-medium text-sm hidden sm:block">
                  {capitalizedName}
                </span>

                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white font-bold">
                    {getInitials(capitalizedName)}
                  </AvatarFallback>
                </Avatar>

                <ChevronDown
                  className={`h-4 w-4 transition ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[calc(100vw-1rem)] sm:w-80 max-w-sm p-4 sm:p-5" align="end" sideOffset={8}>

              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setShowProfileModal(true)}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  Mi Perfil
                  <ChevronRight className="ml-auto h-4 w-4" />
                </DropdownMenuItem>

                {/* MATERIAS */}
                <DropdownMenuItem asChild>
                  <Link href="/estudiante/materias" className="flex items-center w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Materias
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Modal Perfil */}
      <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
        <DialogContent className="w-[calc(100vw-1rem)] max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl p-4 sm:p-6">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-base sm:text-lg">Perfil del Estudiante</DialogTitle>
          </DialogHeader>

          {loadingPerfil ? (
            <div className="space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-14 rounded-xl" />
                ))}
              </div>
            </div>
          ) : perfilAcademico ? (
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="font-bold text-base sm:text-lg leading-tight">
                  {capitalizeName(perfilAcademico.nombre_completo)}
                </p>
                {perfilAcademico.semestre && (
                  <Badge className="mt-1 text-xs">{perfilAcademico.semestre}</Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <InfoItem
                  icon={<GraduationCap size={16} />}
                  label="Programa"
                  value={perfilAcademico.programa}
                />

                {perfilAcademico.facultad && (
                  <InfoItem
                    icon={<Building2 size={16} />}
                    label="Facultad"
                    value={perfilAcademico.facultad}
                  />
                )}

                <InfoItem
                  icon={<MapPin size={16} />}
                  label="Sede"
                  value={perfilAcademico.sede}
                />

                <InfoItem
                  icon={<Calendar size={16} />}
                  label="Periodo"
                  value={perfilAcademico.periodo}
                />
              </div>

              {perfilAcademico.materias && perfilAcademico.materias.length > 0 && (
                <div className="space-y-1.5">
                  <p className="font-semibold text-sm flex items-center gap-1.5">
                    <FileText size={14} />
                    Materias ({perfilAcademico.materias.length})
                  </p>

                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {perfilAcademico.materias.map((m, i) => (
                      <div key={i} className="p-2.5 border rounded-xl text-xs flex justify-between items-start gap-2 bg-gray-50">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 leading-snug">
                            {m.nombre || `Código ${m.codigo}`}
                          </p>
                          {m.docente?.nombre && (
                            <p className="text-gray-500 truncate mt-0.5">{m.docente.nombre}</p>
                          )}
                        </div>
                        <span className="text-gray-400 font-mono text-xs flex-shrink-0">{m.codigo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No se pudo cargar el perfil.</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-xl">
      <div className="flex-shrink-0 mt-0.5 text-gray-500">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="font-medium text-xs sm:text-sm leading-snug truncate">{value}</p>
      </div>
    </div>
  )
}
