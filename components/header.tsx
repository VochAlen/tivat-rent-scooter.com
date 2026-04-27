"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { getTranslations } from "@/lib/i18n";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = getTranslations(language);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = `relative font-semibold transition-all duration-300 group ${
    mounted && theme === "dark"
      ? "text-gray-100 hover:text-orange-400" // Light text for dark theme
      : "text-gray-900 hover:text-orange-600" // Dark text for light theme
  }`;

  const languageFlags = {
    en: "🇺🇸",
    sr: "🇷🇸",
    ru: "🇷🇺",
    he: "🇮🇱",
    fr: "🇫🇷"
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
        : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Enhanced Logo */}
        <Link href={`/${language}`} className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gradient-to-r from-orange-500 to-pink-500 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo_scooter.png"
                alt="Logo"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:via-pink-600 group-hover:to-purple-600 transition-all duration-300">
              Tivat Rent-a-Scooter
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
              Premium Scooters
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: `/${language}`, label: t.home },
            { href: `/${language}#scooters`, label: t.scooters },
            { href: `/${language}/tips`, label: t.tipsPageTitle }, // Added Tips page link
            { href: `/${language}#features`, label: t.features },
            { href: `/${language}#scootersPricing`, label: t.scootersPricing },
            { href: `/${language}#contact`, label: t.contact }
          ].map((item, index) => (
            <Link key={item.href} href={item.href} className={navLinkClasses}>
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Enhanced Controls */}
          <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative h-10 px-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30 border border-blue-200/50 dark:border-blue-700/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg mr-1">{languageFlags[language as keyof typeof languageFlags]}</span>
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
              >
                {Object.entries(languageFlags).map(([lang, flag]) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 dark:hover:from-orange-900/20 dark:hover:to-pink-900/20 transition-all duration-200"
                  >
                    <span className="text-lg">{flag}</span>
                    <span>
                      {lang === "en" && "English"}
                      {lang === "sr" && "Srpski"}
                      {lang === "ru" && "Русский"}
                      {lang === "he" && "עברית"}
                      {lang === "fr" && "Français"}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative h-10 w-10 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 hover:from-yellow-100 hover:to-orange-100 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-yellow-200/50 dark:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-600" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-slate-300" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border border-yellow-200/50 dark:border-slate-600"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`h-10 w-10 rounded-full transition-all duration-300 ${
              isMobileMenuOpen
                ? "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200/50 dark:border-red-700/50"
                : "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/50"
            }`}
          >
            <Menu className={`h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
            <X className={`absolute h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-1">
              {[
                { href: `/${language}`, label: t.home, icon: "🏠" },
                { href: `/${language}#scooters`, label: t.scooters, icon: "🛵" },
                { href: `/${language}/tips`, label: t.tipsPageTitle, icon: "💡" }, // Added Tips page link with an icon
                { href: `/${language}#scootersPricing`, label: t.scootersPricing, icon: "💰" },
                { href: `/${language}#features`, label: t.features, icon: "⭐" },
                { href: `/${language}#contact`, label: t.contact, icon: "📞" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 dark:hover:from-orange-900/20 dark:hover:to-pink-900/20 transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className={`font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-800"} group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Language Selection */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5 text-gray-500" />
                <p className={`text-sm font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                  {t.selectLanguage}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(languageFlags).map(([lang, flag]) => (
                  <Button
                    key={lang}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`justify-start space-x-2 h-12 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      language === lang
                        ? "bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 border-orange-300 dark:border-orange-600"
                        : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20"
                    }`}
                  >
                    <span className="text-lg">{flag}</span>
                    <span className="font-medium">
                      {lang === "en" && "English"}
                      {lang === "sr" && "Srpski"}
                      {lang === "ru" && "Русский"}
                      {lang === "he" && "עברית"}
                      {lang === "fr" && "Français"}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}