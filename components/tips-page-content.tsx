// components/tips-page-content.tsx
"use client";

import { useLanguage } from "@/components/language-provider";
import {
  Bike,
  ShieldCheck,
  Gavel,
  Map,
  Briefcase,
  Ambulance,
  CheckCircle,
  Info,
  Sun,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { JSX } from "react";

interface TipsPageContentProps {
  translations: any;
  lang: string;
}

export default function TipsPageContent({ translations: t, lang }: TipsPageContentProps) {
  const { dir } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = contentRef.current?.querySelectorAll(".tips-section");
    if (sections) {
      sections.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sections) {
        sections.forEach((el) => observer.unobserve(el));
      }
    };
  }, [t]);

  const renderListItem = (textKey: string, icon: JSX.Element) => (
    <li className="flex items-start mb-2 last:mb-0">
      <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">{icon}</span>
      <p className="text-gray-600 dark:text-gray-300">{t[textKey]}</p>
    </li>
  );

  return (
    <section id="scooter-tips" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.tipsPageTitle}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.tipsPageSubtitle}
          </p>
        </div>

        <div ref={contentRef} className="space-y-12">
          {/* Section 1: Safety First */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <ShieldCheck className="h-9 w-9 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.safetySectionTitle}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                {t.safetyHelmetTitle}{" "}
                <span className="font-semibold">{t.safetyHelmetText}</span>
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.safetyCheckTitle}
              </h3>
              <ul className="list-none pl-0 mb-6">
                {renderListItem("safetyCheckBrakes", <CheckCircle size={18} />)}
                {renderListItem("safetyCheckTires", <CheckCircle size={18} />)}
                {renderListItem("safetyCheckLights", <CheckCircle size={18} />)}
                {renderListItem("safetyCheckFuel", <CheckCircle size={18} />)}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.safetyDefensiveTitle}
              </h3>
              <ul className="list-none pl-0 mb-6">
                {renderListItem("safetyDefensiveMaintainDistance", <Info size={18} />)}
                {renderListItem("safetyDefensiveSignalClearly", <Info size={18} />)}
                {renderListItem("safetyDefensiveBeVisible", <Info size={18} />)}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.safetyWeatherTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.safetyWeatherText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.safetyOverloadTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.safetyOverloadText}
              </p>
            </div>
          </div>

          {/* Section 2: Traffic Laws */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Gavel className="h-9 w-9 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.lawsSectionTitle}
                </h2>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsLicenseTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.lawsLicenseText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsSpeedTitle}
              </h3>
              <ul className="list-none pl-0 mb-6">
                {renderListItem("lawsSpeedUrban", <Info size={18} />)}
                {renderListItem("lawsSpeedOpen", <Info size={18} />)}
                {renderListItem("lawsSpeedHighways", <Info size={18} />)}
                <li className="flex items-start mb-2 last:mb-0">
                  <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">
                    <CheckCircle size={18} />
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    {t.lawsSpeedRespect}
                  </p>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsRightOfWayTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.lawsRightOfWayText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsDrunkDrivingTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-semibold">
                {t.lawsDrunkDrivingText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsDocumentationTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.lawsDocumentationText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsParkingTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.lawsParkingText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.lawsLaneSplittingTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.lawsLaneSplittingText}
              </p>
            </div>
          </div>

          {/* Section 3: Local Nuances */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <Map className="h-9 w-9 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.nuancesSectionTitle}
                </h2>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesRoadQualityTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.nuancesRoadQualityText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesMountainRoadsTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.nuancesMountainRoadsText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesTunnelsTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.nuancesTunnelsText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesLocalDrivingTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.nuancesLocalDrivingText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesFuelStationsTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.nuancesFuelStationsText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.nuancesBokaBayTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.nuancesBokaBayText}
              </p>
            </div>
          </div>

          {/* Section 4: Essential Gear & Documents */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Briefcase className="h-9 w-9 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.essentialsSectionTitle}
                </h2>
              </div>
              <ul className="list-none pl-0 mb-6">
                {renderListItem("essentialsSunglasses", <CheckCircle size={18} />)}
                {renderListItem("essentialsJacket", <CheckCircle size={18} />)}
                {renderListItem("essentialsWater", <CheckCircle size={18} />)}
                {renderListItem("essentialsPhone", <CheckCircle size={18} />)}
                {renderListItem("essentialsPowerBank", <CheckCircle size={18} />)}
                {renderListItem("essentialsMap", <CheckCircle size={18} />)}
                {renderListItem("essentialsSunscreen", <CheckCircle size={18} />)}
                {renderListItem("essentialsBackpack", <CheckCircle size={18} />)}
                {renderListItem("essentialsDocuments", <CheckCircle size={18} />)}
              </ul>
            </div>
          </div>

          {/* Section 5: In Case of Emergency */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <Ambulance className="h-9 w-9 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.emergencySectionTitle}
                </h2>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.emergencyRoadsideTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.emergencyRoadsideText}
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {t.emergencyAccidentTitle}
              </h3>
              <ul className="list-none pl-0">
                {renderListItem("emergencyAccidentSafety", <Info size={18} />)}
                {renderListItem("emergencyAccidentInjured", <Info size={18} />)}
                {renderListItem("emergencyAccidentCallUs", <Info size={18} />)}
                {renderListItem("emergencyAccidentAdmitFault", <Info size={18} />)}
                {renderListItem("emergencyAccidentCollectInfo", <Info size={18} />)}
                {renderListItem("emergencyAccidentWait", <Info size={18} />)}
              </ul>
            </div>
          </div>

          {/* Concluding CTA/Message - Similar to Features */}
          <div className="tips-section opacity-0 translate-y-8 transition-all duration-700 delay-600 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg overflow-hidden h-full text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t.readyToRide}</h3>
              <p className="mb-6">{t.enjoyRideConcludingText}</p>
              <a
                href="tel:+38268775468"
                className="px-6 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block"
                aria-label="Call Tivat Rent-a-Scooter to book now"
              >
                {t.bookNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
