import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { language } = useLanguage();

  const currentPartners = [
    { name: 'Grawe', logo: '/imagesLogo/GraweLogo.png', url: 'https://www.grawe.hr/' },
    { name: 'Dekra', logo: '/imagesLogo/DekraLogo.jpg', url: 'https://www.dekra.hr/hr/damage-appraisal/' },
    { name: 'Uniqa', logo: '/imagesLogo/UniqaLogo.jpg', url: 'https://www.uniqa.hr/' },
  ];

  const pastPartners = [
    { name: 'Triglav', logo: '/imagesLogo/TriglavLogo.png', url: 'https://www.triglav.hr/' },
    { name: 'Crosig', logo: '/imagesLogo/CroatiaOsiguranjeLogo.jpg', url: 'https://crosig.hr/' },
    { name: 'Wiener', logo: '/imagesLogo/WienerLogo.png', url: 'https://www.wiener.hr/' },
    { name: 'Sava Osiguranje', logo: '/imagesLogo/SavaLogo.png', url: 'https://www.sava-osiguranje.hr/' },
    { name: 'Generali', logo: '/imagesLogo/GeneraliLogo.png', url: 'https://generali.hr/' },
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6 border border-blue-200"
          >
            {language === 'hr' ? 'Naši Partneri' : 'Our Partners'}
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'hr' ? 'Pouzdani Partneri' : 'Trusted Partners'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'hr' 
              ? 'Radimo s vodećim osiguravajućim kućama u Hrvatskoj' 
              : 'Working with leading insurance companies in Croatia'
            }
          </p>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            {language === 'hr' ? 'Trenutni Partneri' : 'Current Partners'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="max-h-full max-w-full object-contain group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Past Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            {language === 'hr' ? 'Prethodna Suradnja' : 'Previous Collaborations'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {pastPartners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
              >
                <div className="h-16 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              {language === 'hr' 
                ? 'Više od 8 partnerstava s vodećim osiguravajućim kućama' 
                : 'Over 8 partnerships with leading insurance companies'
              }
            </p>
            <p className="text-gray-600">
              {language === 'hr' 
                ? 'Dugogodišnje iskustvo u osiguranju vozila i procjeni šteta' 
                : 'Years of experience in vehicle insurance and damage assessment'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;