// app/[lang]/page.tsx
import Hero from "@/components/hero"
import ScooterCarousel from "@/components/scooter-carousel"
import Features from "@/components/features"
import SocialQR from "@/components/social-qr"
import { getTranslations } from "@/lib/i18n"
import Scooters from "@/components/scooters"


export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "sr" }, { lang: "ru" }, { lang: "he" }, { lang: "fr" }]
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)

  return (
    <div className="flex flex-col w-full">
      <Hero lang={lang} />

       <Scooters lang={lang} />


      <Features lang={lang} />
            <ScooterCarousel lang={lang} />
      <SocialQR lang={lang} />
    </div>
  )
}