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
    heroTitle: 'Professional Vehicle Assessment Services',
    heroSubtitle: 'Registered for vehicle, machinery and property valuation and damage assessment throughout Dalmatia',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    modernInnovative: 'Modern & Innovative',
    
    // About Section
    aboutTitle: 'About VERDICT',
    aboutText: 'Professional vehicle assessment services throughout Dalmatia. Expert damage evaluation and valuation.',
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
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactText: 'Ready to start your project? Contact us today!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    footerText: 'All rights reserved.',
  },
  hr: {
    // Navigation
    home: 'Početna',
    about: 'O nama',
    services: 'Usluge',
    partners: 'Partneri',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Profesionalne Usluge Procjene Vozila',
    heroSubtitle: 'Registrirani za procjenu vrijednosti i štete na motornim vozilima, strojevima i imovini na području cijele Dalmacije',
    getStarted: 'Počnite',
    learnMore: 'Saznajte Više',
    modernInnovative: 'Moderno i Inovativno',
    
    // About Section
    aboutTitle: 'O VERDICT-u',
    aboutText: 'Profesionalne usluge procjene vozila u Dalmaciji. Stručna procjena štete i vrijednosti.',
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
    
    // Contact Section
    contactTitle: 'Kontaktirajte Nas',
    contactText: 'Spremni za početak vašeg projekta? Kontaktirajte nas danas!',
    name: 'Ime',
    email: 'Email',
    message: 'Poruka',
    send: 'Pošaljite Poruku',
    
    // Footer
    footerText: 'Sva prava pridržana.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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