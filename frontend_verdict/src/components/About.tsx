import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('excellence'),
      description: t('excellenceDesc'),
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Users,
      title: t('collaboration'),
      description: t('collaborationDesc'),
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Target,
      title: t('results'),
      description: t('resultsDesc'),
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm relative">
              <motion.img 
                src="/imagesLogo/verdictLogo.png" 
                alt="Verdict Logo" 
                className="w-full h-full object-fill"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 20px 25px rgba(59, 130, 246, 0.3))"
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl" />
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20"
            />
            <motion.div
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6 border border-blue-200"
            >
              {t('whoWeAre')}
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {t('aboutText')}
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Years</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Satisfied</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;