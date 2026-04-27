"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguageState] = useState("en")
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    const pathLang = pathname.split("/")[1]
    if (pathLang && ["en", "sr", "ru", "he", "fr"].includes(pathLang)) {
      setLanguageState(pathLang)
      setDir(pathLang === "he" ? "rtl" : "ltr")
      document.documentElement.dir = pathLang === "he" ? "rtl" : "ltr"
      document.documentElement.lang = pathLang
    }
  }, [pathname])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    setDir(lang === "he" ? "rtl" : "ltr")
    const newPath = `/${lang}${pathname.substring(3) || ""}`
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}