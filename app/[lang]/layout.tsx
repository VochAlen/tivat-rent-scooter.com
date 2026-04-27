// app\[lang]\layout.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import NotificationBar from '@/components/NotificationBar'; // Import the NotificationBar component

// Define your supported languages
export const languages = ['en', 'ru', 'he', 'sr'] as const;
export type Language = typeof languages[number];

// SEO content for each language
const seoContent = {
  en: {
    title: "Tivat Scooter Rental | Premium Scooter Hire in Boka Bay Montenegro",
    description: "Rent premium scooters in Tivat, Montenegro. Explore Boka Bay with our reliable, affordable scooter rentals. Book online for instant confirmation. Free helmets included.",
    keywords: "tivat scooter rental, montenegro scooter hire, boka bay scooter, tivat rent scooter, motorcycle rental tivat, vespa rental montenegro",
    locale: "en_US"
  },
  ru: {
    title: "Аренда скутеров в Тивате | Прокат скутеров в Боко-Которском заливе, Черногория",
    description: "Арендуйте премиальные скутеры в Тивате, Черногория. Исследуйте Боко-Которский залив с нашими надежными и доступными скутерами. Бронируйте онлайн с мгновенным подтверждением.",
    keywords: "аренда скутеров тиват, прокат скутеров черногория, боко которский залив скутер, мотоцикл аренда тиват, веспа прокат черногория",
    locale: "ru_RU"
  },
  he: {
    title: "השכרת קטנועים בטיבט | השכרת קטנועים פרימיום במפרץ בוקה, מונטנגרו",
    description: "השכירו קטנועים פרימיום בטיבט, מונטנגרו. חקרו את מפרץ בוקה עם השכרת הקטנועים האמינה והזולה שלנו. הזמינו באינטרנט לאישור מיידי.",
    keywords: "השכרת קטנועים טיבט, השכרת קטנועים מונטנגרו, מפרץ בוקה קטנוע, השכרת אופנוע טיבט, השכרת וספה מונטנגרו",
    locale: "he_IL"
  },
  sr: {
    title: "Iznajmljivanje skutera u Tivtu | Premium skuter rental u Boka Bay, Crna Gora",
    description: "Iznajmite premium skutere u Tivtu, Crna Gora. Istražite Bokokotorski zaliv sa našim pouzdanim i pristupačnim skuter rentalima. Rezervišite online za trenutnu potvrdu.",
    keywords: "tivat skuter rental, crna gora skuter iznajmljivanje, boka bay skuter, tivat rent skuter, motocikl rental tivat, vespa rental crna gora",
    locale: "sr_RS"
  }
};

// Validate language function
async function validateLanguage(lang: string): Promise<Language> {
  // Your validation logic here
  return languages.includes(lang as Language) ? lang as Language : 'en';
}

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const validatedLang = await validateLanguage(lang);
  const content = seoContent[validatedLang] || seoContent.en;

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: 'Tivat Rent Scooter' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: content.locale,
      url: `https://www.tivat-rent-scooter.com/${validatedLang}`,
      title: content.title,
      description: content.description,
      siteName: 'Tivat Rent Scooter',
      images: [
        {
          url: 'https://www.tivat-rent-scooter.com/images/og-tivat-scooter-rental.jpg',
          width: 1200,
          height: 630,
          alt: content.description,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: ['https://www.tivat-rent-scooter.com/images/twitter-tivat-scooter-rental.jpg'],
      creator: '@TivatRentScooter',
    },
    alternates: {
      canonical: `https://www.tivat-rent-scooter.com/${validatedLang}`,
      languages: {
        'en': 'https://www.tivat-rent-scooter.com/en',
        'ru': 'https://www.tivat-rent-scooter.com/ru',
        'he': 'https://www.tivat-rent-scooter.com/he',
        'sr': 'https://www.tivat-rent-scooter.com/sr',
        'x-default': 'https://www.tivat-rent-scooter.com/en',
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validatedLang = await validateLanguage(lang);
  const content = seoContent[validatedLang] || seoContent.en;

  // Structured data for the current language
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tivat Rent Scooter",
    "image": [
      "https://www.tivat-rent-scooter.com/images/scooter-rental-1.jpg",
      "https://www.tivat-rent-scooter.com/images/scooter-rental-2.jpg"
    ],
    "description": content.description,
    "url": `https://www.tivat-rent-scooter.com/${validatedLang}`,
    "telephone": "+382-068-775-468",
    "email": "info@tivat-rent-scooter.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maršala Tivat, Riva Pine, Tivat",
      "addressLocality": "Tivat",
      "addressRegion": "Boka Bay",
      "postalCode": "85320",
      "addressCountry": "ME"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.4370,
      "longitude": 18.6969
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "€€",
    "areaServed": [
      { "@type": "Place", "name": "Tivat, Montenegro" },
      { "@type": "Place", "name": "Boka Bay, Montenegro" },
      { "@type": "Place", "name": "Kotor, Montenegro" }
    ]
  };

  return (
    <div lang={validatedLang} dir={validatedLang === 'he' ? 'rtl' : 'ltr'}>
      {/* Structured Data Script */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Notification Bar */}
      <NotificationBar />

      {/* Main content */}
      {children}
    </div>
  );
}