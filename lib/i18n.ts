// lib/i18n.ts

// Define the type for translation keys
type TranslationKey =
  | "home"
  | "viewScooters"
  | "scooters"
  | "features"
  | "contact"
  | "selectLanguage"
  | "heroTitle"
  | "heroSubtitle"
  | "rentNow"
  | "learnMore"
  | "ourScooters"
  | "maxSpeed"
  | "range"
  | "rentThis"
  | "experienceTitle"
  | "experienceDescription"
  | "feature1Title"
  | "feature1Description"
  | "feature2Title"
  | "feature2Description"
  | "feature3Title"
  | "feature3Description"
  | "feature4Title"
  | "feature4Description"
  | "feature5Title"
  | "feature5Description"
  | "readyToRide"
  | "readyToRideDescription"
  | "bookNow"
  | "bookNowWhatsApp"
  | "stayConnected"
  | "scanQrCodes"
  | "instagram"
  | "facebook"
  | "website"
  | "footerDescription"
  | "quickLinks"
  | "allRightsReserved"
  | "requirements"
  | "included"
  | "discounts"
  | "rentalInfo"
  | "scooterDescription"
  | "scootersPricing"
  | "requirementsText"
  | "includedText"
  | "testimonialsTitle"
  | "testimonialsDescription"
  | "tipsPageTitle"
  | "tipsPageSubtitle"
  | "safetySectionTitle"
  | "safetyHelmetTitle"
  | "safetyHelmetText"
  | "safetyCheckTitle"
  | "safetyCheckBrakes"
  | "safetyCheckTires"
  | "safetyCheckLights"
  | "safetyCheckFuel"
  | "safetyDefensiveTitle"
  | "safetyDefensiveMaintainDistance"
  | "safetyDefensiveSignalClearly"
  | "safetyDefensiveBeVisible"
  | "safetyWeatherTitle"
  | "safetyWeatherText"
  | "safetyOverloadTitle"
  | "safetyOverloadText"
  | "lawsSectionTitle"
  | "lawsLicenseTitle"
  | "lawsLicenseText"
  | "lawsSpeedTitle"
  | "lawsSpeedUrban"
  | "lawsSpeedOpen"
  | "lawsSpeedHighways"
  | "lawsSpeedRespect"
  | "lawsRightOfWayTitle"
  | "lawsRightOfWayText"
  | "lawsDrunkDrivingTitle"
  | "lawsDrunkDrivingText"
  | "lawsDocumentationTitle"
  | "lawsDocumentationText"
  | "lawsParkingTitle"
  | "lawsParkingText"
  | "lawsLaneSplittingTitle"
  | "lawsLaneSplittingText"
  | "nuancesSectionTitle"
  | "nuancesRoadQualityTitle"
  | "nuancesRoadQualityText"
  | "nuancesMountainRoadsTitle"
  | "nuancesMountainRoadsText"
  | "nuancesTunnelsTitle"
  | "nuancesTunnelsText"
  | "nuancesLocalDrivingTitle"
  | "nuancesLocalDrivingText"
  | "nuancesFuelStationsTitle"
  | "nuancesFuelStationsText"
  | "nuancesBokaBayTitle"
  | "nuancesBokaBayText"
  | "essentialsSectionTitle"
  | "essentialsSunglasses"
  | "essentialsJacket"
  | "essentialsWater"
  | "essentialsPhone"
  | "essentialsPowerBank"
  | "essentialsMap"
  | "essentialsSunscreen"
  | "essentialsBackpack"
  | "essentialsDocuments"
  | "emergencySectionTitle"
  | "emergencyRoadsideTitle"
  | "emergencyRoadsideText"
  | "emergencyAccidentTitle"
  | "emergencyAccidentSafety"
  | "emergencyAccidentInjured"
  | "emergencyAccidentCallUs"
  | "emergencyAccidentAdmitFault"
  | "emergencyAccidentCollectInfo"
  | "emergencyAccidentWait"
  | "enjoyRideConcludingText"
  | "shareExperience"
  | "cancelComment"
  | "shareYourStory"
  | "fullName"
  | "enterName"
  | "email"
  | "enterEmail"
  | "role"
  | "enterRole"
  | "testimonial"
  | "testimonialsTitle"
  | "testimonialsDescription"
  | "shareExperienceText"
  | "submitting"
  | "submitTestimonial"
  | "verificationNote"
  | "verified"
  | "testimonialSubmitted"
  | "testimonialError";

// Define the type for translations
export type Translations = Record<TranslationKey, string>;

// Define the supported languages
export const supportedLanguages = ["en", "sr", "ru", "he", "fr"];

