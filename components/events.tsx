"use client"

import Image from "next/image"
import { useState } from "react"

const events = [
  {
    city: "Paris",
    eventName: "Haute Joaillerie Paris 2024",
    date: "October 2024 · Grand Palais, Paris",
    collection: "The Luminary Collection",
    image: "/images/event-paris.jpg",
  },
  {
    city: "Milan",
    eventName: "Milano Gioiello 2024",
    date: "September 2024 · Palazzo Reale, Milan",
    collection: "Eternelle Bridal",
    image: "/images/event-milan.jpg",
  },
  {
    city: "Los Angeles",
    eventName: "The Luxury Collection Show LA 2024",
    date: "November 2024 · Hauser & Wirth, LA",
    collection: "Eclipse",
    image: "/images/event-la.jpg",
  },
]

export function Events() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      {/* Section Header - Left Aligned */}
      <div className="mb-16">
        {/* Eyebrow */}
        <p
          className="font-sans uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            color: "#1B3A8C",
            marginBottom: "12px",
          }}
        >
          As Seen At
        </p>

        {/* Heading */}
        <h2
          className="font-serif italic"
          style={{
            fontSize: "48px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "#0A1628",
            marginBottom: "12px",
          }}
        >
          On the World Stage.
        </h2>

        {/* Subheading */}
        <p
          className="font-sans"
          style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "#5A6478",
            maxWidth: "52ch",
            marginBottom: "64px",
          }}
        >
          LUMIÈRE has been presented at three of the world&apos;s most celebrated jewellery and fashion events — each a stage for the rarest pieces in our collection.
        </p>
      </div>

      {/* Three Event Banners */}
      <div
        className="grid grid-cols-3"
        style={{ gap: "16px" }}
      >
        {events.map((event, index) => (
          <div key={event.city}>
            {/* Banner Card */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "2/5" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={event.image}
                alt={`LUMIÈRE at ${event.city}`}
                fill
                className="object-cover transition-transform duration-[600ms]"
                style={{
                  objectPosition: "center top",
                  transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,40,0.80) 0%, transparent 45%)",
                }}
              />

              {/* Event Information Overlay */}
              <div
                className="absolute bottom-0 left-0"
                style={{ padding: "28px" }}
              >
                {/* City Name */}
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                  }}
                >
                  {event.city}
                </h3>

                {/* Event Full Name */}
                <p
                  className="font-sans uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: "6px",
                  }}
                >
                  {event.eventName}
                </p>

                {/* Royal Blue Line */}
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: "#1B3A8C",
                    marginTop: "12px",
                  }}
                />
              </div>
            </div>

            {/* Event Caption Below Banner */}
            <div style={{ marginTop: "20px" }}>
              {/* Date and Location */}
              <p
                className="font-sans uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "#A8B2C0",
                }}
              >
                {event.date}
              </p>

              {/* Collection Name */}
              <p
                className="font-serif"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#0A1628",
                  marginTop: "6px",
                }}
              >
                {event.collection}
              </p>

              {/* View Collection Link */}
              <a
                href="#"
                className="group inline-flex items-center font-sans uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "#0A1628",
                  marginTop: "10px",
                  minHeight: "44px",
                  textDecoration: "none",
                }}
              >
                <span className="relative">
                  View the Collection
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 bg-[#1B3A8C] transition-all duration-200 group-hover:w-full"
                  />
                </span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Section Footer Row */}
      <div
        className="flex items-center"
        style={{ marginTop: "64px" }}
      >
        {/* Left Half - Pull Quote */}
        <div className="flex-1 pr-8">
          <p
            className="font-serif italic"
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#0A1628",
            }}
          >
            &ldquo;The jewellery stopped the room.&rdquo;
          </p>
          <p
            className="font-sans uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "#A8B2C0",
              marginTop: "8px",
            }}
          >
            — Vogue India, October 2024
          </p>
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: "1px",
            height: "52px",
            backgroundColor: "#C8D0DC",
          }}
        />

        {/* Right Half - CTA Button */}
        <div className="flex-1 pl-8 text-right">
          <button
            className="inline-flex items-center font-sans uppercase transition-all duration-200"
            style={{
              height: "52px",
              padding: "0 40px",
              backgroundColor: "transparent",
              border: ctaHovered ? "1px solid #1B3A8C" : "1px solid #C8D0DC",
              fontSize: "11px",
              letterSpacing: "0.16em",
              color: ctaHovered ? "#1B3A8C" : "#0A1628",
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <span>View All Events</span>
            <span
              className="ml-2 transition-transform duration-200"
              style={{
                transform: ctaHovered ? "translateX(4px)" : "translateX(0)",
              }}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
