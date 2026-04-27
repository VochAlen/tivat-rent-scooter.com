"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"

export default function Hero({ lang }: { lang: string }) {
  const { language, dir } = useLanguage()
  const router = useRouter()
  const t = getTranslations(lang)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)


  // List of images in the public directory
  const slides = [
    // "/scooters/scooter4.jpg",
    "/tivat11.jpg",
    "/scooters/scooter2.jpg",
    "/tivat3.jpg",
    "/scooters/scooter3.jpg",
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Parallax effect for each slide
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const scrollY = window.scrollY
          ref.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine the text color for the "Learn More" button based on the theme
  const learnMoreTextColor = mounted && theme === "dark" ? "text-white" : "text-black"

  // Contact handlers for first number
  const handleViberMessage = () => {
    const phoneNumber = "38268775468"
    const message = "I want to rent a scooter"
    const encodedMessage = encodeURIComponent(message)
    const viberLink = `viber://chat?number=%2B${phoneNumber}&text=${encodedMessage}`
    window.open(viberLink, '_blank')
  }

  const handleWhatsAppMessage = () => {
    const phoneNumber = "38268775468"
    const message = "I want to book a scooter"
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappLink, '_blank')
  }

  // Contact handlers for second number
  const handleViberMessage2 = () => {
    const phoneNumber = "38267659883"
    const message = "I want to rent a scooter"
    const encodedMessage = encodeURIComponent(message)
    const viberLink = `viber://chat?number=%2B${phoneNumber}&text=${encodedMessage}`
    window.open(viberLink, '_blank')
  }

  const handleWhatsAppMessage2 = () => {
    const phoneNumber = "38267659883"
    const message = "I want to book a scooter"
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappLink, '_blank')
  }

  // Handle Learn More click with smooth scroll
  const handleLearnMore = () => {
    const currentPath = window.location.pathname
    const targetPath = `/${language}`

    console.log('Current Path:', currentPath)
    console.log('Target Path:', targetPath)

    if (currentPath === targetPath || currentPath === `/${language}/`) {
      const element = document.getElementById('scootersPricing')
      console.log('Element found:', element)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      router.push(`/${language}#scootersPricing`)

      setTimeout(() => {
        const element = document.getElementById('scootersPricing')
        console.log('Element found after navigation:', element)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }

  // Handle Rent Now click
  const handleRentNow = () => {
    handleLearnMore()
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Background with Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => { parallaxRefs.current[index] = el }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${slide}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out",
            filter: "brightness(0.85) contrast(1.1)",
          }}
        />
      ))}

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className={`max-w-3xl ${dir === "rtl" ? "mr-auto" : "ml-0 md:ml-12"}`}>
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Premium Scooter & Motorbike Rental
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 mb-6 leading-tight tracking-tight">
            {t.heroTitle}
          </h1>

          {/* Subtitle with Better Typography */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl">
            {t.heroSubtitle}
          </p>

          {/* Modern Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              variant="outline"
              onClick={handleLearnMore}
              className={`bg-yellow-400 ${learnMoreTextColor} border-2 border-yellow-500 hover:bg-yellow-500 text-black hover:text-white backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-yellow-300`}
            >
              {t.viewScooters}
            </Button>
          </div>

          {/* Compact Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {/* Primary Viber Button */}
            <button
              onClick={handleViberMessage}
              className="inline-flex justify-center items-center px-4 py-3
                         bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800
                         text-white font-bold rounded-xl shadow-xl shadow-purple-600/25
                         transition-all duration-300 hover:scale-105 hover:shadow-purple-600/40 animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              <img src="/viber-svgrepo-com.svg" alt="Viber Icon" className="w-6 h-6 mr-3" />
              <div className="flex flex-col items-start">
                <span className="text-lg leading-none">Viber</span>
                <span className="text-lg leading-none font-mono">068 775 468</span>
              </div>
            </button>

            {/* Primary WhatsApp Button */}
            <button
              onClick={handleWhatsAppMessage}
              className="inline-flex justify-center items-center px-4 py-3
                         bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800
                         text-white font-bold rounded-xl shadow-xl shadow-green-600/25
                         transition-all duration-300 hover:scale-105 hover:shadow-green-600/40 animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-lg leading-none">WhatsApp</span>
                <span className="text-lg leading-none font-mono">068 775 468</span>
              </div>
            </button>

            {/* Secondary Viber Button */}
            <button
              onClick={handleViberMessage2}
              className="inline-flex justify-center items-center px-4 py-3
                         bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:from-purple-600 hover:to-purple-700
                         text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20
                         transition-all duration-300 hover:scale-105 border border-purple-400/30"
            >
              <img src="/viber-svgrepo-com.svg" alt="Viber Icon" className="w-6 h-6 mr-3" />
              <div className="flex flex-col items-start">
                <span className="text-lg leading-none">Viber</span>
                <span className="text-lg leading-none font-mono">067 659 883</span>
              </div>
            </button>

            {/* Secondary WhatsApp Button */}
            <button
              onClick={handleWhatsAppMessage2}
              className="inline-flex justify-center items-center px-4 py-3
                         bg-gradient-to-r from-green-500/90 to-green-600/90 hover:from-green-600 hover:to-green-700
                         text-white font-semibold rounded-xl shadow-lg shadow-green-500/20
                         transition-all duration-300 hover:scale-105 border border-green-400/30"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-lg leading-none">WhatsApp</span>
                <span className="text-lg leading-none font-mono">067 659 883</span>
              </div>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
              Free Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#29B6F6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}