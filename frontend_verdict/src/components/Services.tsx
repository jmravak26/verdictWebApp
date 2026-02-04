import React from 'react';
import { motion } from 'framer-motion';
import { Car, Calculator, FileSearch, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Car,
      title: t('service1Title'),
      description: t('service1Text'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: Calculator,
      title: t('service2Title'),
      description: t('service2Text'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: FileSearch,
      title: t('service3Title'),
      description: t('service3Text'),
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6 border border-blue-200"
          >
            {language === 'hr' ? 'Što Nudimo' : 'What We Offer'}
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('servicesTitle')}
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} hover:border-opacity-50 transform hover:-translate-y-2`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Service Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${service.bgColor} rounded-2xl flex items-center justify-center border-2 ${service.borderColor} group-hover:border-opacity-70 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Service Image</p>
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                  {language === 'hr' ? 'Saznajte Više' : 'Learn More'}
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;