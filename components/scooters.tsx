"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star, Shield, MapPin, Calendar, MessageCircle } from "lucide-react"
import { getTranslations } from "@/lib/i18n"
import { CheckCircle, Gift } from "lucide-react"; // Import the icons you need
import Link from "next/link";

interface ScooterData {
  id: string
  name: string
  price: number
  image: string
  specs: {
    rating: number
    availability: string
    bestFor: string
    duration: string
  }
  features: string[]
}

const scootersData: ScooterData[] = [
  {
    id: "classic-city",
    name: "VERA CRUZ 125cc/2025",
    // price: 35,
    price: 45,
    image: "/scooters/scooter1.jpg",
    specs: {
      rating: 5.0,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["New, 2025", "USB charging", "CBS breaks", "Digital dashboard", "Comfortable seat"]
  },
  {
    id: "classic-city2",
    name: "VERA CRUZ 125cc/2025",
    // price: 35,
    price: 45,
    image: "/scooters/scooter2.jpg",
    specs: {
      rating: 5.0,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["New, 2025", "USB charging", "CBS breaks", "Digital dashboard", "Comfortable seat"]
  },
  {
    id: "retro-vintage",
    name: "SYM CRUISE 300",
    // price: 50,
    price: 60,
    image: "/scooters/scooter3.jpg",
    specs: {
      rating: 4.8,
      availability: "Available",
      bestFor: "Photo tours",
      duration: "Full day"
    },
    features: ["Classic Italian style", "Instagram worthy", "Efficient", "Premium comfort","Comfortable seat", "Modern charm"]
  },
  // {
  //   id: "sport-adventure",
  //   name: "KOVE 500 cc/2024 Manual",
  //   price: 65,
  //   image: "/scooters/scooter4.jpg",
  //   specs: {
  //     rating: 4.8,
  //     availability: "Available",
  //     bestFor: "Eco tours",
  //     duration: "Full day"
  //   },
  //   features: ["Manual transmission", "Efficient", "Cross", "Comfortable seat","Modern design"]
  // },
  {
    id: "classic-city-2020",
    name: "VERA CRUZ 125cc/2020",
    // price: 30,
    price: 40,
    image: "/scooters/scooter5.jpg",
    specs: {
      rating: 4.8,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["Reliable model", "Great value", "Easy to ride", "Comfortable seat"]
  },
    {
    id: "classic-city-2025",
    name: "GRACE 50cc/2025",
    // price: 30,
    price: 30,
    image: "/scooters/scooter6.jpg",
    specs: {
      rating: 4.9,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["Reliable model", "Great value", "Easy to ride", "Comfortable seat"]
  }
]

export default function Scooters({ lang }: { lang: string }) {
  const t = getTranslations(lang)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Handle Viber message - Primary number
  const handleViberMessage = () => {
    const phoneNumber = "38268775468"; // The predefined phone number (without +)
    const message = "I want to rent a scooter"; // Your predefined message
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the Viber deep link
    const viberLink = `viber://chat?number=${phoneNumber}&text=${encodedMessage}`;

    // Open the Viber link
    window.open(viberLink, '_blank');
  }

  // Handle WhatsApp message - Primary number
  const handleWhatsAppMessage = () => {
    const phoneNumber = "38268775468"; // The predefined phone number (without +)
    const message = "I want to book a scooter"; // Your predefined message
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the WhatsApp deep link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp link
    window.open(whatsappLink, '_blank');
  }

  // Handle Viber message - Secondary number
  const handleViberMessageSecondary = () => {
    const phoneNumber = "38267659883"; // The secondary phone number (without +)
    const message = "I want to rent a scooter"; // Your predefined message
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the Viber deep link
    const viberLink = `viber://chat?number=${phoneNumber}&text=${encodedMessage}`;

    // Open the Viber link
    window.open(viberLink, '_blank');
  }

  // Handle WhatsApp message - Secondary number
  const handleWhatsAppMessageSecondary = () => {
    const phoneNumber = "38267659883"; // The secondary phone number (without +)
    const message = "I want to book a scooter"; // Your predefined message
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the WhatsApp deep link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp link
    window.open(whatsappLink, '_blank');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const scooterCards = document.querySelectorAll(".scooter-card")
    scooterCards.forEach((el) => observer.observe(el))

    return () => {
      scooterCards.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="scootersPricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.ourScooters || "Our Scooter Fleet"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.scooterDescription || "Choose from our premium collection of scooters, perfect for exploring Tivat and Montenegro"}
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {scootersData.map((scooter, index) => (
            <div
              key={scooter.id}
              className={`scooter-card opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 1) * 100}`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={scooter.image}
                    alt={`${scooter.name} scooter`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md">
                    €{scooter.price}/day
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    scooter.specs.availability === 'Available'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {scooter.specs.availability}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {scooter.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                        <p className="text-sm font-semibold">{scooter.specs.rating} ⭐</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Best For</p>
                        <p className="text-sm font-semibold">{scooter.specs.bestFor}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="text-sm font-semibold">{scooter.specs.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                        <p className="text-sm font-semibold">Best buy!</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {scooter.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {/* Helmet included free with rounded rectangle */}
                      <li className="mt-3">
                        <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full">
                          Helmet included free
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Compact 2x2 Button Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Primary Viber Button */}
                    <button
                      onClick={handleViberMessage}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium py-2.5 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <div className="text-left">
                        <div className="text-xs font-mono">068 775 468</div>
                        <div className="text-xs">Viber</div>
                      </div>
                    </button>

                    {/* Primary WhatsApp Button */}
                    <button
                      onClick={handleWhatsAppMessage}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2.5 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs font-mono">068 775 468</div>
                        <div className="text-xs">WhatsApp</div>
                      </div>
                    </button>

                    {/* Secondary Viber Button */}
                    <button
                      onClick={handleViberMessageSecondary}
                      className="bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-2.5 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center justify-center gap-2 opacity-90 border border-purple-300 dark:border-purple-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <div className="text-left">
                        <div className="text-xs font-mono">067 659 883</div>
                        <div className="text-xs">Viber</div>
                      </div>
                    </button>

                    {/* Secondary WhatsApp Button */}
                    <button
                      onClick={handleWhatsAppMessageSecondary}
                      className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-medium py-2.5 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center justify-center gap-2 opacity-90 border border-green-300 dark:border-green-600"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs font-mono">067 659 883</div>
                        <div className="text-xs">WhatsApp</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
<div className="max-w-4xl mx-auto mt-16">
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-transform hover:scale-105">
    <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
      {t.rentalInfo || "Rental Information"}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-orange-500">
        <h4 className="flex items-center font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
          <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
          {t.requirements || "Requirements"}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">{t.requirementsText}</p>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-pink-500">
        <h4 className="flex items-center font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
          <Gift className="mr-2 h-5 w-5 text-pink-500" />
          {t.included || "Included"}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">{t.includedText}</p>
      </div>
    </div>
  </div>
</div>

      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}