"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/i18n"

const scooters = [
  {
    id: 1,
    name: "VeraCruz 125cc/2025",
    image: "/scooters/scooter1.jpg",
    description: "Perfect for urban exploration",
    features: "Comfortable & Fuel Efficient",
  },
  {
    id: 2,
    name: "VeraCruz 125cc/2025",
    image: "/scooters/scooter2.jpg",
    description: "Perfect for urban exploration",
    features: "Comfortable & Fuel Efficient",
  },
  {
    id: 3,
    name: "Sym Cruise 300cc /2024",
    image: "/scooters/scooter3.jpg",
    description: "Sleek and sporty design with advanced features",
    features: "LED, Comfortable Seat, Top Box Storage, Windshield",
  },
   {
    id: 4,
    name: "Grace 50cc /2025",
    image: "/scooters/scooter6.jpg",
    description: "Sleek and retro design for easy city ride",
    features: "Comfortable Seat, Fuel Efficient ",
  },
  
  // {
  //   id: 4,
  //   name: "KOVE 500 cc / 2024 Manual",
  //   image: "/scooters/scooter4.jpg",
  //   description: "Rugged dual-sport for long-distance travel",
  //   features: "Aluminum Luggage Boxes, Tall Windshield, Off-road Ready",
  // },
]

export default function ScooterCarousel({ lang }: { lang: string }) {
  const t = getTranslations(lang)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scooters.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scooters.length) % scooters.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle Viber message
  const handleViberMessage = () => {
    const phoneNumber = "38268775468"; // The predefined phone number (without +)
    const message = `I want to rent ${scooters[currentIndex].name}`; // Message with the current scooter name
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the Viber deep link
    const viberLink = `viber://chat?number=${phoneNumber}&text=${encodedMessage}`;

    // Open the Viber link
    window.open(viberLink, '_blank');
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section
      id="scooters"
      className="py-20 bg-white dark:bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          {t.ourScooters || "Our Premium Scooter Collection"}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {scooters.map((scooter) => (
                <div key={scooter.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={scooter.image}
                      alt={`${scooter.name} scooter`}
                      fill
                       className="object-contain" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{scooter.name}</h3>
                      <p className="text-lg text-white/90 mb-2">{scooter.description}</p>
                      <p className="text-white/80 mb-6">{scooter.features}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={handleViberMessage}
                          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                          aria-label="Send message via Viber to rent this scooter"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {t.rentNow || "Rent now via Viber"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full z-10 border border-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full z-10 border border-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {scooters.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 w-8"
                    : "bg-gray-300 dark:bg-gray-700 w-3 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Scooter Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} of {scooters.length} scooters
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
