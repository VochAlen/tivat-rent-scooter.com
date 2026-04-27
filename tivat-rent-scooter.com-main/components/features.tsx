"use client"

import { useRef, useEffect } from "react"
import Link from "next/link" // Import Link if you use it elsewhere, otherwise not strictly needed here
import { MapPin, Wind, Sun, Shield, Clock } from "lucide-react"
import { getTranslations } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"

const features = [
  {
    icon: <Wind className="h-10 w-10" />,
    colorClass: "bg-blue-500",
  },
  {
    icon: <Sun className="h-10 w-10" />,
    colorClass: "bg-yellow-500",
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    colorClass: "bg-green-500",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    colorClass: "bg-purple-500",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    colorClass: "bg-pink-500",
  },
]

export default function Features({ lang }: { lang: string }) {
  const { dir } = useLanguage()
  const t = getTranslations(lang)
  const featuresRef = useRef<HTMLDivElement>(null)

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

    const featureElements = document.querySelectorAll(".feature-card")
    featureElements.forEach((el) => observer.observe(el))

    return () => {
      featureElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.experienceTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t.experienceDescription}</p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-1 bg-gradient-to-r from-orange-500 to-pink-500" />
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-6">
                  <Wind className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.feature1Title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature1Description}</p>
              </div>
            </div>
          </div>

          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-500" />
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.feature2Title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature2Description}</p>
              </div>
            </div>
          </div>

          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.feature3Title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature3Description}</p>
              </div>
            </div>
          </div>

          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.feature4Title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature4Description}</p>
              </div>
            </div>
          </div>

          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-1 bg-gradient-to-r from-cyan-500 to-green-500" />
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.feature5Title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t.feature5Description}</p>
              </div>
            </div>
          </div>

          <div className="feature-card opacity-0 translate-y-8 transition-all duration-700 delay-600 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg overflow-hidden h-full text-white">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t.readyToRide}</h3>
                <p className="mb-6">{t.readyToRideDescription}</p>
                {/* Updated button to an <a> tag for phone call functionality */}
                <a
                  href="tel:+38268775468" // The phone number to call
                  className="px-6 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block"
                  aria-label="Call Tivat Rent-a-Scooter to book now" // Accessible label for the link
                >
                  {t.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}