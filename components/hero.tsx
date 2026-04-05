"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full">
      {/* Full Bleed Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
        alt="Elegant woman wearing diamond jewellery in an editorial luxury portrait"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-lumiere-navy/40" />

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`font-serif font-light text-[clamp(48px,8vw,120px)] tracking-[0.08em] text-lumiere-white text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          LUMIÈRE
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="relative w-px h-10 bg-white/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-scroll-pulse" />
        </div>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
          Scroll
        </span>
      </div>
    </section>
  )
}
