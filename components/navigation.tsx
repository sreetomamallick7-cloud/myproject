"use client"

import { useState, useEffect } from "react"

const leftNavLinks = [
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrivals" },
]

const rightNavLinks = [
  { label: "Our Story", href: "#our-story" },
  { label: "Bespoke", href: "#bespoke" },
]

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 1L15 10L8 19L1 10L8 1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-label="Search"
    >
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-label="Wishlist"
    >
      <path
        d="M10 17.5C10 17.5 2.5 13 2.5 7.5C2.5 4.5 5 2.5 7.5 2.5C9 2.5 10 3.5 10 3.5C10 3.5 11 2.5 12.5 2.5C15 2.5 17.5 4.5 17.5 7.5C17.5 13 10 17.5 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EnquireIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-label="Enquire"
    >
      <rect x="2" y="4" width="16" height="12" rx="0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-lumiere-white/[0.92] backdrop-blur-sm border-b border-lumiere-silver"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="h-full px-12 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left - Navigation Links */}
        <ul className="flex items-center gap-10">
          {leftNavLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isScrolled
                    ? "text-lumiere-navy hover:text-lumiere-royal"
                    : "text-lumiere-white hover:text-white/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center - Logo */}
        <a
          href="/"
          className="flex items-center gap-3 px-16"
        >
          <DiamondIcon className={`transition-colors duration-300 ${isScrolled ? "text-lumiere-navy" : "text-lumiere-white"}`} />
          <span className={`font-serif text-[20px] font-normal tracking-[0.35em] transition-colors duration-300 ${isScrolled ? "text-lumiere-navy" : "text-lumiere-white"}`}>
            LUMIÈRE
          </span>
        </a>

        {/* Right - Navigation Links + Utility Icons */}
        <div className="flex items-center justify-end gap-10">
          <ul className="flex items-center gap-10">
            {rightNavLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isScrolled
                      ? "text-lumiere-navy hover:text-lumiere-royal"
                      : "text-lumiere-white hover:text-white/70"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-6">
          <button
            type="button"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-lumiere-icon hover:text-lumiere-royal"
                : "text-lumiere-white/80 hover:text-lumiere-white"
            }`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-lumiere-icon hover:text-lumiere-royal"
                : "text-lumiere-white/80 hover:text-lumiere-white"
            }`}
            aria-label="Wishlist"
          >
            <HeartIcon />
          </button>
          <button
            type="button"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-lumiere-icon hover:text-lumiere-royal"
                : "text-lumiere-white/80 hover:text-lumiere-white"
            }`}
            aria-label="Enquire"
          >
            <EnquireIcon />
          </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
