"use client"

import { useState } from "react"

// SVG Icons - premium stroke style, 48x48
const BookIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="transition-all duration-300"
    style={{
      stroke: isHovered ? "#FFFFFF" : "#1B3A8C",
    }}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 10h12c2.2 0 4 1.8 4 4v24c0-2.2-1.8-4-4-4H8V10z" />
    <path d="M40 10H28c-2.2 0-4 1.8-4 4v24c0-2.2 1.8-4 4-4h12V10z" />
    <path d="M14 18h-2" />
    <path d="M14 24h-2" />
    <path d="M34 18h2" />
    <path d="M34 24h2" />
  </svg>
)

const DiamondChatIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="transition-all duration-300"
    style={{
      stroke: isHovered ? "#FFFFFF" : "#1B3A8C",
    }}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 10h32v24H16l-8 8v-8H8V10z" />
    <path d="M24 18l4 5-4 5-4-5 4-5z" />
  </svg>
)

const CoBrowseIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="transition-all duration-300"
    style={{
      stroke: isHovered ? "#FFFFFF" : "#1B3A8C",
    }}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="8" width="36" height="26" />
    <path d="M18 38h12" />
    <path d="M24 34v4" />
    <circle cx="18" cy="21" r="3" />
    <circle cx="30" cy="21" r="3" />
    <path d="M21 21h6" />
  </svg>
)

const DiamondMark = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#1B3A8C"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 2l6 6-6 10-6-10 6-6z" />
  </svg>
)

const intentCards = [
  {
    icon: BookIcon,
    heading: "Request the Lookbook",
    description:
      "Receive our full collection catalogue — every piece, every detail, every story — delivered digitally within 4 hours.",
    cta: "Request Lookbook",
  },
  {
    icon: DiamondChatIcon,
    heading: "Talk to a Diamond Expert",
    description:
      "Speak directly with one of our GIA-trained advisors. Video or voice — at a time that suits you.",
    cta: "Speak to an Expert",
  },
  {
    icon: CoBrowseIcon,
    heading: "Browse Together, Live",
    description:
      "Let our advisor guide you through the collection in real time — on your screen, at your pace, with no obligation.",
    cta: "Start Co-Browsing",
  },
]

const benefits = [
  {
    title: "First Access",
    detail:
      "New collections presented to Inner Circle members 72 hours before public release",
  },
  {
    title: "Private Events",
    detail:
      "Invitations to LUMIÈRE preview evenings in Paris, Milan, and Mumbai",
  },
  {
    title: "A Dedicated Advisor",
    detail:
      "One named advisor. Always available. Knows your collection and your story.",
  },
]

