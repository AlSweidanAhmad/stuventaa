import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Users, Target, TrendingUp, Award, Mail, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const f = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const candidateIcons = ['💰', '💻', '🏗️'];
const valueIcons = [TrendingUp, Target, Zap, Award];

export default function B2B() {
  const { t } = useTranslation();

  const problems = t('b2b.problem.items', { returnObjects: true });
  const solutions = t('b2b.solution.items', { returnObjects: true });
  const candidateFields = t('b2b.candidates.fields', { returnObjects: true });
  const candidateTraits = t('b2b.candidates.traits', { returnObjects: true });
  const processSteps = t('b2b.process.steps', { returnObjects: true });
  const valueItems = t('b2b.value.items', { returnObjects: true });
  const whyItems = t('b2b.why.items', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('b2b.seo.title')}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-white text-[#003366]">

        {/* Hero */}
        <section className="text-white py-28 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #001a33 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(255,102,0,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(0,64,128,0.4) 0%, transparent 50%)' }} />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div {...f} className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6600] text-white text-sm font-bold uppercase tracking-wider mb-8">
                {t('b2b.hero.badge')}
              </span>
              <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                Stuventaa
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                {t('b2b.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Finance', 'IT', 'Business', 'Engineering'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Über uns */}
        <section className="py-20 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...f} className="text-center mb-12">
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.about.eyebrow')}</p>
              <h2 className="font-syne text-4xl font-bold text-[#003366]">{t('b2b.about.title')}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...f} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-[#FF6600] mb-4" />
                <p className="text-gray-600 leading-relaxed">{t('b2b.about.card1')}</p>
              </motion.div>
              <motion.div {...f} transition={{ delay: 0.1, duration: 0.6 }} className="p-8 rounded-2xl bg-[#003366] shadow-sm">
                <Target className="w-8 h-8 text-[#FF6600] mb-4" />
                <p className="text-white/75 leading-relaxed">{t('b2b.about.card2')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem + Lösung */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div {...f}>
                <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">{t('b2b.problem.eyebrow')}</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">{t('b2b.problem.title')}</h3>
                <div className="space-y-4">
                  {problems.map((p, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...f} transition={{ delay: 0.15, duration: 0.6 }}>
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.solution.eyebrow')}</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">{t('b2b.solution.title')}</h3>
                <div className="space-y-4">
                  {solutions.map((s, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Kandidatenprofile */}
        <section className="py-20 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...f} className="text-center mb-12">
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.candidates.eyebrow')}</p>
              <h2 className="font-syne text-4xl font-bold text-[#003366]">{t('b2b.candidates.title')}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {candidateFields.map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{candidateIcons[i]}</div>
                  <p className="text-[#003366] font-semibold">{label}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-[#003366] mb-5">{t('b2b.candidates.traitsTitle')}</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {candidateTraits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#FF6600] shrink-0" />
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prozess */}
        <section className="py-20 px-6 bg-[#003366] text-white">
          <div className="max-w-5xl mx-auto">
            <motion.div {...f} className="text-center mb-14">
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.process.eyebrow')}</p>
              <h2 className="font-syne text-4xl font-bold">{t('b2b.process.title')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 sm:text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold shrink-0 text-lg">
                    {i + 1}
                  </div>
                  <p className="text-white/75 text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mehrwert + Warum */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div {...f}>
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.value.eyebrow')}</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">{t('b2b.value.title')}</h3>
                <div className="space-y-4">
                  {valueItems.map((text, i) => {
                    const Icon = valueIcons[i];
                    return (
                      <div key={i} className="flex gap-4 items-start">
                        <Icon className="w-5 h-5 text-[#FF6600] mt-0.5 shrink-0" />
                        <span className="text-gray-700">{text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              <motion.div {...f} transition={{ delay: 0.15, duration: 0.6 }}>
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">{t('b2b.why.eyebrow')}</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">{t('b2b.why.title')}</h3>
                <div className="space-y-4">
                  {whyItems.map((w, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Award className="w-5 h-5 text-[#003366] mt-0.5 shrink-0" />
                      <span className="text-gray-700">{w}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#003366] to-[#001a33] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...f}>
              <h2 className="font-syne text-4xl sm:text-5xl font-bold mb-4">{t('b2b.contact.title')}</h2>
              <p className="text-white/55 mb-10 text-lg">{t('b2b.contact.subtitle')}</p>
              <a
                href="mailto:info@stuventaa.de"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#FF6600] hover:bg-[#e55a00] text-white font-bold uppercase tracking-wider rounded-sm transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                info@stuventaa.de
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
