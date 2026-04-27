"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"
import { ChevronRight, Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function Hero({ lang }: { lang: string }) {
  const { language, dir } = useLanguage()
  const router = useRouter()
  const t = getTranslations(lang)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { src: "/tivat11.jpg", alt: "Tivat bay view" },
    { src: "/scooters/scooter2.jpg", alt: "Premium scooter rental" },
    { src: "/tivat3.jpg", alt: "Coastal road" },
    { src: "/scooters/scooter3.jpg", alt: "Modern scooter fleet" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [slides.length])

  const handleLearnMore = () => {
    const currentPath = window.location.pathname
    const targetPath = `/${language}`

    if (currentPath === targetPath || currentPath === `/${language}/`) {
      const element = document.getElementById("scootersPricing")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      router.push(`/${language}#scootersPricing`)
      setTimeout(() => {
        const element = document.getElementById("scootersPricing")
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  const handleRentNow = () => handleLearnMore()

  const handleViber = (phone: string) => {
    const message = encodeURIComponent("I want to rent a scooter")
    window.open(`viber://chat?number=%2B${phone}&text=${message}`, "_blank")
  }

  const handleWhatsApp = (phone: string) => {
    const message = encodeURIComponent("I want to book a scooter")
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover scale-105 animate-subtleZoom"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Glassmorphic overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Modern badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Premium Fleet | Since 2025
            </span>
          </div>

          {/* Main title with layered effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {t.heroTitle?.split(" ").slice(0, -1).join(" ") || "Rent the"}
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {t.heroTitle?.split(" ").slice(-1) || "Ride"}
            </span>
          </h1>

          {/* Subtitle with modern style */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6 leading-relaxed font-light backdrop-blur-sm bg-black/20 rounded-2xl p-4 md:p-0 md:bg-transparent">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              size="lg"
              onClick={handleLearnMore}
              className="group relative overflow-hidden bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.viewScooters || "Explore Scooters"}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleRentNow}
              className="rounded-full px-8 py-6 text-base font-semibold border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              {t.rentNow || "Rent Instantly"}
            </Button>
          </div>

          {/* Contact Cards - Glassmorphic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-2xl">
            {/* Card 1 - 068 775 468 */}
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Contact via</p>
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => handleViber("38268775468")}
                      className="px-3 py-1 rounded-full bg-purple-500/80 text-white text-sm font-medium hover:bg-purple-600 transition"
                    >
                      Viber
                    </button>
                    <button
                      onClick={() => handleWhatsApp("38268775468")}
                      className="px-3 py-1 rounded-full bg-green-500/80 text-white text-sm font-medium hover:bg-green-600 transition"
                    >
                      WhatsApp
                    </button>
                  </div>
                  <p className="text-white font-mono text-sm mt-1">+382 68 775 468</p>
                </div>
              </div>
            </div>

            {/* Card 2 - 067 659 883 */}
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Alternative</p>
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => handleViber("38267659883")}
                      className="px-3 py-1 rounded-full bg-purple-500/80 text-white text-sm font-medium hover:bg-purple-600 transition"
                    >
                      Viber
                    </button>
                    <button
                      onClick={() => handleWhatsApp("38267659883")}
                      className="px-3 py-1 rounded-full bg-green-500/80 text-white text-sm font-medium hover:bg-green-600 transition"
                    >
                      WhatsApp
                    </button>
                  </div>
                  <p className="text-white font-mono text-sm mt-1">+382 67 659 883</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick info row */}
          <div className="flex flex-wrap gap-6 mt-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Free Delivery Tivat & Podgorica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? "w-10 h-2 bg-white shadow-lg"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer" onClick={handleLearnMore}>
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-scrollDown" />
        </div>
      </div>

      {/* Wave decorative element */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}