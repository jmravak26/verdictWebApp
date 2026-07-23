import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'hr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    partners: 'Partners',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional Assessment Services',
    heroSubtitle: 'Registered for vehicle, machinery and property valuation and damage assessment in Zadar, Šibenik-Knin, Split-Dalmatia and Dubrovnik-Neretva counties',
    learnMore: 'Learn More',
    modernInnovative: 'Modern & Innovative',
    
    // About Section
    aboutTitle: 'About VERDICT',
    aboutText: 'Professional assessment and valuation services across Zadar, Šibenik-Knin, Split-Dalmatia and Dubrovnik-Neretva counties. Expert damage evaluation and valuation.',
    whoWeAre: 'Who We Are',
    excellence: 'Excellence',
    excellenceDesc: 'Committed to delivering exceptional quality in every project',
    collaboration: 'Collaboration',
    collaborationDesc: 'Working closely with clients to achieve their vision',
    results: 'Results',
    resultsDesc: 'Focused on measurable outcomes and business growth',
    
    // Services Section
    servicesTitle: 'Our Services',
    whatWeOffer: 'What We Offer',
    service1Title: 'Vehicle Valuation',
    service1Text: 'Photo documentation and assessment of vehicle condition, archiving vehicle documentation to determine fair market value according to European standards',
    service2Title: 'Value Difference Assessment',
    service2Text: 'Creating reports to determine vehicle market value after extraordinary events (breakdown, traffic accident, etc.)',
    service3Title: 'Damage Assessment',
    service3Text: 'Independent and professional damage assessment using knowledge and experience gained through years of work in the profession',
    service4Title: 'Machinery Damage Assessment',
    service4Text: 'Damage assessment on industrial and self-propelled machinery, so-called "Machine Breakdown"',
    service5Title: 'Property Damage Assessment',
    service5Text: 'Professional assessment of property damage for insurance and legal purposes',
    learnMoreBtn: 'Learn More',
    service1Detail: 'We perform detailed photo documentation of the vehicle, archive all relevant documentation, and determine the fair market value in accordance with European standards. Our reports are accepted by all major insurance companies and courts.',
    service2Detail: 'After an extraordinary event such as a breakdown or traffic accident, a vehicle loses part of its market value even after repairs. We prepare expert reports that quantify this loss, enabling you to claim full compensation.',
    service3Detail: 'Our independent damage assessments are based on years of professional experience. We provide objective, court-admissible reports for insurance claims, disputes, and legal proceedings.',
    service4Detail: 'We assess damage on industrial and self-propelled machinery — the so-called "Machine Breakdown". Our experts evaluate repair costs and residual value for insurance and leasing purposes.',
    service5Detail: 'We provide professional assessments of property damage caused by natural disasters, accidents, or other events, for insurance claims, legal proceedings, and reconstruction planning.',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactText: 'Ready to start your project? Contact us today!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    footerText: 'All rights reserved.',
    footerSlogan: 'Expertise that is measured in results.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    workingHours: 'Working Hours',
    workingHoursTime: 'Mon - Fri: 8:00 AM - 4:00 PM',
    madeWith: 'Made with',
    inCroatia: 'in Croatia',
  },
  hr: {
    // Navigation
    home: 'Početna',
    about: 'O nama',
    services: 'Usluge',
    partners: 'Partneri',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Profesionalne Usluge Procjene',
    heroSubtitle: 'Registrirani za procjenu vrijednosti i štete na motornim vozilima, strojevima i imovini na području Zadarske, Šibensko-kninske, Splitsko-dalmatinske i Dubrovačko-neretvanske županije',
    learnMore: 'Saznajte Više',
    modernInnovative: 'Moderno i Inovativno',
    
    // About Section
    aboutTitle: 'O VERDICT-u',
    aboutText: 'Profesionalne usluge procjene i vještačenja imovine na području Zadarske, Šibensko-kninske, Splitsko-dalmatinske i Dubrovačko-neretvanske županije. Stručna procjena štete i vrijednosti.',
    whoWeAre: 'Tko Smo Mi',
    excellence: 'Izvrsnost',
    excellenceDesc: 'Posvećeni pružanju iznimne kvalitete u svakom projektu',
    collaboration: 'Suradnja',
    collaborationDesc: 'Bliska suradnja s klijentima za ostvarenje njihove vizije',
    results: 'Rezultati',
    resultsDesc: 'Fokusirani na mjerljive ishode i poslovni rast',
    
    // Services Section
    servicesTitle: 'Naše Usluge',
    whatWeOffer: 'Što Nudimo',
    service1Title: 'Procjena Vrijednosti Vozila',
    service1Text: 'Izrada foto-elaborata te obrada postojećeg stanja vozila, arhiviranje dokumentacije vozila u cilju određivanja poštene tržišne vrijednosti motornog vozila po Europskim standardima',
    service2Title: 'Procjena Razlike Vrijednosti',
    service2Text: 'Izrada elaborata za motorno vozilo u cilju određivanja vrijednosti vozila na tržištu nakon nastanka izvanrednog događaja (kvar, prometna nesreća/nezgoda i slično)',
    service3Title: 'Procjena Štete',
    service3Text: 'Neovisna i stručna procjena štete koristeći se znanjem i iskustvom prikupljenim godinama rada u struci',
    service4Title: 'Procjene štete na radnim strojevima',
    service4Text: 'Procjene štete na radnim strojevima (industrijski i samohodni), takozvani "Lom stroja"',
    service5Title: 'Procjene štete na nekretninama',
    service5Text: 'Stručna procjena štete na nekretninama za osiguravajuće i pravne svrhe',
    learnMoreBtn: 'Saznaj više',
    service1Detail: 'Izrađujemo detaljan foto-elaborat vozila, arhiviramo svu relevantnu dokumentaciju te određujemo poštenu tržišnu vrijednost sukladno europskim standardima. Naši elaborati prihvaćeni su od strane svih većih osiguravajućih kuća i sudova.',
    service2Detail: 'Nakon izvanrednog događaja poput kvara ili prometne nesreće, vozilo gubi dio tržišne vrijednosti čak i nakon popravka. Izrađujemo stručne elaborate koji kvantificiraju taj gubitak, omogućujući vam ostvarivanje pune naknade.',
    service3Detail: 'Naše neovisne procjene štete temelje se na godinama profesionalnog iskustva. Pružamo objektivne, sudski prihvatljive elaborate za osiguravajuće zahtjeve, sporove i pravne postupke.',
    service4Detail: 'Procjenjujemo štete na industrijskim i samohodnim strojevima — takozvani „Lom stroja". Naši stručnjaci procjenjuju troškove popravka i ostatnu vrijednost za potrebe osiguranja i leasinga.',
    service5Detail: 'Pružamo stručne procjene štete na nekretninama nastalih uslijed prirodnih katastrofa, nezgoda ili drugih događaja, za potrebe osiguranja, pravnih postupaka i planiranja obnove.',
    
    // Contact Section
    contactTitle: 'Kontaktirajte Nas',
    contactText: 'Spremni za početak vašeg projekta? Kontaktirajte nas danas!',
    name: 'Ime',
    email: 'Email',
    message: 'Poruka',
    send: 'Pošaljite Poruku',
    
    // Footer
    footerText: 'Sva prava pridržana.',
    footerSlogan: 'Stručnost koja se mjeri rezultatima.',
    quickLinks: 'Brze Poveznice',
    contactInfo: 'Kontakt Informacije',
    workingHours: 'Radno Vrijeme',
    workingHoursTime: 'Pon - Pet: 08:00 - 16:00',
    madeWith: 'Napravljeno s',
    inCroatia: 'u Hrvatskoj',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('lang') as Language) || 'hr'
  );

  const handleSetLanguage = (lang: Language) => {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};