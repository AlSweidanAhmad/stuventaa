import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhoWeAre = () => {
  const { t } = useTranslation();

  const features = [
    t('whoWeAre.features.0'),
    t('whoWeAre.features.1'),
    t('whoWeAre.features.2'),
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#f8fafc] text-white overflow-hidden scroll-mt-[90px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[450px] md:h-[600px]">
              <img
                className="w-full h-full object-cover"
                alt={t('whoWeAre.imageAlt')}
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              />
              <div className="absolute inset-0 bg-black/15"></div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">
              {t('whoWeAre.kicker')}
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 leading-tight">
              {t('whoWeAre.title')}
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {t('whoWeAre.description')}
            </p>

            <p className="text-white font-medium mb-6 text-xl">
              {t('whoWeAre.subheading')}
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6600] mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed border-t border-gray-300 pt-8 mt-12">
              <p>{t('whoWeAre.footerText')}</p>
              <p className="text-[#FF6600] font-semibold text-lg">
                {t('whoWeAre.highlight')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
