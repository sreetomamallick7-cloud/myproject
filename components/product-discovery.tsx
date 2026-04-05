"use client"

import Image from "next/image"
import Link from "next/link"

const occasionItems = [
  {
    label: "A Proposal",
    href: "/collections/engagement",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=90",
  },
  {
    label: "Our Anniversary",
    href: "/collections/anniversary",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90",
  },
  {
    label: "A Self-Gift",
    href: "/collections/self-gift",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=90",
  },
  {
    label: "An Heirloom",
    href: "/collections/heirloom",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=90",
  },
]

export function ProductDiscovery() {
  return (
    <section className="bg-white py-24 max-lg:py-16">
      {/* Section Header */}
      <div className="mb-16 px-20 max-lg:px-8">
        <p
          className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3"
          style={{ color: "#1B3A8C" }}
        >
          Discover
        </p>
        <h2
          className="font-serif text-[48px] font-light italic tracking-[0.02em] mb-3 max-lg:text-[36px]"
          style={{ color: "#0A1628" }}
        >
          Find your piece.
        </h2>
        <p
          className="font-sans text-[15px] font-light leading-[1.9] max-w-[52ch]"
          style={{ color: "#5A6478" }}
        >
          Every piece in our collection was made for a specific kind of moment.
        </p>
      </div>

      {/* By Occasion */}
      <div className="px-20 max-lg:px-8">
        {/* Category Title */}
        <h3
          className="font-serif text-[24px] font-light tracking-[0.02em] mb-6"
          style={{ color: "#0A1628" }}
        >
          By Occasion
        </h3>

        {/* Horizontal Scroll Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {occasionItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative flex-shrink-0 w-[280px] aspect-[3/4] overflow-hidden max-lg:w-[240px]"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: "saturate(0.85)" }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10, 22, 40, 0.7) 0%, rgba(10, 22, 40, 0.1) 50%, transparent 100%)",
                    }}
                  />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-[20px] font-light tracking-[0.02em] text-white">
                      {item.label}
                    </p>
                    <div className="mt-3 flex items-center gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/80">
                        Explore
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-white/80"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
