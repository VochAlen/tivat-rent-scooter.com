import Link from "next/link";
import { Instagram, Globe, Mail } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

export default function Footer() {
  // Default to English for the footer
  const t = getTranslations("en");

  // Function to format today's date as dd.mm.yyyy
  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Create email content with pre-filled subject and body
  const emailSubject = `Scooter rental - ${getTodayDate()}`;
  const emailBody = `Hello Tivat Rent-a-Scooter team,

I would like to rent a scooter with the following details:

- Name and Surname:
- Scooter Type:
- Rental Period: From [dd.mm.yyyy] to [dd.mm.yyyy]
- Pickup Location:
- Phone Number (mandatory):

Please let me know about availability and next steps.

Best regards,
[Your Name]`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Tivat Rent-a-Scooter
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">{t.footerDescription}</p>
            <div className="flex space-x-4">
              {/* Instagram Link */}
              <Link
                href="https://www.instagram.com/tivat_rent_a_scooter/"
                className="text-gray-300 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>

              {/* Website Link */}
              <Link
                href="https://www.tivat-rent-scooter.com"
                className="text-gray-300 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-6 w-6" />
                <span className="sr-only">Website</span>
              </Link>

              {/* Email Link */}
              <Link
                href={`mailto:info@tivat-rent-scooter.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>

              {/* Viber Link */}
              <Link
                href="viber://chat?number=%2B38268775468"
                className="text-gray-300 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="data:image/png;base64,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" alt="Viber Icon" className="h-6 w-6" />
                <span className="sr-only">Viber</span>
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="https://wa.me/38268775468"
                className="text-gray-300 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="#scooters" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.scooters}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.features}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Porto Montenegro</p>
              <p className="mb-2">Tivat, Montenegro</p>
              <p className="mb-2">+382 (0)68 775 468</p>
              <p className="mb-2 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <Link
                  href={`mailto:info@tivat-rent-scooter.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  info@tivat-rent-scooter.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tivat Rent-a-Scooter. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