// Define the translations for each language
const translations: Record<string, Translations> = {
  en: {
    home: "Home",
    scooters: "Scooters",
    features: "Features",
    viewScooters: "View scooters",
    contact: "Contact",
    selectLanguage: "Select Language",
    heroTitle: "Explore Tivat & Boka Bay on Two Wheels",
    heroSubtitle: "Experience the freedom of the Montenegrin coast with our premium scooter rentals",
    rentNow: "Rent Now via Viber",
    learnMore: "Learn More",
    ourScooters: "Our Scooter Fleet",
    maxSpeed: "Max Speed",
    range: "Range",
    rentThis: "Rent This Scooter",
    experienceTitle: "Experience the Adventure",
    experienceDescription: "Discover the joy of exploring Tivat and its surroundings on our modern, reliable scooters.",
    feature1Title: "Freedom to Explore",
    feature1Description: "Go wherever you want, whenever you want. Discover hidden beaches and scenic viewpoints at your own pace.",
    feature2Title: "Sunshine & Sea Breeze",
    feature2Description: "Feel the Mediterranean breeze as you cruise along the beautiful Adriatic coastline.",
    feature3Title: "Local Hotspots",
    feature3Description: "Access the best local spots that larger vehicles can't reach. Park easily and enjoy more of Tivat.",
    feature4Title: "Safe & Reliable",
    feature4Description: "All our scooters are regularly maintained and come with safety equipment included.",
    feature5Title: "24/7 Support",
    feature5Description: "Our team is always available to help with any questions or assistance you might need during your rental.",
    readyToRide: "Ready to Ride?",
    readyToRideDescription: "Book your scooter now and start your Tivat adventure today!",
    bookNow: "Book Now via Viber",
    bookNowWhatsApp: "Book Now via WhatsApp",
    stayConnected: "Stay Connected",
    scanQrCodes: "Scan our QR codes to follow us on social media and visit our website",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Website",
    footerDescription: "Rent a scooter and explore the beautiful Montenegrin coast at your own pace. Experience freedom, adventure, and unforgettable memories.",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved.",
    requirements: "Requirements",
    included: "Included",
    discounts: "Discounts",
    rentalInfo: "Rental Information",
    scooterDescription: "Choose from our premium collection of scooters, perfect for exploring Tivat and Montenegro",
    scootersPricing: "Pricing",
    requirementsText: "Valid driving license required. Minimum age 18 years.",
    includedText: "Helmet, insurance, and 24/7 roadside assistance.",
    testimonialsTitle: "What Our Customers Say",
    testimonialsDescription: "Read what our customers have to say about their experience with us.",
    tipsPageTitle: "Tips for Riding in Montenegro",
    tipsPageSubtitle: "Essential advice for a safe and enjoyable scooter experience in Tivat and beyond.",
    safetySectionTitle: "Safety First: Ride Smart, Stay Safe",
    safetyHelmetTitle: "Always Wear a Helmet:",
    safetyHelmetText: "It's legally required and crucial for your safety. We provide helmets with all rentals.",
    safetyCheckTitle: "Pre-Ride Check:",
    safetyCheckBrakes: "Check brakes and lights.",
    safetyCheckTires: "Inspect tire pressure and condition.",
    safetyCheckLights: "Ensure all lights (headlight, tail light, turn signals) are working.",
    safetyCheckFuel: "Verify fuel level for your journey.",
    safetyDefensiveTitle: "Defensive Driving:",
    safetyDefensiveMaintainDistance: "Maintain a safe distance from other vehicles.",
    safetyDefensiveSignalClearly: "Signal clearly for turns and lane changes.",
    safetyDefensiveBeVisible: "Be aware of your surroundings and make yourself visible, especially in traffic.",
    safetyWeatherTitle: "Weather Conditions:",
    safetyWeatherText: "Montenegro's weather can change quickly. Be prepared for sudden rain or strong winds, especially on coastal and mountain roads.",
    safetyOverloadTitle: "Do Not Overload:",
    safetyOverloadText: "Adhere to the scooter's weight limit. Overloading can affect handling and braking.",
    lawsSectionTitle: "Traffic Laws: Know Before You Go",
    lawsLicenseTitle: "Driving License:",
    lawsLicenseText: "A valid international driving permit or an EU driving license is required for scooter rental in Montenegro.",
    lawsSpeedTitle: "Speed Limits:",
    lawsSpeedUrban: "Urban areas: 50 km/h (31 mph)",
    lawsSpeedOpen: "Open roads: 80 km/h (50 mph)",
    lawsSpeedHighways: "Highways (if permitted for scooters): 100 km/h (62 mph)",
    lawsSpeedRespect: "Always respect posted speed limits and adjust to road conditions.",
    lawsRightOfWayTitle: "Right of Way:",
    lawsRightOfWayText: "Be mindful of local driving habits. Give way to vehicles approaching from the right at unmarked intersections, unless otherwise indicated.",
    lawsDrunkDrivingTitle: "Drunk Driving:",
    lawsDrunkDrivingText: "Driving under the influence of alcohol is strictly prohibited and severely penalized. Do not drink and drive.",
    lawsDocumentationTitle: "Carry Documents:",
    lawsDocumentationText: "Always carry your driving license, rental agreement, and insurance papers with you.",
    lawsParkingTitle: "Parking Regulations:",
    lawsParkingText: "Park only in designated areas. Illegally parked scooters may be towed, resulting in fines.",
    lawsLaneSplittingTitle: "Lane Splitting:",
    lawsLaneSplittingText: "Lane splitting is generally not advised and can be dangerous, although it's sometimes practiced by locals in heavy traffic. Exercise extreme caution if you choose to do so.",
    nuancesSectionTitle: "Local Nuances: What to Expect",
    nuancesRoadQualityTitle: "Road Quality:",
    nuancesRoadQualityText: "While main roads are generally good, some secondary roads, especially in rural or mountainous areas, can be narrow, winding, and have uneven surfaces or potholes. Drive with caution.",
    nuancesMountainRoadsTitle: "Mountain Roads:",
    nuancesMountainRoadsText: "Montenegro has many beautiful mountain roads with steep inclines and sharp turns. Use appropriate gears and be aware of oncoming traffic.",
    nuancesTunnelsTitle: "Tunnels:",
    nuancesTunnelsText: "Some roads, particularly those connecting coastal towns, feature tunnels. Ensure your lights are on and be aware of reduced visibility.",
    nuancesLocalDrivingTitle: "Local Driving Style:",
    nuancesLocalDrivingText: "Local drivers can sometimes be assertive. Stay alert, anticipate actions, and drive defensively.",
    nuancesFuelStationsTitle: "Fuel Stations:",
    nuancesFuelStationsText: "Fuel stations are readily available in towns and along main roads. It's advisable to refuel before long journeys, especially when heading to remote areas.",
    nuancesBokaBayTitle: "Boka Bay Ferries:",
    nuancesBokaBayText: "Consider using the Kamenari-Lepetane ferry to cross Boka Bay, especially during peak season, to save time and avoid traffic around the inner bay.",
    essentialsSectionTitle: "Essential Gear & Documents",
    essentialsSunglasses: "Sunglasses (for sun and wind protection)",
    essentialsJacket: "Light jacket (for cooler evenings or unexpected weather)",
    essentialsWater: "Water bottle (stay hydrated)",
    essentialsPhone: "Fully charged mobile phone",
    essentialsPowerBank: "Power bank (for charging on the go)",
    essentialsMap: "Physical map or offline GPS (mobile signal can be weak in some areas)",
    essentialsSunscreen: "Sunscreen (Montenegro sun is strong)",
    essentialsBackpack: "Small backpack (for essentials)",
    essentialsDocuments: "All rental documents and your driving license",
    emergencySectionTitle: "In Case of Emergency",
    emergencyRoadsideTitle: "Roadside Assistance:",
    emergencyRoadsideText: "In case of a breakdown or flat tire, contact our 24/7 roadside assistance number provided in your rental agreement. Do not attempt repairs yourself.",
    emergencyAccidentTitle: "In Case of an Accident:",
    emergencyAccidentSafety: "Ensure your safety and the safety of others. Move to a safe location if possible.",
    emergencyAccidentInjured: "Check for injuries. Call emergency services (124 for police, 122 for ambulance) if anyone is injured.",
    emergencyAccidentCallUs: "Immediately contact us and report the incident.",
    emergencyAccidentAdmitFault: "Do not admit fault or discuss liability with other parties.",
    emergencyAccidentCollectInfo: "Collect information: photos of the scene, contact details of other parties and witnesses, vehicle details.",
    emergencyAccidentWait: "Wait for the police and our team to arrive.",
    enjoyRideConcludingText: "We hope these tips enhance your scooter adventure in Montenegro. Ride safe and enjoy the breathtaking scenery!",
 // ADD THESE TESTIMONIAL TRANSLATIONS:

    shareExperience: "Share Your Experience",
    cancelComment: "Cancel",
    shareYourStory: "Share Your Story",
    fullName: "Full Name",
    enterName: "Enter your name", 
    email: "Email",
    enterEmail: "Enter your email",
    role: "Role/Location",
    enterRole: "e.g., Tourist from Belgrade",
    testimonial: "Your Testimonial",
    shareExperienceText: "Tell us about your experience with our scooter rental service...",
    submitting: "Submitting...",
    submitTestimonial: "Submit Testimonial", 
    verificationNote: "Your testimonial will be published after email verification.",
    verified: "Verified",
    testimonialSubmitted: "Thank you! Please check your email to verify your testimonial.",
    testimonialError: "Something went wrong. Please try again."
  },
  sr: {
    home: "Početna",
    scooters: "Skuteri",
    features: "Karakteristike",
    viewScooters: "Pogledaj skutere",
    contact: "Kontakt",
    selectLanguage: "Izaberite jezik",
    heroTitle: "Istražite Tivat i Boku Kotorsku na dva točka",
    heroSubtitle: "Doživite slobodu crnogorske obale sa našim premium skuterima za iznajmljivanje",
    rentNow: "Iznajmi odmah via Viber",
    learnMore: "Saznaj više",
    ourScooters: "Naša flota skutera",
    maxSpeed: "Maksimalna brzina",
    range: "Domet",
    rentThis: "Iznajmi ovaj skuter",
    experienceTitle: "Doživite avanturu",
    experienceDescription: "Otkrijte radost istraživanja Tivta i njegove okoline na našim modernim, pouzdanim skuterima.",
    feature1Title: "Sloboda istraživanja",
    feature1Description: "Idite gde god želite, kad god želite. Otkrijte skrivene plaže i panoramske vidikovce svojim tempom.",
    feature2Title: "Sunce i morski povetarac",
    feature2Description: "Osetite mediteranski povetarac dok krstarite duž prelepe jadranske obale.",
    feature3Title: "Lokalne atrakcije",
    feature3Description: "Pristupite najboljim lokalnim mestima do kojih veća vozila ne mogu doći. Parkirajte se lako i uživajte više u Tivtu.",
    feature4Title: "Sigurno i pouzdano",
    feature4Description: "Svi naši skuteri se redovno održavaju i dolaze sa uključenom sigurnosnom opremom.",
    feature5Title: "Podrška 24/7",
    feature5Description: "Naš tim je uvek dostupan da pomogne sa bilo kojim pitanjima ili pomoći koja vam može zatrebati tokom iznajmljivanja.",
    readyToRide: "Spremni za vožnju?",
    readyToRideDescription: "Rezervišite svoj skuter sada i započnite svoju tivatsku avanturu danas!",
    bookNow: "Rezerviši odmah preko Vibera",
    bookNowWhatsApp: "Rezerviši odmah preko WhatsApp-a",
    stayConnected: "Ostanite povezani",
    scanQrCodes: "Skenirajte naše QR kodove da nas pratite na društvenim mrežama i posetite našu web stranicu",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Web stranica",
    footerDescription: "Iznajmite skuter i istražite prelepu crnogorsku obalu svojim tempom. Doživite slobodu, avanturu i nezaboravne uspomene.",
    quickLinks: "Brzi linkovi",
    allRightsReserved: "Sva prava zadržana.",
    requirements: "Uslovi",
    included: "Uključeno",
    discounts: "Popusti",
    rentalInfo: "Informacije o iznajmljivanju",
    scooterDescription: "Birajte iz naše premium kolekcije skutera, savršenih za istraživanje Tivta i Crne Gore",
    scootersPricing: "Cjenovnik",
    requirementsText: "Potrebna važeća vozačka dozvola. Minimalna starost 18 godina.",
    includedText: "Kaciga, osiguranje i pomoć na putu 24/7.",
    testimonialsTitle: "Šta naši klijenti kažu",
    testimonialsDescription: "Pročitajte što naši klijenti imaju da kažu o svom iskustvu sa nama.",
    tipsPageTitle: "Savjeti za vožnju u Crnoj Gori",
    tipsPageSubtitle: "Osnovni savjeti za sigurno i ugodno iskustvo vožnje skutera u Tivtu i šire.",
    safetySectionTitle: "Sigurnost na prvom mjestu: Vozi pametno, budi siguran",
    safetyHelmetTitle: "Uvijek nosite kacigu:",
    safetyHelmetText: "Zakonski je obavezna i ključna za vašu sigurnost. Kacige obezbjeđujemo uz sve najmove.",
    safetyCheckTitle: "Provjera prije vožnje:",
    safetyCheckBrakes: "Provjerite kočnice i svjetla.",
    safetyCheckTires: "Provjerite pritisak i stanje guma.",
    safetyCheckLights: "Provjerite da li sva svjetla (prednje, zadnje, žmigavci) rade.",
    safetyCheckFuel: "Provjerite nivo goriva za vaše putovanje.",
    safetyDefensiveTitle: "Defanzivna vožnja:",
    safetyDefensiveMaintainDistance: "Održavajte sigurno rastojanje od drugih vozila.",
    safetyDefensiveSignalClearly: "Jasno signalizirajte skretanja i promjene trake.",
    safetyDefensiveBeVisible: "Budite svjesni okoline i učinite se vidljivim, posebno u saobraćaju.",
    safetyWeatherTitle: "Vremenski uslovi:",
    safetyWeatherText: "Vrijeme u Crnoj Gori se može brzo promijeniti. Budite spremni na iznenadnu kišu ili jake vjetrove, posebno na primorskim i planinskim putevima.",
    safetyOverloadTitle: "Ne preopterećujte:",
    safetyOverloadText: "Pridržavajte se ograničenja težine skutera. Preopterećenje može uticati na upravljanje i kočenje.",
    lawsSectionTitle: "Saobraćajni zakoni: Šta treba znati prije polaska",
    lawsLicenseTitle: "Vozačka dozvola:",
    lawsLicenseText: "Za iznajmljivanje skutera u Crnoj Gori potrebna je važeća međunarodna vozačka dozvola ili EU vozačka dozvola.",
    lawsSpeedTitle: "Ograničenja brzine:",
    lawsSpeedUrban: "Naseljena mjesta: 50 km/h",
    lawsSpeedOpen: "Otvoreni putevi: 80 km/h",
    lawsSpeedHighways: "Autoputevi (ako je dozvoljeno za skutere): 100 km/h",
    lawsSpeedRespect: "Uvijek poštujte postavljena ograničenja brzine i prilagodite se uslovima na putu.",
    lawsRightOfWayTitle: "Pravo prvenstva:",
    lawsRightOfWayText: "Budite svjesni lokalnih navika vožnje. Dajte prednost vozilima koja dolaze zdesna na neoznačenim raskrsnicama, osim ako nije drugačije naznačeno.",
    lawsDrunkDrivingTitle: "Vožnja pod uticajem alkohola:",
    lawsDrunkDrivingText: "Vožnja pod uticajem alkohola je strogo zabranjena i strogo kažnjiva. Ne pijte i ne vozite.",
    lawsDocumentationTitle: "Nosite dokumenta:",
    lawsDocumentationText: "Uvijek sa sobom nosite vozačku dozvolu, ugovor o najmu i papire osiguranja.",
    lawsParkingTitle: "Propisi o parkiranju:",
    lawsParkingText: "Parkirajte samo na označenim mjestima. Nelegalno parkirani skuteri mogu biti odvučeni, što rezultira kaznama.",
    lawsLaneSplittingTitle: "Provlačenje između traka:",
    lawsLaneSplittingText: "Provlačenje između traka generalno nije preporučljivo i može biti opasno, iako ga ponekad praktikuju lokalni vozači u gustom saobraćaju. Budite izuzetno oprezni ako se odlučite za to.",
    nuancesSectionTitle: "Lokalne specifičnosti: Šta očekivati",
    nuancesRoadQualityTitle: "Kvalitet puta:",
    nuancesRoadQualityText: "Iako su glavni putevi uglavnom dobri, neki sporedni putevi, posebno u ruralnim ili planinskim područjima, mogu biti uski, vijugavi i imati neravne površine ili rupe. Vozite oprezno.",
    nuancesMountainRoadsTitle: "Planinski putevi:",
    nuancesMountainRoadsText: "Crna Gora ima mnogo lijepih planinskih puteva sa strmim usponima i oštrim krivinama. Koristite odgovarajuće brzine i budite svjesni nailazećeg saobraćaja.",
    nuancesTunnelsTitle: "Tuneli:",
    nuancesTunnelsText: "Neki putevi, posebno oni koji povezuju primorske gradove, imaju tunele. Uvjerite se da su vam svjetla uključena i budite svjesni smanjene vidljivosti.",
    nuancesLocalDrivingTitle: "Lokalni stil vožnje:",
    nuancesLocalDrivingText: "Lokalni vozači ponekad mogu biti asertivni. Budite oprezni, predvidite radnje i vozite defanzivno.",
    nuancesFuelStationsTitle: "Benzinske pumpe:",
    nuancesFuelStationsText: "Benzinske pumpe su lako dostupne u gradovima i na glavnim putevima. Preporučljivo je napuniti gorivo prije dugih putovanja, posebno kada idete u udaljena područja.",
    nuancesBokaBayTitle: "Trajekti za Boku Kotorsku:",
    nuancesBokaBayText: "Razmislite o korišćenju trajekta Kamenari-Lepetane za prelazak Boke Kotorske, posebno tokom sezone, kako biste uštedjeli vrijeme i izbjegli gužve oko unutrašnjeg zaliva.",
    essentialsSectionTitle: "Osnovna oprema i dokumenta",
    essentialsSunglasses: "Naočare za sunce (za zaštitu od sunca i vjetra)",
    essentialsJacket: "Lagana jakna (za hladnije večeri ili neočekivano vrijeme)",
    essentialsWater: "Boca vode (ostanite hidrirani)",
    essentialsPhone: "Potpuno napunjen mobilni telefon",
    essentialsPowerBank: "Power bank (za punjenje u pokretu)",
    essentialsMap: "Fizička karta ili offline GPS (mobilni signal može biti slab u nekim područjima)",
    essentialsSunscreen: "Krema za sunčanje (crnogorsko sunce je jako)",
    essentialsBackpack: "Mali ranac (za osnovne stvari)",
    essentialsDocuments: "Sva dokumenta o najmu i vaša vozačka dozvola",
    emergencySectionTitle: "U slučaju nužde",
    emergencyRoadsideTitle: "Pomoć na putu:",
    emergencyRoadsideText: "U slučaju kvara ili probušene gume, kontaktirajte naš broj za pomoć na putu 24/7 koji je naveden u vašem ugovoru o najmu. Ne pokušavajte sami da popravljate.",
    emergencyAccidentTitle: "U slučaju nesreće:",
    emergencyAccidentSafety: "Osigurajte svoju sigurnost i sigurnost drugih. Pomjerite se na sigurno mjesto ako je moguće.",
    emergencyAccidentInjured: "Provjerite ima li povreda. Pozovite hitne službe (124 za policiju, 122 za hitnu pomoć) ako je neko povrijeđen.",
    emergencyAccidentCallUs: "Odmah nas kontaktirajte i prijavite incident.",
    emergencyAccidentAdmitFault: "Ne priznajte krivicu niti razgovarajte o odgovornosti sa drugim stranama.",
    emergencyAccidentCollectInfo: "Sakupite informacije: fotografije mjesta događaja, kontakt podatke drugih strana i svjedoka, podatke o vozilu.",
    emergencyAccidentWait: "Sačekajte dolazak policije i naše ekipe.",
    enjoyRideConcludingText: "Nadamo se da će vam ovi savjeti poboljšati vašu skutersku avanturu u Crnoj Gori. Vozite sigurno i uživajte u pejzažu koji oduzima dah!",
    shareExperience: "Podijelite svoje iskustvo",
    cancelComment: "Otkaži",
    shareYourStory: "Podijelite svoju priču",
    fullName: "Puno ime",
    enterName: "Unesite svoje ime",
    email: "Email",
    enterEmail: "Unesite svoju email adresu",
    role: "Uloga/Lokacija",
    enterRole: "npr., Turista iz Beograda",
    testimonial: "Vaše svjedočanstvo",
    shareExperienceText: "Recite nam o svom iskustvu sa našom uslugom iznajmljivanja skutera...",
    submitting: "Slanje...",
    submitTestimonial: "Pošalji svjedočanstvo",
    verificationNote: "Vaše svjedočanstvo će biti objavljeno nakon verifikacije emaila.",
    verified: "Verifikovano",
    testimonialSubmitted: "Hvala! Molimo provjerite svoju email adresu da biste verifikovali svoje svjedočanstvo.",
    testimonialError: "Nešto je pošlo po zlu. Molimo pokušajte ponovo."
  },
  ru: {
    home: "Главная",
    scooters: "Скутеры",
    features: "Особенности",
    viewScooters: "Посмотреть скутеры",
    contact: "Контакты",
    selectLanguage: "Выберите язык",
    heroTitle: "Исследуйте Тиват и бухту Бока на двух колесах",
    heroSubtitle: "Ощутите свободу черногорского побережья с нашими премиальными скутерами напрокат",
    rentNow: "Арендовать сейчас через Viber",
    learnMore: "Узнать больше",
    ourScooters: "Наш флот скутеров",
    maxSpeed: "Макс. скорость",
    range: "Запас хода",
    rentThis: "Арендовать этот скутер",
    experienceTitle: "Испытайте приключение",
    experienceDescription: "Откройте для себя радость исследования Тивата и его окрестностей на наших современных, надежных скутерах.",
    feature1Title: "Свобода исследования",
    feature1Description: "Отправляйтесь куда хотите и когда хотите. Откройте для себя скрытые пляжи и живописные смотровые площадки в своем темпе.",
    feature2Title: "Солнце и морской бриз",
    feature2Description: "Почувствуйте средиземноморский бриз, путешествуя вдоль прекрасного адриатического побережья.",
    feature3Title: "Местные достопримечательности",
    feature3Description: "Получите доступ к лучшим местным местам, куда не могут добраться более крупные транспортные средства. Легко паркуйтесь и наслаждайтесь Тиватом.",
    feature4Title: "Безопасно и надежно",
    feature4Description: "Все наши скутеры регулярно обслуживаются и поставляются с включенным защитным снаряжением.",
    feature5Title: "Поддержка 24/7",
    feature5Description: "Наша команда всегда доступна, чтобы помочь с любыми вопросами или помощью, которая может вам понадобиться во время аренды.",
    readyToRide: "Готовы к поездке?",
    readyToRideDescription: "Забронируйте свой скутер сейчас и начните свое приключение в Тивате сегодня!",
    bookNow: "Забронировать сейчас через Viber",
    bookNowWhatsApp: "Забронировать сейчас через WhatsApp",
    stayConnected: "Оставайтесь на связи",
    scanQrCodes: "Отсканируйте наши QR-коды, чтобы следить за нами в социальных сетях и посетить наш веб-сайт",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Веб-сайт",
    footerDescription: "Арендуйте скутер и исследуйте прекрасное черногорское побережье в своем темпе. Испытайте свободу, приключения и незабываемые воспоминания.",
    quickLinks: "Быстрые ссылки",
    allRightsReserved: "Все права защищены.",
    requirements: "Требования",
    included: "Включено",
    discounts: "Скидки",
    rentalInfo: "Информация об аренде",
    scooterDescription: "Выберите из нашей премиальной коллекции скутеров, идеальных для исследования Тивата и Черногории",
    scootersPricing: "Цены",
    requirementsText: "Требуется действительное водительское удостоверение. Минимальный возраст 18 лет.",
    includedText: "Шлем, страховка и круглосуточная помощь на дороге.",
    testimonialsTitle: "Отзывы наших клиентов",
    testimonialsDescription: "Прочтите, что наши клиенты говорят о своем опыте работы с нами.",
    tipsPageTitle: "Советы по вождению в Черногории",
    tipsPageSubtitle: "Важные советы для безопасного и приятного катания на скутере в Тивате и за его пределами.",
    safetySectionTitle: "Безопасность прежде всего: катайтесь с умом, оставайтесь в безопасности",
    safetyHelmetTitle: "Всегда носите шлем:",
    safetyHelmetText: "Это юридически обязательно и крайне важно для вашей безопасности. Мы предоставляем шлемы со всеми арендами.",
    safetyCheckTitle: "Проверка перед поездкой:",
    safetyCheckBrakes: "Проверьте тормоза и свет.",
    safetyCheckTires: "Осмотрите давление и состояние шин.",
    safetyCheckLights: "Убедитесь, что все фары (головной свет, задний фонарь, поворотники) работают.",
    safetyCheckFuel: "Проверьте уровень топлива для вашей поездки.",
    safetyDefensiveTitle: "Оборонительное вождение:",
    safetyDefensiveMaintainDistance: "Соблюдайте безопасное расстояние от других транспортных средств.",
    safetyDefensiveSignalClearly: "Четко сигнализируйте о поворотах и смене полосы движения.",
    safetyDefensiveBeVisible: "Будьте внимательны к своему окружению и делайте себя заметными, особенно в движении.",
    safetyWeatherTitle: "Погодные условия:",
    safetyWeatherText: "Погода в Черногории может быстро меняться. Будьте готовы к внезапному дождю или сильному ветру, особенно на прибрежных и горных дорогах.",
    safetyOverloadTitle: "Не перегружайте:",
    safetyOverloadText: "Соблюдайте ограничение по весу скутера. Перегрузка может повлиять на управляемость и торможение.",
    lawsSectionTitle: "Правила дорожного движения: Знайте, прежде чем ехать",
    lawsLicenseTitle: "Водительские права:",
    lawsLicenseText: "Для аренды скутера в Черногории требуются действующие международные водительские права или водительские права ЕС.",
    lawsSpeedTitle: "Ограничения скорости:",
    lawsSpeedUrban: "Городские районы: 50 км/ч",
    lawsSpeedOpen: "Открытые дороги: 80 км/ч",
    lawsSpeedHighways: "Шоссе (если разрешено для скутеров): 100 км/ч",
    lawsSpeedRespect: "Всегда соблюдайте установленные ограничения скорости и приспосабливайтесь к дорожным условиям.",
    lawsRightOfWayTitle: "Право проезда:",
    lawsRightOfWayText: "Будьте внимательны к местным привычкам вождения. Уступайте дорогу транспортным средствам, приближающимся справа на нерегулируемых перекрестках, если не указано иное.",
    lawsDrunkDrivingTitle: "Вождение в нетрезвом виде:",
    lawsDrunkDrivingText: "Вождение в состоянии алкогольного опьянения строго запрещено и строго наказывается. Не садитесь за руль в нетрезвом виде.",
    lawsDocumentationTitle: "Носите документы:",
    lawsDocumentationText: "Всегда имейте при себе водительские права, договор аренды и страховые документы.",
    lawsParkingTitle: "Правила парковки:",
    lawsParkingText: "Паркуйтесь только в специально отведенных местах. Незаконно припаркованные скутеры могут быть эвакуированы, что приведет к штрафам.",
    lawsLaneSplittingTitle: "Движение между полосами:",
    lawsLaneSplittingText: "Движение между полосами, как правило, не рекомендуется и может быть опасным, хотя иногда практикуется местными жителями в условиях интенсивного движения. Будьте предельно осторожны, если вы решите это сделать.",
    nuancesSectionTitle: "Местные особенности: Чего ожидать",
    nuancesRoadQualityTitle: "Качество дорог:",
    nuancesRoadQualityText: "Хотя основные дороги, как правило, хорошие, некоторые второстепенные дороги, особенно в сельской или горной местности, могут быть узкими, извилистыми и иметь неровные поверхности или выбоины. Будьте осторожны.",
    nuancesMountainRoadsTitle: "Горные дороги:",
    nuancesMountainRoadsText: "В Черногории много красивых горных дорог с крутыми подъемами и крутыми поворотами. Используйте соответствующие передачи и будьте внимательны к встречному движению.",
    nuancesTunnelsTitle: "Туннели:",
    nuancesTunnelsText: "Некоторые дороги, особенно те, что соединяют прибрежные города, имеют туннели. Убедитесь, что фары включены, и будьте внимательны к снижению видимости.",
    nuancesLocalDrivingTitle: "Местный стиль вождения:",
    nuancesLocalDrivingText: "Местные водители иногда могут быть напористыми. Будьте бдительны, предугадывайте действия и управляйте автомобилем оборонительно.",
    nuancesFuelStationsTitle: "Заправочные станции:",
    nuancesFuelStationsText: "Заправочные станции легко доступны в городах и на основных дорогах. Желательно заправляться перед дальними поездками, особенно при поездках в отдаленные районы.",
    nuancesBokaBayTitle: "Паромы Бока-Которской бухты:",
    nuancesBokaBayText: "Рассмотрите возможность использования парома Каменари-Лепетане для пересечения Бока-Которской бухты, особенно в пик сезона, чтобы сэкономить время и избежать пробок вокруг внутренней части бухты.",
    essentialsSectionTitle: "Необходимое снаряжение и документы",
    essentialsSunglasses: "Солнцезащитные очки (для защиты от солнца и ветра)",
    essentialsJacket: "Легкая куртка (для прохладных вечеров или неожиданной погоды)",
    essentialsWater: "Бутылка воды (для поддержания водного баланса)",
    essentialsPhone: "Полностью заряженный мобильный телефон",
    essentialsPowerBank: "Внешний аккумулятор (для зарядки в дороге)",
    essentialsMap: "Физическая карта или офлайн-GPS (мобильный сигнал может быть слабым в некоторых районах)",
    essentialsSunscreen: "Солнцезащитный крем (солнце в Черногории сильное)",
    essentialsBackpack: "Маленький рюкзак (для предметов первой необходимости)",
    essentialsDocuments: "Все документы об аренде и ваши водительские права",
    emergencySectionTitle: "В случае чрезвычайной ситуации",
    emergencyRoadsideTitle: "Помощь на дороге:",
    emergencyRoadsideText: "В случае поломки или прокола шины свяжитесь с нашей круглосуточной службой помощи на дороге, номер которой указан в вашем договоре аренды. Не пытайтесь ремонтировать самостоятельно.",
    emergencyAccidentTitle: "В случае аварии:",
    emergencyAccidentSafety: "Обеспечьте свою безопасность и безопасность других. Переместитесь в безопасное место, если это возможно.",
    emergencyAccidentInjured: "Проверьте наличие травм. Вызовите экстренные службы (124 для полиции, 122 для скорой помощи), если кто-либо пострадал.",
    emergencyAccidentCallUs: "Немедленно свяжитесь с нами и сообщите об инциденте.",
    emergencyAccidentAdmitFault: "Не признавайте вину и не обсуждайте ответственность с другими сторонами.",
    emergencyAccidentCollectInfo: "Соберите информацию: фотографии места происшествия, контактные данные других сторон и свидетелей, данные автомобиля.",
    emergencyAccidentWait: "Дождитесь прибытия полиции и нашей команды.",
    enjoyRideConcludingText: "Надеемся, эти советы сделают ваше приключение на скутере в Черногории еще лучше. Катайтесь безопасно и наслаждайтесь захватывающими дух пейзажами!",
    shareExperience: "Поделитесь своим опытом",
    cancelComment: "Отмена",
    shareYourStory: "Поделитесь своей историей",
    fullName: "Полное имя",
    enterName: "Введите ваше имя",
    email: "Электронная почта",
    enterEmail: "Введите ваш email",
    role: "Роль/Местоположение",
    enterRole: "например, Турист из Белграда",
    testimonial: "Ваш отзыв",
    shareExperienceText: "Расскажите нам о вашем опыте с нашей услугой аренды скутеров...",
    submitting: "Отправка...",
    submitTestimonial: "Отправить отзыв",
    verificationNote: "Ваш отзыв будет опубликован после проверки email.",
    verified: "Подтверждено",
    testimonialSubmitted: "Спасибо! Пожалуйста, проверьте свою электронную почту, чтобы подтвердить ваш отзыв.",
    testimonialError: "Что-то пошло не так. Пожалуйста, попробуйте снова."
  },
  he: {
    home: "בית",
    scooters: "קטנועים",
    features: "תכונות",
    viewScooters: "הצג קטנועים",
    contact: "צור קשר",
    selectLanguage: "בחר שפה",
    heroTitle: "חקור את טיבט ומפרץ בוקה על שני גלגלים",
    heroSubtitle: "חווה את החופש של חוף מונטנגרו עם קטנועי הפרימיום שלנו להשכרה",
    rentNow: "השכר עכשיו דרך וייבר",
    learnMore: "למידע נוסף",
    ourScooters: "צי הקטנועים שלנו",
    maxSpeed: "מהירות מקסימלית",
    range: "טווח",
    rentThis: "השכר קטנוע זה",
    experienceTitle: "חווה את ההרפתקה",
    experienceDescription: "גלה את השמחה של חקר טיבט וסביבתה על הקטנועים המודרניים והאמינים שלנו.",
    feature1Title: "חופש לחקור",
    feature1Description: "לך לאן שתרצה, מתי שתרצה. גלה חופים נסתרים ונקודות תצפית נופיות בקצב שלך.",
    feature2Title: "שמש ורוח ים",
    feature2Description: "הרגישו את הרוח הים תיכונית בעת שיוט לאורך חוף האדריאטי היפה.",
    feature3Title: "נקודות חמות מקומיות",
    feature3Description: "גישה למקומות המקומיים הטובים ביותר שכלי רכב גדולים יותר לא יכולים להגיע אליהם. חנה בקלות ותיהנה יותר מטיבט.",
    feature4Title: "בטוח ואמין",
    feature4Description: "כל הקטנועים שלנו מתוחזקים באופן קבוע ומגיעים עם ציוד בטיחות כלול.",
    feature5Title: "תמיכה 24/7",
    feature5Description: "הצוות שלנו תמיד זמין לעזור בכל שאלה או סיוע שאתה עשוי להזדקק לו במהלך ההשכרה.",
    readyToRide: "מוכנים לרכוב?",
    readyToRideDescription: "הזמן את הקטנוע שלך עכשיו והתחל את הרפתקת טיבט שלך היום!",
    bookNow: "הזמן עכשיו דרך וייבר",
    bookNowWhatsApp: "הזמן עכשיו דרך וואטסאפ",
    stayConnected: "הישאר מחובר",
    scanQrCodes: "סרקו את קודי ה-QR שלנו כדי לעקוב אחרינו ברשתות החברתיות ולבקר באתר שלנו",
    instagram: "אינסטגרם",
    facebook: "פייסבוק",
    website: "אתר אינטרנט",
    footerDescription: "השכירו קטנוע וחקרו את החוף המונטנגרי היפה בקצב שלכם. חוו חופש, הרפתקאות וזכרונות בלתי נשכחים.",
    quickLinks: "קישורים מהירים",
    allRightsReserved: "כל הזכויות שמורות.",
    requirements: "דרישות",
    included: "כלול",
    discounts: "הנחות",
    rentalInfo: "מידע על השכרה",
    scooterDescription: "בחרו מהאוסף הפרימיום שלנו של קטנועים, מושלמים לחקר טיבט ומונטנגרו",
    scootersPricing: "תמחור",
    requirementsText: "נדרש רישיון נהיגה תקף. גיל מינימלי 18 שנים.",
    includedText: "קסדה, ביטוח וסיוע בדרכים 24/7.",
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    testimonialsDescription: "קראו מה הלקוחות שלנו אומרים על החוויה שלהם איתנו.",
    tipsPageTitle: "טיפים לרכיבה במונטנגרו",
    tipsPageSubtitle: "עצות חיוניות לחוויית קטנוע בטוחה ומהנה בטיבט ומחוצה לה.",
    safetySectionTitle: "בטיחות קודם כל: רכבו בחוכמה, הישארו בטוחים",
    safetyHelmetTitle: "תמיד חבשו קסדה:",
    safetyHelmetText: "זו חובה חוקית וקריטית לבטיחותכם. אנו מספקים קסדות עם כל ההשכרות.",
    safetyCheckTitle: "בדיקה לפני רכיבה:",
    safetyCheckBrakes: "בדוק בלמים ואורות.",
    safetyCheckTires: "בדוק לחץ אוויר ומצב צמיגים.",
    safetyCheckLights: "ודא שכל האורות (פנס קדמי, פנס אחורי, איתותים) עובדים.",
    safetyCheckFuel: "ודא רמת דלק לנסיעתך.",
    safetyDefensiveTitle: "נהיגה הגנתית:",
    safetyDefensiveMaintainDistance: "שמור מרחק בטוח מכלי רכב אחרים.",
    safetyDefensiveSignalClearly: "אותת בבירור לפני פניות והחלפת נתיבים.",
    safetyDefensiveBeVisible: "היה מודע לסביבתך והפוך את עצמך לגלוי, במיוחד בתנועה.",
    safetyWeatherTitle: "תנאי מזג אוויר:",
    safetyWeatherText: "מזג האוויר במונטנגרו יכול להשתנות במהירות. היה מוכן לגשם פתאומי או רוחות חזקות, במיוחד בכבישי חוף והר.",
    safetyOverloadTitle: "אין להעמיס יתר על המידה:",
    safetyOverloadText: "הקפידו על מגבלת המשקל של הקטנוע. העמסת יתר עלולה להשפיע על הטיפול והבלימה.",
    lawsSectionTitle: "חוקי תנועה: דע לפני שאתה נוסע",
    lawsLicenseTitle: "רישיון נהיגה:",
    lawsLicenseText: "נדרש רישיון נהיגה בינלאומי תקף או רישיון נהיגה אירופאי להשכרת קטנוע במונטנגרו.",
    lawsSpeedTitle: "מגבלות מהירות:",
    lawsSpeedUrban: "אזורים עירוניים: 50 קמ\"ש",
    lawsSpeedOpen: "כבישים פתוחים: 80 קמ\"ש",
    lawsSpeedHighways: "כבישים מהירים (אם מותר לקטנועים): 100 קמ\"ש",
    lawsSpeedRespect: "תמיד כבד את מגבלות המהירות המפורסמות והתאם את הנהיגה לתנאי הדרך.",
    lawsRightOfWayTitle: "זכות קדימה:",
    lawsRightOfWayText: "שים לב להרגלי נהיגה מקומיים. תן זכות קדימה לכלי רכב המגיעים מימין בצמתים לא מסומנים, אלא אם צוין אחרת.",
    lawsDrunkDrivingTitle: "נהיגה בשכרות:",
    lawsDrunkDrivingText: "נהיגה תחת השפעת אלכוהול אסורה בהחלט ונענשת בחומרה. אין לשתות ולנהוג.",
    lawsDocumentationTitle: "נשיאת מסמכים:",
    lawsDocumentationText: "תמיד נשא עמך את רישיון הנהיגה שלך, הסכם השכירות ומסמכי הביטוח.",
    lawsParkingTitle: "תקנות חניה:",
    lawsParkingText: "חנה רק באזורים ייעודיים. קטנועים חונים באופן לא חוקי עלולים להיגרר, מה שיגרור קנסות.",
    lawsLaneSplittingTitle: "פיצול נתיבים:",
    lawsLaneSplittingText: "פיצול נתיבים בדרך כלל אינו מומלץ ויכול להיות מסוכן, אם כי לעיתים הוא מתורגל על ידי מקומיים בתנועה כבדה. נהג בזהירות יתרה אם תבחר לעשות זאת.",
    nuancesSectionTitle: "ניואנסים מקומיים: למה לצפות",
    nuancesRoadQualityTitle: "איכות כבישים:",
    nuancesRoadQualityText: "בעוד שכבישים ראשיים בדרך כלל טובים, חלק מכבישים משניים, במיוחד באזורים כפריים או הרריים, יכולים להיות צרים, מפותלים, ובעלי משטחים לא אחידים או בורות. סע בזהירות.",
    nuancesMountainRoadsTitle: "כבישי הרים:",
    nuancesMountainRoadsText: "במונטנגרו ישנם כבישי הרים יפים רבים עם עליות תלולות ופניות חדות. השתמש בגלגלי שיניים מתאימים והיה מודע לתנועה המגיעה.",
    nuancesTunnelsTitle: "מנהרות:",
    nuancesTunnelsText: "כמה כבישים, במיוחד אלה המחברים עיירות חוף, כוללים מנהרות. וודא שהאורות שלך דולקים והיה מודע לראות מופחתת.",
    nuancesLocalDrivingTitle: "סגנון נהיגה מקומי:",
    nuancesLocalDrivingText: "נהגים מקומיים יכולים לפעמים להיות אסרטיביים. הישאר ערני, צפה פעולות ונהג בהגנתיות.",
    nuancesFuelStationsTitle: "תחנות דלק:",
    nuancesFuelStationsText: "תחנות דלק זמינות בקלות בערים ולאורך כבישים ראשיים. רצוי לתדלק לפני נסיעות ארוכות, במיוחד כאשר פונים לאזורים מרוחקים.",
    nuancesBokaBayTitle: "מעבורות מפרץ בוקה:",
    nuancesBokaBayText: "שקול להשתמש במעבורת קמנרי-לפטנה כדי לחצות את מפרץ בוקה, במיוחד בעונת השיא, כדי לחסוך זמן ולהימנע מתנועה סביב המפרץ הפנימי.",
    essentialsSectionTitle: "ציוד ומסמכים חיוניים",
    essentialsSunglasses: "משקפי שמש (להגנה מפני שמש ורוח)",
    essentialsJacket: "ז'קט קל (לערבים קרירים או מזג אוויר בלתי צפוי)",
    essentialsWater: "בקבוק מים (הישאר רווי)",
    essentialsPhone: "טלפון נייד טעון במלואו",
    essentialsPowerBank: "בנק כוח (לטעינה בדרכים)",
    essentialsMap: "מפה פיזית או GPS לא מקוון (אות סלולרי יכול להיות חלש באזורים מסוימים)",
    essentialsSunscreen: "קרם הגנה (שמש מונטנגרית חזקה)",
    essentialsBackpack: "תרמיל קטן (לחיוניים)",
    essentialsDocuments: "כל מסמכי השכירות ורישיון הנהיגה שלך",
    emergencySectionTitle: "במקרה חירום",
    emergencyRoadsideTitle: "סיוע בדרכים:",
    emergencyRoadsideText: "במקרה של תקלה או תקר בגלגל, צור קשר עם מספר סיוע הדרכים 24/7 שלנו המופיע בהסכם השכירות שלך. אל תנסה תיקונים בעצמך.",
    emergencyAccidentTitle: "במקרה של תאונה:",
    emergencyAccidentSafety: "ודא את בטיחותך ואת בטיחותם של אחרים. עבור למקום בטוח אם אפשר.",
    emergencyAccidentInjured: "בדוק אם יש פציעות. התקשר לשירותי חירום (124 למשטרה, 122 לאמבולנס) אם מישהו נפצע.",
    emergencyAccidentCallUs: "פנה אלינו מיד ודווח על האירוע.",
    emergencyAccidentAdmitFault: "אל תודה באשמה או תדון באחריות עם צדדים אחרים.",
    emergencyAccidentCollectInfo: "אסוף מידע: תמונות מהזירה, פרטי קשר של צדדים אחרים ועדים, פרטי רכב.",
    emergencyAccidentWait: "המתן להגעת המשטרה והצוות שלנו.",
    enjoyRideConcludingText: "אנו מקווים שטיפים אלו ישפרו את הרפתקת הקטנוע שלכם במונטנגרו. סעו בבטחה ותיהנו מהנוף עוצר הנשימה!",
    shareExperience: "שתף את החוויה שלך",
    cancelComment: "ביטול",
    shareYourStory: "שתף את הסיפור שלך",
    fullName: "שם מלא",
    enterName: "הכנס את שמך",
    email: "אימייל",
    enterEmail: "הכנס את האימייל שלך",
    role: "תפקיד/מיקום",
    enterRole: "למשל, תייר מבלגרד",
    testimonial: "המחאה שלך",
    shareExperienceText: "ספר לנו על החוויה שלך עם שירות השכרת הקטנועים שלנו...",
    submitting: "שולח...",
    submitTestimonial: "שלח המחאה",
    verificationNote: "המחאה שלך תפורסם לאחר אימות האימייל.",
    verified: "מאומת",
    testimonialSubmitted: "תודה! אנא בדוק את האימייל שלך כדי לאמת את המחאה שלך.",
    testimonialError: "משהו השתבש. אנא נסה שוב."
  },
  fr: {
    home: "Accueil",
    scooters: "Scooters",
    features: "Caractéristiques",
    viewScooters: "Voir les scooters",
    contact: "Contact",
    selectLanguage: "Sélectionner la langue",
    heroTitle: "Explorez Tivat et la baie de Boka à deux roues",
    heroSubtitle: "Découvrez la liberté de la côte monténégrine avec nos scooters de location premium",
    rentNow: "Louer maintenant via Viber",
    learnMore: "En savoir plus",
    ourScooters: "Notre flotte de scooters",
    maxSpeed: "Vitesse max",
    range: "Autonomie",
    rentThis: "Louer ce scooter",
    experienceTitle: "Vivez l'aventure",
    experienceDescription: "Découvrez le plaisir d'explorer Tivat et ses environs sur nos scooters modernes et fiables.",
    feature1Title: "Liberté d'explorer",
    feature1Description: "Allez où vous voulez, quand vous voulez. Découvrez des plages cachées et des points de vue panoramiques à votre rythme.",
    feature2Title: "Soleil et brise marine",
    feature2Description: "Sentez la brise méditerranéenne en naviguant le long de la magnifique côte adriatique.",
    feature3Title: "Points d'intérêt locaux",
    feature3Description: "Accédez aux meilleurs endroits locaux que les véhicules plus grands ne peuvent pas atteindre. Garez-vous facilement et profitez davantage de Tivat.",
    feature4Title: "Sûr et fiable",
    feature4Description: "Tous nos scooters sont régulièrement entretenus et sont fournis avec un équipement de sécurité inclus.",
    feature5Title: "Support 24/7",
    feature5Description: "Notre équipe est toujours disponible pour vous aider avec toutes les questions ou l'assistance dont vous pourriez avoir besoin pendant votre location.",
    readyToRide: "Prêt à rouler ?",
    readyToRideDescription: "Réservez votre scooter maintenant et commencez votre aventure à Tivat aujourd'hui !",
    bookNow: "Réserver maintenant via Viber",
    bookNowWhatsApp: "Réserver maintenant via WhatsApp",
    stayConnected: "Restez connecté",
    scanQrCodes: "Scannez nos codes QR pour nous suivre sur les réseaux sociaux et visiter notre site web",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Site web",
    footerDescription: "Louez un scooter et explorez la magnifique côte monténégrine à votre rythme. Vivez la liberté, l'aventure et des souvenirs inoubliables.",
    quickLinks: "Liens rapides",
    allRightsReserved: "Tous droits réservés.",
    requirements: "Exigences",
    included: "Inclus",
    discounts: "Remises",
    rentalInfo: "Informations de location",
    scooterDescription: "Choisissez parmi notre collection premium de scooters, parfaits pour explorer Tivat et le Monténégro",
    scootersPricing: "Tarification",
    requirementsText: "Permis de conduire valide requis. Âge minimum 18 ans.",
    includedText: "Casque, assurance et assistance routière 24/7.",
    testimonialsTitle: "Ce que disent nos clients",
    testimonialsDescription: "Lisez ce que nos clients disent de leur expérience avec nous.",
    tipsPageTitle: "Conseils pour rouler au Monténégro",
    tipsPageSubtitle: "Conseils essentiels pour une expérience de scooter sûre et agréable à Tivat et au-delà.",
    safetySectionTitle: "La sécurité avant tout : Roulez intelligemment, restez en sécurité",
    safetyHelmetTitle: "Portez toujours un casque :",
    safetyHelmetText: "C'est une obligation légale et cruciale pour votre sécurité. Nous fournissons des casques avec toutes les locations.",
    safetyCheckTitle: "Vérification avant le départ :",
    safetyCheckBrakes: "Vérifiez les freins et les feux.",
    safetyCheckTires: "Inspectez la pression et l'état des pneus.",
    safetyCheckLights: "Assurez-vous que tous les feux (phare, feu arrière, clignotants) fonctionnent.",
    safetyCheckFuel: "Vérifiez le niveau de carburant pour votre trajet.",
    safetyDefensiveTitle: "Conduite défensive :",
    safetyDefensiveMaintainDistance: "Maintenez une distance de sécurité avec les autres véhicules.",
    safetyDefensiveSignalClearly: "Signalez clairement les virages et les changements de voie.",
    safetyDefensiveBeVisible: "Soyez conscient de votre environnement et rendez-vous visible, surtout dans la circulation.",
    safetyWeatherTitle: "Conditions météorologiques :",
    safetyWeatherText: "Le temps au Monténégro peut changer rapidement. Soyez prêt aux pluies soudaines ou aux vents forts, surtout sur les routes côtières et de montagne.",
    safetyOverloadTitle: "Ne surchargez pas :",
    safetyOverloadText: "Respectez la limite de poids du scooter. La surcharge peut affecter la maniabilité et le freinage.",
    lawsSectionTitle: "Code de la route : À savoir avant de partir",
    lawsLicenseTitle: "Permis de conduire :",
    lawsLicenseText: "Un permis de conduire international valide ou un permis de conduire de l'UE est requis pour la location de scooter au Monténégro.",
    lawsSpeedTitle: "Limites de vitesse :",
    lawsSpeedUrban: "Zones urbaines : 50 km/h",
    lawsSpeedOpen: "Routes ouvertes : 80 km/h",
    lawsSpeedHighways: "Autoroutes (si autorisées pour les scooters) : 100 km/h",
    lawsSpeedRespect: "Respectez toujours les limites de vitesse affichées et adaptez-vous aux conditions routières.",
    lawsRightOfWayTitle: "Priorité de passage :",
    lawsRightOfWayText: "Soyez attentif aux habitudes de conduite locales. Cédez le passage aux véhicules venant de droite aux intersections non marquées, sauf indication contraire.",
    lawsDrunkDrivingTitle: "Conduite en état d'ivresse :",
    lawsDrunkDrivingText: "La conduite sous l'influence de l'alcool est strictement interdite et sévèrement punie. Ne buvez pas et ne conduisez pas.",
    lawsDocumentationTitle: "Transportez les documents :",
    lawsDocumentationText: "Ayez toujours sur vous votre permis de conduire, votre contrat de location et vos papiers d'assurance.",
    lawsParkingTitle: "Règlement de stationnement :",
    lawsParkingText: "Garez-vous uniquement dans les zones désignées. Les scooters mal garés peuvent être remorqués, entraînant des amendes.",
    lawsLaneSplittingTitle: "Remontée de file :",
    lawsLaneSplittingText: "La remontée de file n'est généralement pas conseillée et peut être dangereuse, bien qu'elle soit parfois pratiquée par les locaux en cas de forte circulation. Faites preuve d'une extrême prudence si vous choisissez de le faire.",
    nuancesSectionTitle: "Nuances locales : À quoi s'attendre",
    nuancesRoadQualityTitle: "Qualité des routes :",
    nuancesRoadQualityText: "Bien que les routes principales soient généralement bonnes, certaines routes secondaires, en particulier dans les zones rurales ou montagneuses, peuvent être étroites, sinueuses et présenter des surfaces inégales ou des nids-de-poule. Conduisez avec prudence.",
    nuancesMountainRoadsTitle: "Routes de montagne :",
    nuancesMountainRoadsText: "Le Monténégro possède de nombreuses belles routes de montagne avec des pentes raides et des virages serrés. Utilisez les vitesses appropriées et soyez conscient de la circulation venant en sens inverse.",
    nuancesTunnelsTitle: "Tunnels :",
    nuancesTunnelsText: "Certaines routes, notamment celles reliant les villes côtières, comportent des tunnels. Assurez-vous que vos feux sont allumés et soyez conscient de la visibilité réduite.",
    nuancesLocalDrivingTitle: "Style de conduite local :",
    nuancesLocalDrivingText: "Les conducteurs locaux peuvent parfois être assertifs. Restez vigilant, anticipez les actions et conduisez de manière défensive.",
    nuancesFuelStationsTitle: "Stations-service :",
    nuancesFuelStationsText: "Les stations-service sont facilement disponibles dans les villes et le long des routes principales. Il est conseillé de faire le plein avant les longs trajets, surtout lorsque vous vous dirigez vers des zones reculées.",
    nuancesBokaBayTitle: "Ferries de la baie de Boka :",
    nuancesBokaBayText: "Envisagez d'utiliser le ferry Kamenari-Lepetane pour traverser la baie de Boka, surtout en haute saison, afin de gagner du temps et d'éviter les embouteillages autour de la partie intérieure de la baie.",
    essentialsSectionTitle: "Équipement et documents essentiels",
    essentialsSunglasses: "Lunettes de soleil (pour la protection solaire et le vent)",
    essentialsJacket: "Veste légère (pour les soirées plus fraîches ou le temps inattendu)",
    essentialsWater: "Bouteille d'eau (restez hydraté)",
    essentialsPhone: "Téléphone portable entièrement chargé",
    essentialsPowerBank: "Batterie externe (pour recharger en déplacement)",
    essentialsMap: "Carte physique ou GPS hors ligne (le signal mobile peut être faible dans certaines zones)",
    essentialsSunscreen: "Crème solaire (le soleil du Monténégro est fort)",
    essentialsBackpack: "Petit sac à dos (pour les essentiels)",
    essentialsDocuments: "Tous les documents de location et votre permis de conduire",
    emergencySectionTitle: "En cas d'urgence",
    emergencyRoadsideTitle: "Assistance routière :",
    emergencyRoadsideText: "En cas de panne ou de crevaison, contactez notre numéro d'assistance routière 24/7 fourni dans votre contrat de location. N'essayez pas de réparer vous-même.",
    emergencyAccidentTitle: "En cas d'accident :",
    emergencyAccidentSafety: "Assurez votre sécurité et celle des autres. Déplacez-vous dans un endroit sûr si possible.",
    emergencyAccidentInjured: "Vérifiez s'il y a des blessures. Appelez les services d'urgence (124 pour la police, 122 pour l'ambulance) si quelqu'un est blessé.",
    emergencyAccidentCallUs: "Contactez-nous immédiatement et signalez l'incident.",
    emergencyAccidentAdmitFault: "N'admettez pas de faute et ne discutez pas de responsabilité avec les autres parties.",
    emergencyAccidentCollectInfo: "Recueillez des informations : photos de la scène, coordonnées des autres parties et des témoins, détails du véhicule.",
    emergencyAccidentWait: "Attendez l'arrivée de la police et de notre équipe.",
    enjoyRideConcludingText: "Nous espérons que ces conseils amélioreront votre aventure en scooter au Monténégro. Roulez en toute sécurité et profitez des paysages à couper le souffle !",
    shareExperience: "Partagez votre expérience",
    cancelComment: "Annuler",
    shareYourStory: "Partagez votre histoire",
    fullName: "Nom complet",
    enterName: "Entrez votre nom",
    email: "Email",
    enterEmail: "Entrez votre email",
    role: "Rôle/Emplacement",
    enterRole: "par exemple, Touriste de Belgrade",
    testimonial: "Votre témoignage",
    shareExperienceText: "Parlez-nous de votre expérience avec notre service de location de scooters...",
    submitting: "Soumission...",
    submitTestimonial: "Soumettre le témoignage",
    verificationNote: "Votre témoignage sera publié après vérification de l'email.",
    verified: "Vérifié",
    testimonialSubmitted: "Merci ! Veuillez vérifier votre email pour vérifier votre témoignage.",
    testimonialError: "Quelque chose a mal tourné. Veuillez réessayer."
  }
};

// Function to get translations based on language
export function getTranslations(lang: string): Translations {
  if (!supportedLanguages.includes(lang)) {
    console.warn(`Language ${lang} not supported, defaulting to English.`);
    return translations.en;
  }
  return translations[lang];
}
