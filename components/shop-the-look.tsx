"use client"

import Image from "next/image"

const looks = [
  {
    id: 1,
    lookNumber: "01",
    collection: "The Luminary Collection",
    pieceName: "Le Soleil Diamond Necklace",
    details: "2.4ct · 18k White Gold · GIA Certified",
    image: "/images/shop-look-model-1.jpg",
    href: "#",
  },
  {
    id: 2,
    lookNumber: "02",
    collection: "Eternelle Bridal",
    pieceName: "Eternelle Pavé Ring",
    details: "1.8ct · Platinum · GIA Certified",
    image: "/images/shop-look-model-2.jpg",
    href: "#",
  },
]

export function ShopTheLook() {
  return (
    <section className="bg-white py-24 px-20 max-lg:px-8 max-md:px-4">
      {/* Section Header */}
      <div className="mb-14">
        <span
          className="block font-sans text-[10px] uppercase tracking-[0.22em] mb-3"
          style={{ color: "#1B3A8C" }}
        >
          Editorial
        </span>
        <h2
          className="font-serif text-[48px] max-lg:text-[40px] max-md:text-[32px] font-light tracking-[0.02em]"
          style={{ color: "#0A1628" }}
        >
          Shop the Look
        </h2>
      </div>

      {/* Two Model Image Layout */}
      <div className="flex max-md:flex-col gap-[2px]">
        {looks.map((look) => (
          <div key={look.id} className="flex-1 max-md:w-full">
            {/* Image Card */}
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <Image
                src={look.image}
                alt={look.pieceName}
                fill
                className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Look Information */}
            <div className="mt-6">
              {/* Line 1 - Look label and Collection name */}
              <div className="flex items-center gap-4">
                <span
                  className="font-sans text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: "#A8B2C0" }}
                >
                  Look {look.lookNumber}
                </span>
                <span
                  className="font-sans text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: "#1B3A8C" }}
                >
                  {look.collection}
                </span>
              </div>

              {/* Line 2 - Piece name */}
              <h3
                className="font-serif text-[24px] max-md:text-[20px] font-normal tracking-[0.01em] mt-2"
                style={{ color: "#0A1628" }}
              >
                {look.pieceName}
              </h3>

              {/* Line 3 - Material detail */}
              <p
                className="font-sans text-[12px] font-light tracking-[0.06em] mt-1.5"
                style={{ color: "#5A6478" }}
              >
                {look.details}
              </p>

              {/* Line 4 - Ghost text CTA */}
              <a
                href={look.href}
                className="group/link inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.14em] mt-3.5 min-h-[44px] transition-colors duration-300"
                style={{ color: "#0A1628" }}
              >
                <span className="relative">
                  View Piece
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover/link:w-full"
                    style={{ backgroundColor: "#1B3A8C" }}
                  />
                </span>
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
