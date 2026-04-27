// app/layout.tsx
import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Testimonials from "@/components/Testimonials";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tivat-rent-scooter.com'),
  title: {
    default: 'Tivat Rent Scooter - Premium Scooter Rental in Montenegro',
    template: '%s | Tivat Rent Scooter'
  },
  description: 'Premium scooter rental service in Tivat, Montenegro. Rent a scooter and explore the beautiful Montenegrin coast.',
  generator: 'v0.dev',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Tivat Rent Scooter',
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://www.google-analytics.com"/>
        <link rel="preconnect" href="https://www.googletagmanager.com"/>
        <link rel="preconnect" href="https://maps.googleapis.com"/>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN"/>
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive"/>
        <Script id="google-analytics-init" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Tivat Scooter Rental',
                custom_map: {'dimension1': 'custom_parameter'}
              });
            `,
          }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=1;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
                <Testimonials lang="en" /> {/* Assuming English as default language */}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
