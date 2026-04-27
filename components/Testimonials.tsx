"use client";

import React, { useEffect, useRef } from "react";
import { getTranslations } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

const testimonials = [
  {
    name: "Иван Петровић",
    role: "Tourist from Serbia",
    content: "Renting a scooter was a breeze! The service was excellent and the scooter was in perfect condition.",
    rating: 5,
    location: "Podgorica",
  },
  {
    name: "דוד לוי",
    role: "Tourist from Israel",
    content: "Exploring Tivat on a scooter was an amazing experience. Highly recommend their services!",
    rating: 5,
    location: "Tivat",
  },
  {
    name: "Алексей Смирнов",
    role: "Vacationer from Moscow",
    content: "The team was very helpful and the scooter rental process was smooth and hassle-free.",
    rating: 5,
    location: "Budva",
  },
  {
    name: "Милена Јовановић",
    role: "Adventure Seeker from Serbia",
    content: "Great prices and excellent customer service. Will definitely rent again!",
    rating: 5,
    location: "Kotor",
  },
  {
    name: "Роман Кузнецов",
    role: "Backpacker from Moscow",
    content: "The scooter made my trip around Montenegro unforgettable. Easy to rent and great support.",
    rating: 5,
    location: "Bar",
  },
  {
    name: "Sara Koen",
    role: "Backpacker from Tel Aviv",
    content: "Perfect way to get around and capture the beauty of Montenegro. The scooter was reliable and fun!",
    rating: 5,
    location: "Tivat",
  },
];

const getAvatarColor = (name: string) => {
  const colors = [
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-blue-500 to-indigo-600",
    "from-purple-500 to-pink-600",
    "from-rose-500 to-red-600",
    "from-cyan-500 to-sky-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials({ lang }: { lang: string }) {
  const { dir } = useLanguage();
  const t = getTranslations(lang);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

      {/* Floating glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl -z-5 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl -z-5 animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Real stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of happy riders who explored Montenegro with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 translate-y-6 transition-all duration-700 ease-out hover:z-20"
              style={{ transitionDelay: `${index * 80 + 100}ms` }}
            >
              <div className="group relative h-full">
                <div className="relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-gray-700/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-pink-500/0 group-hover:from-orange-500/80 group-hover:via-orange-500/50 group-hover:to-pink-500/80 transition-all duration-500 pointer-events-none" />

                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getAvatarColor(testimonial.name)} flex items-center justify-center shadow-md ring-2 ring-white/50 dark:ring-gray-800/50`}>
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 rounded-full p-0.5 border-2 border-white dark:border-gray-800">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-white text-lg leading-tight">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50 dark:bg-emerald-900/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-emerald-200 dark:border-emerald-800">
                        <span className="text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Verified
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    <div className="relative">
                      <svg className="absolute -top-1 -left-1 w-8 h-8 text-gray-300 dark:text-gray-700 opacity-50 -z-0" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757C13.814 17.114 13 15.657 13 14c0-3.314-2.686-6-6-6zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757C25.814 17.114 25 15.657 25 14c0-3.314-2.686-6-6-6z" />
                      </svg>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6 relative z-10 italic">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${getAvatarColor(t.name)} flex items-center justify-center ring-2 ring-white dark:ring-gray-800`}>
                  <span className="text-white text-xs font-bold">{t.name.charAt(0)}</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Trusted by 100+ happy riders
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}