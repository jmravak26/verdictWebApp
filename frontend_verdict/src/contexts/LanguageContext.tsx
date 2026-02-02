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
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Modern Solutions for Your Business',
    heroSubtitle: 'We deliver cutting-edge technology solutions that drive growth and innovation',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About Us',
    aboutText: 'We are a team of passionate professionals dedicated to delivering exceptional results through innovative technology solutions.',
    
    // Services Section
    servicesTitle: 'Our Services',
    service1Title: 'Web Development',
    service1Text: 'Modern, responsive websites built with latest technologies',
    service2Title: 'Mobile Apps',
    service2Text: 'Native and cross-platform mobile applications',
    service3Title: 'Consulting',
    service3Text: 'Strategic technology consulting for your business',
    
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
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Moderna Rješenja za Vaš Biznis',
    heroSubtitle: 'Pružamo najsuvremenija tehnološka rješenja koja pokreću rast i inovacije',
    getStarted: 'Počnite',
    learnMore: 'Saznajte Više',
    
    // About Section
    aboutTitle: 'O Nama',
    aboutText: 'Mi smo tim strastvenih profesionalaca posvećenih pružanju iznimnih rezultata kroz inovativna tehnološka rješenja.',
    
    // Services Section
    servicesTitle: 'Naše Usluge',
    service1Title: 'Web Razvoj',
    service1Text: 'Moderne, responzivne web stranice izgrađene najnovijim tehnologijama',
    service2Title: 'Mobilne Aplikacije',
    service2Text: 'Nativne i cross-platform mobilne aplikacije',
    service3Title: 'Konzultacije',
    service3Text: 'Strateške tehnološke konzultacije za vaš biznis',
    
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