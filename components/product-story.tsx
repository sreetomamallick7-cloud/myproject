"use client"

import { useState } from "react"
import Image from "next/image"

// Arrow icon for navigation
function ArrowIcon({ direction, className }: { direction: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === "left" ? (
        <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

const tabs = [
  { 
    id: "stone", 
    label: "The Stone", 
    number: "01",
    title: "A diamond chosen once in ten thousand.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=90",
    details: [
      { label: "Carat", value: "2.4ct Oval" },
      { label: "Colour", value: "D — Colourless" },
      { label: "Clarity", value: "VS1" },
      { label: "Origin", value: "Botswana" },
    ]
  },
  { 
    id: "making", 
    label: "The Making", 
    number: "02",
    title: "72 hours. One craftsman. One stone.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=90",
    details: [
      { label: "Selection", value: "8 Hours" },
      { label: "Setting", value: "14 Hours" },
      { label: "Pavé Work", value: "38 Hours" },
      { label: "Finishing", value: "12 Hours" },
    ]
  },
  { 
    id: "authority", 
    label: "The Authority", 
    number: "03",
    title: "Trusted by those who know.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=90",
    details: [
      { label: "Since", value: "1847" },
      { label: "Pieces", value: "4,200+" },
      { label: "GIA Certified", value: "100%" },
      { label: "Press Features", value: "62" },
    ]
  },
]

export function ProductStory() {
  const [activeTab, setActiveTab] = useState("stone")

  const currentIndex = tabs.findIndex((t) => t.id === activeTab)
  const currentTab = tabs[currentIndex]

  const goToPrev = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id)
    }
  }

  return (
    <section className="bg-white">
      {/* Section Header */}
      <div className="px-20 max-lg:px-8 pt-24 pb-10">
        <span
          className="block font-sans text-[10px] uppercase tracking-[0.22em] mb-3"
          style={{ color: "#1B3A8C" }}
        >
          Why This Piece
        </span>
        <h2
          className="font-serif text-[42px] font-light italic tracking-[0.02em]"
          style={{ color: "#0A1628" }}
        >
          The story behind the stone.
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="px-20 max-lg:px-8 pb-8">
        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group relative pb-3 transition-colors duration-300"
              >
                <span
                  className="font-sans text-[10px] uppercase tracking-[0.18em] mr-2 transition-colors duration-300"
                  style={{ color: activeTab === tab.id ? "#1B3A8C" : "#A8B2C0" }}
                >
                  {tab.number}
                </span>
                <span
                  className="font-serif text-[17px] tracking-[0.02em] transition-colors duration-300"
                  style={{ color: activeTab === tab.id ? "#0A1628" : "#A8B2C0" }}
                >
                  {tab.label}
                </span>
                {/* Active underline */}
                <div
                  className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                  style={{
                    width: activeTab === tab.id ? "100%" : "0%",
                    background: "#1B3A8C",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 border flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:border-lumiere-royal"
              style={{ borderColor: "#C8D0DC" }}
            >
              <ArrowIcon direction="left" className="w-5 h-5 text-lumiere-navy" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === tabs.length - 1}
              className="w-10 h-10 border flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:border-lumiere-royal"
              style={{ borderColor: "#C8D0DC" }}
            >
              <ArrowIcon direction="right" className="w-5 h-5 text-lumiere-navy" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content - Image Forward */}
      <div className="relative h-[600px] max-lg:h-[500px] overflow-hidden">
        {/* Full-width Image */}
        <Image
          src={currentTab.image}
          alt={currentTab.label}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="100vw"
          priority
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.6) 40%, rgba(10,22,40,0.2) 70%, transparent 100%)"
          }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-20 max-lg:px-8">
            <h3
              className="font-serif text-[36px] max-lg:text-[28px] font-light leading-[1.15] tracking-[0.02em] mb-8 max-w-[420px]"
              style={{ color: "#FFFFFF" }}
            >
              {currentTab.title}
            </h3>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              {currentTab.details.map((detail, i) => (
                <div key={i}>
                  <span
                    className="block font-sans text-[9px] uppercase tracking-[0.14em] mb-1"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {detail.label}
                  </span>
                  <span 
                    className="font-serif text-[20px]" 
                    style={{ color: "#FFFFFF" }}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
