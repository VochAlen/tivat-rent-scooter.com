// app/[lang]/tips/page.tsx
import { getTranslations, supportedLanguages } from "@/lib/i18n";
import TipsPageContent from "@/components/tips-page-content";

interface TipsPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  // Generate static params for all supported languages
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function TipsPage({ params }: TipsPageProps) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return <TipsPageContent translations={t} lang={lang} />;
}