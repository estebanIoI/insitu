"use client"

import Image from "next/image"

interface LoadingLogoProps {
  text?: string
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
}

export function LoadingLogo({ text = "Cargando...", size = "md", fullScreen = false }: LoadingLogoProps) {
  const sizes = {
    sm: { img: 80, wrapper: "py-8" },
    md: { img: 120, wrapper: "py-16" },
    lg: { img: 160, wrapper: "py-20" },
  }

  const { img, wrapper } = sizes[size]

  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? "" : wrapper}`}>
      <div className="relative">
        {/* Halo pulsante detrás del logo */}
        <div className="absolute inset-0 rounded-full bg-blue-100 scale-110 animate-ping opacity-30" />
        <Image
          src="/img/uniPutumayo/1-logo-azul-PNG.png"
          alt="Cargando"
          width={img}
          height={img}
          className="relative animate-pulse drop-shadow-md object-contain"
          priority
        />
      </div>
      {text && (
        <p className="text-sm font-medium text-gray-500 animate-pulse">{text}</p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {content}
      </div>
    )
  }

  return content
}
