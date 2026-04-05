"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Check } from "lucide-react"

const mosaicImages = [
  { src: "/images/mosaic-flawless-white.jpg", alt: "Flawless White Diamond" },
  { src: "/images/mosaic-rare-coloured.jpg", alt: "Rare Coloured Stone" },
  { src: "/images/mosaic-vintage-cut.jpg", alt: "Vintage Cut" },
  { src: "/images/mosaic-clarity.jpg", alt: "Exceptional Clarity" },
  { src: "/images/mosaic-understated.jpg", alt: "Understated" },
  { src: "/images/mosaic-statement.jpg", alt: "Statement" },
  { src: "/images/mosaic-heirloom.jpg", alt: "Heirloom" },
  { src: "/images/mosaic-modern.jpg", alt: "Modern" },
]

const quizQuestions = [
  {
    question: "What is this piece for?",
    options: [
      "A Proposal",
      "Our Anniversary",
      "A Self-Gift",
      "An Inheritance Piece",
      "A Wedding Gift",
      "A Milestone Birthday",
    ],
  },
  {
    question: "How does she wear her jewellery?",
    options: [
      "Minimal — one piece at a time",
      "Layered and curated",
      "A single statement piece",
      "She rarely wears jewellery",
    ],
  },
  {
    question: "What draws you to a diamond?",
    options: [
      "Its flawless clarity",
      "Its rare colour",
      "The cut and its brilliance",
      "The story of where it came from",
      "Its size and presence",
    ],
  },
  {
    question: "The piece should feel...",
    options: [
      "Understated",
      "Statement",
      "Romantic",
      "Architectural",
      "Heirloom",
      "Modern",
    ],
  },
]

