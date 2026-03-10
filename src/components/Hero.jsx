import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 90;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-50"
    >
      {/* Background Image mit HELLEREM Overlay */}
      <div className="absolute inset-0 z-0">
        <img
         className="w-full h-full object-cover opacity-60"
         alt={t('hero.backgroundAlt')}
          src="https://images.unsplash.com/photo-1696885343801-8ffdd7e25969"
        />

  <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-white/80"></div>
</div>

      {/* Content mit DUNKLER Schrift */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text jetzt in slate-900 (sehr dunkles Blau-Grau) statt reinem Schwarz für mehr Eleganz */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-900 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Primärer Button bleibt Orange (Kontrast ist auf Weiß extrem stark) */}
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-[#FF6600] hover:bg-[#E55A00] text-white px-10 py-7 text-lg font-bold rounded-sm transition-all duration-300 shadow-lg uppercase tracking-wider w-full sm:w-auto"
            >
              {t('hero.buttonPrograms')}
            </Button>
            
            {/* Sekundärer Button jetzt dunkel umrandet */}
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-transparent hover:bg-slate-100 text-slate-900 border-2 border-slate-900 px-10 py-7 text-lg font-bold rounded-sm transition-all duration-300 shadow-sm uppercase tracking-wider w-full sm:w-auto"
            >
              {t('hero.buttonContact')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;