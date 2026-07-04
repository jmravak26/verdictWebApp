import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Calculator, FileSearch, Wrench, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceDetail {
  heading: string;
  intro: string;
  bullets: string[];
  outro: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  detail: ServiceDetail;
  color: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
}

const serviceDetails: Record<'hr' | 'en', ServiceDetail[]> = {
  hr: [
    {
      heading: 'Procjena vrijednosti vozila',
      intro: 'Procjene vrijednosti vozila radimo za potrebe prijenosa vlasništva, za potrebe porezne uprave, u svrhu saznanja stvarne vrijednosti vozila radi prodaje, za potrebe leasinga i slično.',
      bullets: [
        'Izrada foto-elaborata i obrada postojećeg stanja vozila',
        'Arhiviranje dokumentacije vozila',
        'Određivanje poštene tržišne vrijednosti po Europskim standardima',
        'Procjena za potrebe prijenosa vlasništva i porezne uprave',
        'Procjena za potrebe leasinga i prodaje',
        'Elaborati prihvaćeni od strane osiguravajućih kuća i sudova',
      ],
      outro: 'Vrijednost štete na vozilu moguće je utvrditi korištenjem specijaliziranog softvera koji sadrži cijene dijelova vozila i vrijednost radnog sata, čime se dolazi do precizne kalkulacije.',
    },
    {
      heading: 'Procjena razlike vrijednosti vozila',
      intro: 'Nakon prometne nesreće vozilo u najvećem broju slučajeva pretrpi manje ili veće štete. Čak i nakon popravka, vozilo gubi dio svoje tržišne vrijednosti.',
      bullets: [
        'Izrada elaborata za određivanje tržišne vrijednosti nakon izvanrednog događaja',
        'Kvantifikacija gubitka vrijednosti nakon kvara ili prometne nesreće',
        'Pomoć pri prijavi štete osiguratelju',
        'Savjeti o izboru radionice i nabavci dijelova',
        'Ostvarivanje prava na naknadu štete temeljem osiguranja',
      ],
      outro: 'Sa željom da Vam pomognemo u takvoj situaciji, pružamo stručne savjete i elaborate koji Vam omogućuju ostvarivanje punog prava na naknadu štete.',
    },
    {
      heading: 'Procjena štete na vozilu',
      intro: 'Uslugu procjene štete na vozilu vršimo uglavnom za građane i za potrebe sudova u RH. Vrijednost štete moguće je utvrditi na više načina.',
      bullets: [
        'Procjena prema ponudi ovlaštenog servisa',
        'Izračun korištenjem specijaliziranog softvera za procjenu štete',
        'Procjena za sudske sporove — neovisna i nepristrana',
        'Uvažavanje računa ovlaštenog i neovlaštenog servisa',
        'Procjena bez PDV-a kada isti nije plaćen',
        'Elaborati prihvaćeni od strane sudova i odvjetništva',
      ],
      outro: 'U slučaju sudskog spora sud obično angažira sudskog vještaka koji će neovisno i nepristrano procijeniti visinu štete na vozilu. Svaki slučaj je jedinstven i pristupamo mu individualno.',
    },
    {
      heading: 'Procjena štete na radnim strojevima (Lom stroja)',
      intro: 'Osiguranje strojeva od loma pruža zaštitu u slučaju uništenja ili oštećenja strojeva, strojnih, električnih uređaja i instalacija, do kojih može doći kod normalnih te za stroj propisanih opterećenja i radnih operacija.',
      bullets: [
        'Mehanički lom',
        'Greške u konstrukciji, materijalu ili izradi',
        'Djelovanje električne energije (indirektni udar groma, kratki spoj)',
        'Zatajenje sigurnosnih ili regulacijskih uređaja',
        'Pad i prevrtanje',
        'Procjena troškova popravka i ostatne vrijednosti za potrebe osiguranja i leasinga',
      ],
      outro: 'Osiguranje strojeva od loma isključuje štete koje su posljedica požara, trajnog djelovanja kemijskih, termičkih i ostalih mehaničkih utjecaja, kao i štete nastale tijekom montaže ili pokusnog rada. Svaki slučaj procjenjujemo individualno i stručno.',
    },
    {
      heading: 'Procjena vrijednosti nekretnina',
      intro: 'Procjena vrijednosti nekretnina u Republici Hrvatskoj regulirana je Zakonom o procjeni vrijednosti nekretnina (2015.). Procjenu vrše ovlaštene osobe — stalni sudski vještaci i stalni sudski procjenitelji.',
      bullets: [
        'Tržišna vrijednost nekretnina procjenjuje se pomoću tri metode i sedam postupaka',
        'Korištenje sustava eNekretnine za pristup podacima o transakcijama i cijenama',
        'Procjena stanova, kuća, poslovnih prostora, građevinskog i poljoprivrednog zemljišta',
        'Primjena metode višestruke regresijske analize za masovnu procjenu',
        'Modeli temeljeni na troškovnom, poredenom i prihodovnom pristupu',
        'Elaborati prihvaćeni u sudskim, upravnim i osiguravajućim postupcima',
      ],
      outro: 'Naši stručni elaborati izrađeni su sukladno važećim propisima i metodologiji, te su prihvaćeni od strane sudova, osiguravajućih kuća i nadležnih tijela, omogućujući Vam ostvarivanje punih prava u svim postupcima vezanim uz nekretnine.',
    },
  ],
  en: [
    {
      heading: 'Vehicle Valuation',
      intro: 'We perform vehicle valuations for ownership transfers, tax authorities, sale purposes, leasing and more.',
      bullets: [
        'Detailed photo documentation and vehicle condition assessment',
        'Archiving of vehicle documentation',
        'Fair market value determination per European standards',
        'Valuation for ownership transfer and tax purposes',
        'Valuation for leasing and sale',
        'Reports accepted by insurance companies and courts',
      ],
      outro: 'Vehicle damage value can be determined using specialised software containing part prices and labour rates, resulting in a precise damage calculation.',
    },
    {
      heading: 'Value Difference Assessment',
      intro: 'After a traffic accident, a vehicle sustains damage of varying severity. Even after repair, the vehicle loses part of its market value.',
      bullets: [
        'Reports determining market value after extraordinary events',
        'Quantification of value loss after breakdown or accident',
        'Assistance with insurance damage claims',
        'Advice on workshop selection and parts procurement',
        'Support in claiming full compensation under insurance',
      ],
      outro: 'We provide expert reports and advice to help you exercise your full right to compensation in such situations.',
    },
    {
      heading: 'Vehicle Damage Assessment',
      intro: 'We perform vehicle damage assessments primarily for private individuals and courts in Croatia. Damage value can be determined in several ways.',
      bullets: [
        'Assessment based on authorised service centre quote',
        'Calculation using specialised damage assessment software',
        'Independent and impartial assessment for court proceedings',
        'Consideration of authorised and non-authorised service invoices',
        'Assessment excluding VAT when not paid',
        'Reports accepted by courts and legal offices',
      ],
      outro: 'In court disputes, a court expert is typically engaged to independently assess the damage value. Each case is unique and we approach it individually.',
    },
    {
      heading: 'Traffic Accident Expert Analysis',
      intro: 'Traffic accident expert analysis involves determining the manner and course of the accident using all relevant facts.',
      bullets: [
        'Determining vehicle speeds',
        'Time-space analysis of the accident',
        'Analysis of vehicle distances',
        'Determining the point of contact',
        'Assessment of collision avoidance possibility',
        'Reports for courts, prosecution or private parties',
      ],
      outro: 'Parties engage an expert when they believe their rights have been violated or when they consider themselves not at fault. Comprehensive documentation (police report, scene sketch, photo documentation) is required for a quality analysis.',
    },
    {
      heading: 'Property Valuation',
      intro: 'Property valuation in Croatia is regulated by the Property Valuation Act (2015). Valuations are performed by authorised persons — permanent court experts and permanent court valuers.',
      bullets: [
        'Market value assessed using three methods and seven procedures',
        'Use of the eNekretnine system for transaction and price data',
        'Valuation of apartments, houses, commercial premises, construction and agricultural land',
        'Application of multiple regression analysis for mass valuation',
        'Models based on cost, comparative and income approaches',
        'Reports accepted in court, administrative and insurance proceedings',
      ],
      outro: 'Our expert reports are prepared in accordance with applicable regulations and methodology, and are accepted by courts, insurance companies and competent authorities, enabling you to exercise your full rights in all property-related proceedings.',
    },
  ],
};

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  const services: Service[] = [
    {
      icon: Car,
      title: t('service1Title'),
      description: t('service1Text'),
      detail: serviceDetails[language][0],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      accentColor: 'bg-blue-500',
    },
    {
      icon: Calculator,
      title: t('service2Title'),
      description: t('service2Text'),
      detail: serviceDetails[language][1],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      accentColor: 'bg-purple-500',
    },
    {
      icon: FileSearch,
      title: t('service3Title'),
      description: t('service3Text'),
      detail: serviceDetails[language][2],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      accentColor: 'bg-green-500',
    },
    {
      icon: Wrench,
      title: t('service4Title'),
      description: t('service4Text'),
      detail: serviceDetails[language][3],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      accentColor: 'bg-orange-500',
    },
    {
      icon: Home,
      title: t('service5Title'),
      description: t('service5Text'),
      detail: serviceDetails[language][4],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      borderColor: 'border-red-200',
      accentColor: 'bg-red-500',
    },
  ];

  const selected = selectedIndex !== null ? services[selectedIndex] : null;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} hover:border-opacity-50 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors flex-1">
                  {service.description}
                </p>

                <div
                  className={`mt-6 w-full py-2.5 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${service.color} md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:shadow-lg text-center`}
                >
                  {t('learnMoreBtn')}
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg md:max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${selected.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                <selected.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selected.detail.heading}</h3>
              <div className={`w-12 h-1 ${selected.accentColor} rounded-full mb-5`} />

              <p className="text-gray-600 leading-relaxed mb-5">{selected.detail.intro}</p>

              <ul className="space-y-2 mb-5">
                {selected.detail.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className={`mt-1.5 w-2 h-2 rounded-full ${selected.accentColor} shrink-0`} />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-5">{selected.detail.outro}</p>

              <button
                onClick={() => setSelectedIndex(null)}
                className={`mt-6 w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r ${selected.color} hover:shadow-lg transition-all duration-300`}
              >
                {language === 'hr' ? 'Zatvori' : 'Close'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;