import { useLanguage } from '../contexts/LanguageContext';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 border-t border-gray-700 px-5 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {language === 'hr'
            ? 'Koristimo funkcionalne kolačiće za pamćenje vaših postavki (npr. odabir jezika). Ne koristimo kolačiće za praćenje ili oglašavanje.'
            : 'We use functional cookies to remember your preferences (e.g. language choice). We do not use tracking or advertising cookies.'}
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={onDecline}
            className="px-5 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:border-gray-400 hover:text-white transition-all duration-200"
          >
            {language === 'hr' ? 'Odbij' : 'Decline'}
          </button>
          <button
            onClick={onAccept}
            className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:brightness-110 transition-all duration-200"
          >
            {language === 'hr' ? 'Prihvati' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
