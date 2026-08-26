import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

function App() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(
    () => (localStorage.getItem('cookie_consent') as 'accepted' | 'declined') || null
  );

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    const lang = localStorage.getItem('lang') || 'hr';
    localStorage.setItem('lang', lang);
    setConsent('accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.removeItem('lang');
    setConsent('declined');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Partners />
        </main>
        <Footer />
        <ScrollToTop />
        {consent === null && <CookieBanner onAccept={handleAccept} onDecline={handleDecline} />}
      </div>
    </LanguageProvider>
  );
}

export default App;