export function FindYourPerfectPiece() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(Array(4).fill(null))
  const [showResult, setShowResult] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const handleSelectAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers(Array(4).fill(null))
    setShowResult(false)
  }

  const progressPercentage = showResult ? 100 : ((currentStep + 1) / 4) * 100

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Fixed Mosaic Background */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          {mosaicImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover saturate-[0.8]"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10,22,40,0.82)" }}
        />

        {/* Content Layer */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
          <div className="max-w-[680px] text-center">
            {/* Eyebrow */}
            <p
              className="mb-5 font-sans uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "0.26em",
                color: "#1B3A8C",
              }}
            >
              Personalised Discovery
            </p>

            {/* Ornamental Line */}
            <div
              className="mx-auto mb-5"
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            />

            {/* Main Heading */}
            <h2
              className="mb-6 font-serif font-light"
              style={{
                fontSize: "64px",
                lineHeight: "1.05",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              Find Your{" "}
              <span className="italic">Perfect Piece.</span>
            </h2>

            {/* Supporting Copy */}
            <p
              className="mx-auto mb-10 max-w-[44ch] font-sans font-light"
              style={{
                fontSize: "16px",
                lineHeight: "2.0",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Answer four questions about the moment, the feeling, and the stone — and we will show you the pieces from our collection that were made for exactly this.
            </p>

            {/* Primary CTA Button */}
            <button
              onClick={handleOpenModal}
              className="group mx-auto mb-4 flex h-16 items-center justify-center font-serif font-light italic transition-all duration-200"
              style={{
                padding: "0 64px",
                backgroundColor: "#1B3A8C",
                color: "#FFFFFF",
                fontSize: "18px",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#142E6E"
                e.currentTarget.style.boxShadow = "0 0 32px rgba(27,58,140,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1B3A8C"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <span>Take the Quiz</span>
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* Micro-copy */}
            <p
              className="font-sans font-light"
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              4 questions · 2 minutes · No sign-up required
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full animate-slide-up"
            style={{
              height: "90vh",
              backgroundColor: "#0A1628",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute right-8 top-8 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Modal Content */}
            <div className="flex h-full items-center justify-center px-6">
              <div className="w-full max-w-[560px]">
                {!showResult ? (
                  <>
                    {/* Step Indicator */}
                    <p
                      className="mb-2 font-sans uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      {String(currentStep + 1).padStart(2, "0")} / 04
                    </p>

                    {/* Progress Bar */}
                    <div
                      className="mb-12 w-full"
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        className="h-full transition-all duration-400"
                        style={{
                          width: `${progressPercentage}%`,
                          backgroundColor: "#1B3A8C",
                        }}
                      />
                    </div>

                    {/* Question */}
                    <h3
                      className="mb-9 font-serif font-light italic"
                      style={{
                        fontSize: "36px",
                        lineHeight: "1.1",
                        color: "#FFFFFF",
                      }}
                    >
                      {quizQuestions[currentStep].question}
                    </h3>

                    {/* Answer Options */}
                    <div className="flex flex-wrap justify-center gap-2.5">
                      {quizQuestions[currentStep].options.map((option) => {
                        const isSelected = answers[currentStep] === option
                        return (
                          <button
                            key={option}
                            onClick={() => handleSelectAnswer(option)}
                            className="flex items-center font-sans font-light transition-all duration-200"
                            style={{
                              height: "48px",
                              padding: "0 28px",
                              backgroundColor: isSelected
                                ? "#1B3A8C"
                                : "rgba(255,255,255,0.05)",
                              border: isSelected
                                ? "1px solid #1B3A8C"
                                : "1px solid rgba(255,255,255,0.15)",
                              fontSize: "12px",
                              letterSpacing: "0.08em",
                              color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"
                                e.currentTarget.style.color = "#FFFFFF"
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                                e.currentTarget.style.color = "rgba(255,255,255,0.6)"
                              }
                            }}
                          >
                            {isSelected && (
                              <Check size={14} className="mr-2" strokeWidth={1.5} />
                            )}
                            {option}
                          </button>
                        )
                      })}
                    </div>

                    {/* Next Link */}
                    <button
                      onClick={handleNext}
                      disabled={!answers[currentStep]}
                      className="mt-9 font-sans uppercase transition-opacity duration-200"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        color: "#FFFFFF",
                        opacity: answers[currentStep] ? 1 : 0.4,
                        cursor: answers[currentStep] ? "pointer" : "default",
                      }}
                    >
                      Next
                    </button>
                  </>
                ) : (
                  /* Result Screen */
                  <div className="text-center">
                    {/* Diamond Mark */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mx-auto mb-4"
                    >
                      <path
                        d="M12 2L22 12L12 22L2 12L12 2Z"
                        stroke="#1B3A8C"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>

                    {/* Your Collection Label */}
                    <p
                      className="mb-3 font-sans uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        color: "#1B3A8C",
                      }}
                    >
                      Your Collection
                    </p>

                    {/* Result Heading */}
                    <h3
                      className="mb-5 font-serif font-light italic"
                      style={{
                        fontSize: "32px",
                        lineHeight: "1.2",
                        color: "#FFFFFF",
                      }}
                    >
                      The Luminary Collection was made for this moment.
                    </h3>

                    {/* Result Descriptor */}
                    <p
                      className="mx-auto mb-10 max-w-[480px] font-sans font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.9",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      Based on your answers, we believe you will find your piece in our Luminary Series — flawless white diamonds in architectural settings, designed for moments that endure.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col items-center gap-3">
                      {/* Primary Button */}
                      <button
                        className="font-sans uppercase transition-colors duration-200"
                        style={{
                          height: "52px",
                          padding: "0 40px",
                          backgroundColor: "#1B3A8C",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#142E6E"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#1B3A8C"
                        }}
                      >
                        Explore the Luminary Collection
                      </button>

                      {/* Ghost Button */}
                      <button
                        className="font-sans uppercase transition-all duration-200"
                        style={{
                          height: "52px",
                          padding: "0 40px",
                          backgroundColor: "transparent",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"
                        }}
                      >
                        Request a Private Consultation
                      </button>
                    </div>

                    {/* Restart Link */}
                    <button
                      onClick={handleRestart}
                      className="mt-6 font-sans transition-all duration-200 hover:underline"
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      Restart the quiz
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  )
}
