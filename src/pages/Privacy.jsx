import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('privacy.seo.title')}</title>
        <meta name="description" content={t('privacy.seo.description')} />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#FF6600] uppercase">
              {t('privacy.header.kicker')}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003366] mt-2">
              {t('privacy.header.title')}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t('privacy.header.intro')}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-10">

            {/* 1 – Verantwortlicher / Controller */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.responsible.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Fawaz Alhamad</strong><br />
                Königstraße 95<br />
                23552 Lübeck<br />
                Deutschland<br />
                E-Mail:{' '}
                <a
                  href="mailto:info@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  info@stuventaa.de
                </a>
              </p>
            </section>

            {/* 2 – Erhebung / Collection */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.collection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.collection.text')}
              </p>
            </section>

            {/* 3 – Zweck / Purpose */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.purpose.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.purpose.intro')}
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-1">
                {t('privacy.sections.purpose.items', { returnObjects: true }).map((item, i) => (
                  <li key={i}>– {item}</li>
                ))}
              </ul>
            </section>

            {/* 4 – Rechtsgrundlagen / Legal Basis */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.legalBasis.title')}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {t('privacy.sections.legalBasis.items', { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 5 – Weitergabe / Sharing */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.sharing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.sharing.text')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.sharing.international')}
              </p>
            </section>

            {/* 6 – Speicherdauer / Storage */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.storage.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.storage.text')}
              </p>
            </section>

            {/* 7 – Rechte / Rights */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.rights.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.rights.intro')}
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-1">
                {t('privacy.sections.rights.items', { returnObjects: true }).map((item, i) => (
                  <li key={i}>– {item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.rights.contact')}{' '}
                <a
                  href="mailto:info@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  info@stuventaa.de
                </a>
                .
              </p>
            </section>

            {/* 8 – Hosting */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.hosting.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.hosting.text')}
              </p>
            </section>

            {/* 9 – Cookies */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.cookies.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.cookies.text')}
              </p>
            </section>

            {/* 10 – SSL */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.ssl.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.ssl.text')}
              </p>
            </section>

            {/* 11 – Kontaktaufnahme / Contact */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.contactSection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.contactSection.text')}
              </p>
            </section>

            {/* 12 – Rolle / Role (highlighted) */}
            <section className="space-y-3 rounded-xl bg-amber-50 border border-amber-200 p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.partnerDisclaimer.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                {t('privacy.sections.partnerDisclaimer.intro')}
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-2">
                {t('privacy.sections.partnerDisclaimer.items', { returnObjects: true }).map((item, i) => (
                  <li key={i}>– {item}</li>
                ))}
              </ul>
            </section>

            {/* 13 – Beschwerderecht / Complaint */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('privacy.sections.complaint.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.complaint.text')}
              </p>
            </section>

          </div>

          <p className="text-xs text-gray-500 mt-8">
            {t('privacy.lastUpdated')} {new Date().toLocaleDateString(i18n.language)}
          </p>
        </main>
      </div>
    </>
  );
};

export default Privacy;