export function IntentCapture() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="w-full">
      {/* How Would You Like to Begin - Clean White Background */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "96px 24px",
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "1080px",
          }}
        >
          {/* Section Header */}
          <div className="text-center">
            {/* Eyebrow */}
            <p
              className="font-sans uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "0.26em",
                color: "#1B3A8C",
                marginBottom: "16px",
              }}
            >
              The Next Step
            </p>

            {/* Ornamental Line */}
            <div
              className="mx-auto"
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: "rgba(10,22,40,0.12)",
                marginBottom: "16px",
              }}
            />

            {/* Heading */}
            <h2
              className="font-serif"
              style={{
                fontSize: "56px",
                fontWeight: 300,
                color: "#0A1628",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                marginBottom: "16px",
              }}
            >
              How would you like to{" "}
              <span className="italic">begin?</span>
            </h2>

            {/* Subheading */}
            <p
              className="mx-auto font-sans font-light"
              style={{
                fontSize: "15px",
                color: "#5A6478",
                lineHeight: 1.9,
                marginBottom: "72px",
              }}
            >
              Every LUMIÈRE journey starts with a conversation.
              <br />
              Choose what feels right.
            </p>
          </div>

          {/* Three Intent Cards */}
          <div
            className="grid grid-cols-3"
            style={{
              gap: "24px",
            }}
          >
            {intentCards.map((card, index) => {
              const Icon = card.icon
              const isHovered = hoveredCard === index

              return (
                <div
                  key={index}
                  className="group flex flex-col cursor-pointer"
                  style={{
                    backgroundColor: isHovered ? "#0A1628" : "#FAFAFA",
                    border: "1px solid",
                    borderColor: isHovered ? "#0A1628" : "rgba(10,22,40,0.08)",
                    padding: "48px 40px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHovered 
                      ? "0 20px 40px rgba(10,22,40,0.15)" 
                      : "0 2px 8px rgba(10,22,40,0.04)",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon Container */}
                  <div 
                    className="flex items-center justify-center transition-all duration-400"
                    style={{ 
                      marginBottom: "32px",
                      width: "80px",
                      height: "80px",
                      backgroundColor: isHovered ? "rgba(27,58,140,0.2)" : "rgba(27,58,140,0.06)",
                      border: "1px solid",
                      borderColor: isHovered ? "rgba(27,58,140,0.4)" : "rgba(27,58,140,0.12)",
                    }}
                  >
                    <Icon isHovered={isHovered} />
                  </div>

                  {/* Heading */}
                  <h3
                    className="font-serif italic transition-colors duration-300"
                    style={{
                      fontSize: "28px",
                      fontWeight: 300,
                      color: isHovered ? "#FFFFFF" : "#0A1628",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                    }}
                  >
                    {card.heading}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-sans font-light transition-colors duration-300"
                    style={{
                      fontSize: "14px",
                      color: isHovered ? "rgba(255,255,255,0.6)" : "#5A6478",
                      lineHeight: 1.9,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" style={{ minHeight: "32px" }} />

                  {/* CTA Button */}
                  <button
                    className="font-sans uppercase transition-all duration-300"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      height: "48px",
                      padding: "0 28px",
                      backgroundColor: isHovered ? "#1B3A8C" : "transparent",
                      border: "1px solid",
                      borderColor: isHovered ? "#1B3A8C" : "rgba(27,58,140,0.3)",
                      color: isHovered ? "#FFFFFF" : "#1B3A8C",
                      transform: isHovered ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    {card.cta}
                    <span className="ml-2">→</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

      {/* Inner Circle Section - With Background Image */}
      <div
        className="relative"
        style={{
          backgroundColor: "#0A1628",
        }}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/intent-consultation.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "saturate(0.85)",
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(10,22,40,0.88)",
          }}
        />

        {/* Content */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "1080px",
            padding: "96px 24px",
          }}
        >
          {/* Transitional Text */}
          <p
            className="text-center font-serif italic"
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              marginBottom: "48px",
            }}
          >
            Or, stay connected for life.
          </p>

          {/* Inner Circle Card */}
          <div
            style={{
              backgroundColor: "rgba(27,58,140,0.12)",
              border: "1px solid rgba(27,58,140,0.3)",
              padding: "48px 56px",
            }}
          >
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column - 7/12 */}
            <div className="col-span-7">
              {/* Diamond Mark */}
              <div style={{ marginBottom: "20px" }}>
                <DiamondMark />
              </div>

              {/* Heading */}
              <h3
                className="font-serif italic"
                style={{
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                The Inner Circle
              </h3>

              {/* Description */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.9,
                  maxWidth: "52ch",
                  marginBottom: "32px",
                }}
              >
                LUMIÈRE&apos;s private membership — for those who have chosen us once
                and wish to remain close to what we make next. Early access.
                Private events. A relationship that outlasts any single piece.
              </p>

              {/* CTA Button */}
              <button
                className="font-sans uppercase transition-colors duration-300"
                style={{
                  backgroundColor: "#1B3A8C",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  height: "52px",
                  padding: "0 40px",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#142E6E"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1B3A8C"
                }}
              >
                Join the Inner Circle →
              </button>

              {/* Micro-copy */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "14px",
                }}
              >
                No purchase required. Invitation removable at any time.
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="col-span-5 flex flex-col justify-center">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div style={{ paddingTop: index === 0 ? 0 : "24px" }}>
                    {/* Benefit Title */}
                    <p
                      className="font-serif"
                      style={{
                        fontSize: "17px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                      }}
                    >
                      {benefit.title}
                    </p>

                    {/* Benefit Detail */}
                    <p
                      className="font-sans font-light"
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.detail}
                    </p>
                  </div>

                  {/* Divider - except last */}
                  {index < benefits.length - 1 && (
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        marginTop: "24px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
