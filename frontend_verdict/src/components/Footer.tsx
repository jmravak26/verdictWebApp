import React, { useState } from 'react';
import { Linkedin, Heart, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const createHearts = () => {
    const newHearts = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 50 - 25,
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 4000);
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/andrija.mravak', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/andrija-mravak-ba1000227/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: t('home'), id: 'home' },
    { label: t('services'), id: 'services' },
    { label: t('about'), id: 'about' },
    { label: t('partners'), id: 'partners' },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <style>
        {`
          @keyframes float-up {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-50px) scale(0.5);
            }
          }
        `}
      </style>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img src="/imagesLogo/verdictLogo.png" alt="Verdict Logo" className="w-full h-full object-contain rounded-2xl" />
              </div>
              <span className="ml-4 text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Verdict</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-md">
              {t('aboutText')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group border border-gray-700 hover:border-transparent"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollTo(link.id)}
                  className="block text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-2 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="group flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:verdict.amg@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    verdict.amg@gmail.com
                  </a>
                </div>
              </div>
              <div className="group flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a 
                    href="tel:+385915148509" 
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    +385 91 514 8509
                  </a>
                </div>
              </div>
              <div className="group flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="font-medium text-white mb-1">Address</p>
                  <a 
                    href="https://maps.google.com/?q=Gala+157,+Gala,+Croatia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Gala 157, Gala
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2025 Verdict. {t('footerText')}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 relative">
              <span>Made with</span>
              <button 
                onClick={createHearts}
                className="relative focus:outline-none"
              >
                <Heart className="w-4 h-4 text-red-500 animate-pulse hover:scale-110 transition-transform cursor-pointer" />
                {hearts.map((heart) => (
                  <Heart
                    key={heart.id}
                    className="absolute w-3 h-3 text-red-400 animate-bounce pointer-events-none"
                    style={{
                      left: `${heart.x}px`,
                      top: `${heart.y}px`,
                      animation: 'float-up 4s ease-out forwards',
                    }}
                  />
                ))}
              </button>
              <span>in Croatia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;