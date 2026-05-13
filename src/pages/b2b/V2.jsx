import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Users, Target, TrendingUp, Award, Mail } from 'lucide-react';
const f = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const problems = [
  'Hoher Aufwand im CV-Screening',
  'Viele unpassende Bewerbungen',
  'Schwierige kurzfristige Besetzung von Praktikumsstellen',
  'Fehlende Vorauswahl nach Fachbereich',
];

const solutions = [
  'Vorqualifizierte Praktikanten aus relevanten Studienrichtungen',
  'Präzises Matching nach Unternehmensbedarf',
  'Geprüfte Fähigkeiten (Excel, IT-Skills, Analyse, Kommunikation)',
  'Schnelle und effiziente Besetzung offener Praktikumsstellen',
];

const candidateFields = [
  { icon: '💰', label: 'Finance / Business / Management' },
  { icon: '💻', label: 'Informatik / IT / Data / Software' },
  { icon: '🏗️', label: 'Ingenieurwesen (Mechanical, Civil, Electrical)' },
];

const candidateTraits = [
  'Deutsch: B2–C1',
  'Gute Excel-, PowerPoint- und IT-Kenntnisse',
  'Analytische und technische Fähigkeiten',
  'In Deutschland ansässig und kurzfristig verfügbar',
];

const processSteps = [
  { n: 1, label: 'Anforderungen aufnehmen' },
  { n: 2, label: 'Kandidaten aus Talentpool auswählen' },
  { n: 3, label: 'Skills & Sprache prüfen' },
  { n: 4, label: 'Shortlist an Unternehmen übergeben' },
  { n: 5, label: 'Interview — Vertrag direkt mit dem Unternehmen' },
];

const valueProps = [
  { icon: TrendingUp, text: 'Reduzierung des Recruiting-Aufwands' },
  { icon: Target, text: 'Zugang zu passenden Fachrichtungen (IT, Business, Engineering)' },
  { icon: TrendingUp, text: 'Schnellere Besetzung von Praktikumsstellen' },
  { icon: Award, text: 'Höhere Qualität der Bewerber' },
];

const whyUs = [
  'Breiter Talentpool aus mehreren Fachrichtungen',
  'Vorqualifizierte und geprüfte Kandidaten',
  'Schnelles Matching nach Bedarf',
  'Fokus auf Qualität, nicht Masse',
];

export default function V2() {
  return (
    <>
      <Helmet>
        <title>Stuventaa – B2B Praktikantenvermittlung</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-white text-[#003366]">

        {/* Hero */}
        <section className="text-white py-28 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #001a33 100%)', backgroundImage: 'linear-gradient(135deg, #003366 0%, #004080 50%, #001a33 100%), radial-gradient(ellipse 70% 60% at 70% 30%, rgba(255,102,0,0.15) 0%, transparent 60%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(255,102,0,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(0,64,128,0.4) 0%, transparent 50%)' }} />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div {...f} className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6600] text-white text-sm font-bold uppercase tracking-wider mb-8">
                B2B Praktikantenvermittlung
              </span>
              <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                Stuventaa
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Vorgeprüfte Studierende aus IT, Business und Ingenieurwesen für Unternehmen in Deutschland
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
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Wer wir sind</p>
              <h2 className="font-syne text-4xl font-bold text-[#003366]">Über Stuventaa</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...f} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-[#FF6600] mb-4" />
                <p className="text-gray-600 leading-relaxed">
                  Stuventaa ist eine spezialisierte Vermittlungsagentur für internationale Studierende,
                  die ein Pflichtpraktikum in Deutschland absolvieren müssen.
                </p>
              </motion.div>
              <motion.div {...f} transition={{ delay: 0.1, duration: 0.6 }} className="p-8 rounded-2xl bg-[#003366] shadow-sm">
                <Target className="w-8 h-8 text-[#FF6600] mb-4" />
                <p className="text-white/75 leading-relaxed">
                  Wir übernehmen das Matching und die Vorqualifizierung — den Praktikumsvertrag schließt der Kandidat direkt mit Ihrem Unternehmen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem + Lösung */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div {...f}>
                <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Herausforderung</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">Das Problem</h3>
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
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Was wir bieten</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">Unsere Lösung</h3>
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
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Talent Pool</p>
              <h2 className="font-syne text-4xl font-bold text-[#003366]">Kandidatenprofile</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {candidateFields.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <p className="text-[#003366] font-semibold">{c.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-[#003366] mb-5">Eigenschaften unserer Kandidaten</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {candidateTraits.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#FF6600] shrink-0" />
                    {t}
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
              <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Wie es funktioniert</p>
              <h2 className="font-syne text-4xl font-bold">Unser Prozess</h2>
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
                    {step.n}
                  </div>
                  <p className="text-white/75 text-sm">{step.label}</p>
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
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Benefits</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">Mehrwert für Unternehmen</h3>
                <div className="space-y-4">
                  {valueProps.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Icon className="w-5 h-5 text-[#FF6600] mt-0.5 shrink-0" />
                      <span className="text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...f} transition={{ delay: 0.15, duration: 0.6 }}>
                <p className="text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3">Unsere Stärken</p>
                <h3 className="font-syne text-3xl font-bold text-[#003366] mb-8">Warum Stuventaa?</h3>
                <div className="space-y-4">
                  {whyUs.map((w, i) => (
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
              <h2 className="font-syne text-4xl sm:text-5xl font-bold mb-4">Bereit loszulegen?</h2>
              <p className="text-white/55 mb-10 text-lg">Stuventaa · B2B Praktikantenvermittlung</p>
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
