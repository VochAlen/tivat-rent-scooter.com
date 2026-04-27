"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, Globe } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

export default function SocialQR({ lang }: { lang: string }) {
  const t = getTranslations(lang);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState({ instagram: false, website: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image paths
  const images = [
    "/scooters/scooter1.jpg",
    "/scooters/scooter2.jpg",
    "/scooters/scooter3.jpg",
    "/scooters/scooter4.jpg"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const qrElements = document.querySelectorAll(".qr-card");
    qrElements.forEach((el) => observer.observe(el));

    return () => {
      qrElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Change image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.stayConnected}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t.scanQrCodes}</p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="qr-card opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <a
                href="https://www.instagram.com/tivat_rent_a_scooter/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => setIsHovered({ ...isHovered, instagram: true })}
                onMouseLeave={() => setIsHovered({ ...isHovered, instagram: false })}
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.instagram}</h3>
                <div className="bg-white p-2 rounded-lg mx-auto w-48 h-48 relative mb-4 overflow-hidden">
                  <Image
                    src="/instagram_placeholder.jpg?height=200&width=200"
                    alt="Instagram QR Code"
                    fill
                    className={`object-contain transition-transform duration-500 ${isHovered.instagram ? 'scale-110' : 'scale-100'}`}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">@tivat_rent_a_scooter</p>
              </a>
            </div>
          </div>

          <div className="qr-card opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <a
              href="https://tivat-rent-scooter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setIsHovered({ ...isHovered, website: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, website: false })}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.website}</h3>
                <div className="bg-white p-2 rounded-lg mx-auto w-48 h-48 relative mb-4 overflow-hidden">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Scooter Image"
                    fill
                    className={`object-cover transition-transform duration-500 ${isHovered.website ? 'scale-110' : 'scale-100'}`}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">tivat-rent-scooter.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
