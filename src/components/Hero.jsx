import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import heroImg from '../assets/hero.jpg';

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
      className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-50"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-right sm:object-center"
          alt={t('hero.backgroundAlt')}
          src={heroImg}
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight [text-shadow:0_2px_6px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.6)]">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto font-medium leading-relaxed [text-shadow:0_2px_5px_rgba(0,0,0,0.8),0_0_10px_rgba(0,0,0,0.5)]">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-[#FF6600] hover:bg-[#E55A00] text-white px-7 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-sm transition-all duration-300 shadow-lg uppercase tracking-wider w-full sm:w-auto"
            >
              {t('hero.buttonPrograms')}
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-7 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-sm transition-all duration-300 shadow-sm uppercase tracking-wider w-full sm:w-auto"
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
