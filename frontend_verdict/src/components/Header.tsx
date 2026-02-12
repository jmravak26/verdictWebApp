import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setIsScrolling(true);
    smoothScrollTo(sectionId);
    setTimeout(() => {
      setIsScrolling(false);
      // Force update scroll progress after animation
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    }, 1200);
  };

  return (
    <header 
      className="fixed top-0 w-full backdrop-blur-xl z-50 border-b transition-all duration-300 ease-out"
      style={{
        backgroundColor: `rgba(${255 - scrollProgress * 218}, ${255 - scrollProgress * 156}, ${255 - scrollProgress * 21}, 0.95)`,
        background: scrollProgress > 0 ? `linear-gradient(to right, rgb(${37 + scrollProgress * 110}, ${99 + scrollProgress * 57}, ${235 - scrollProgress * 1}), rgb(${147 - scrollProgress * 110}, ${51 + scrollProgress * 48}, ${234 + scrollProgress * 1}))` : undefined,
        borderColor: scrollProgress > 0.1 ? `rgba(59, 130, 246, ${0.2 + scrollProgress * 0.3})` : 'rgb(243, 244, 246)',
        boxShadow: scrollProgress > 0.1 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <img src="/imagesLogo/verdictLogo.png" alt="Verdict Logo" className="w-full h-full object-contain rounded-xl" />
            </div>
            <span 
              className="ml-3 text-2xl font-bold transition-colors duration-300"
              style={{
                color: scrollProgress > 0.3 ? 'white' : `rgba(17, 24, 39, ${1 - scrollProgress})`
              }}
            >Verdict</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['home', 'services', 'about', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section === 'contact' ? 'footer' : section)}
                className="px-4 py-2 font-medium transition-all duration-200 rounded-lg relative group"
                style={{
                  color: scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)'
                }}
                onMouseEnter={(e) => {
                  if (scrollProgress > 0.3) {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  } else {
                    e.currentTarget.style.color = 'rgb(37, 99, 235)';
                    e.currentTarget.style.backgroundColor = 'rgb(239, 246, 255)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {t(section)}
                <span 
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundColor: scrollProgress > 0.3 ? 'white' : 'rgb(37, 99, 235)'
                  }}
                ></span>
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1 p-1 rounded-lg backdrop-blur-sm" style={{
              backgroundColor: scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)'
            }}>
              <button
                onClick={() => setLanguage('en')}
                className="px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-300"
                style={{
                  backgroundColor: language === 'en' ? (scrollProgress > 0.3 ? 'white' : 'rgb(59, 130, 246)') : 'transparent',
                  color: language === 'en' ? (scrollProgress > 0.3 ? 'rgb(59, 130, 246)' : 'white') : (scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.7)' : 'rgb(107, 114, 128)'),
                  boxShadow: language === 'en' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hr')}
                className="px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-300"
                style={{
                  backgroundColor: language === 'hr' ? (scrollProgress > 0.3 ? 'white' : 'rgb(59, 130, 246)') : 'transparent',
                  color: language === 'hr' ? (scrollProgress > 0.3 ? 'rgb(59, 130, 246)' : 'white') : (scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.7)' : 'rgb(107, 114, 128)'),
                  boxShadow: language === 'hr' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                HR
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl transition-all duration-200"
              style={{
                color: scrollProgress > 0.3 ? 'white' : 'rgb(55, 65, 81)'
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden py-6 border-t backdrop-blur-xl transition-colors duration-300"
            style={{
              backgroundColor: `rgba(${255 - scrollProgress * 218}, ${255 - scrollProgress * 156}, ${255 - scrollProgress * 21}, 0.95)`,
              background: scrollProgress > 0 ? `linear-gradient(to right, rgb(${37 + scrollProgress * 110}, ${99 + scrollProgress * 57}, ${235 - scrollProgress * 1}), rgb(${147 - scrollProgress * 110}, ${51 + scrollProgress * 48}, ${234 + scrollProgress * 1}))` : undefined,
              borderColor: scrollProgress > 0.1 ? `rgba(255, 255, 255, ${0.2 + scrollProgress * 0.3})` : 'rgb(243, 244, 246)'
            }}
          >
            <div className="flex flex-col space-y-1">
              {['home', 'services', 'about', 'partners', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section === 'contact' ? 'footer' : section)}
                  className="text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                  style={{
                    color: scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)'
                  }}
                  onMouseEnter={(e) => {
                    if (scrollProgress > 0.3) {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    } else {
                      e.currentTarget.style.color = 'rgb(37, 99, 235)';
                      e.currentTarget.style.backgroundColor = 'rgb(239, 246, 255)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = scrollProgress > 0.3 ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {t(section)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;