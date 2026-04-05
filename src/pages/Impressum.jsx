import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('impressum.seo.title')}</title>
        <meta name="description" content={t('impressum.seo.description')} />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#FF6600] uppercase">
              {t('impressum.header.kicker')}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003366] mt-2">
              {t('impressum.header.title')}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {t('impressum.header.subtitle')}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-10">

            {/* Unternehmen & Inhaber */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.company.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>{t('impressum.sections.company.companyLabel')}</strong> Stuventaa<br />
                <strong>{t('impressum.sections.company.ownerLabel')}</strong> Fawaz Alhamad
              </p>
            </section>

            {/* Adresse */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.address.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Königstraße 95<br />
                23552 Lübeck<br />
                {t('impressum.sections.address.country')}
              </p>
            </section>

            {/* Kontakt */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.contact.emailLabel')}{' '}
                <a
                  href="mailto:info@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  info@stuventaa.de
                </a>
                <br />
                {t('impressum.sections.contact.additionalEmailLabel')}{' '}
                <a
                  href="mailto:praktikum@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  praktikum@stuventaa.de
                </a>
                <br />
                {t('impressum.sections.contact.phoneLabel')}{' '}
                <a
                  href="tel:+4917684482616"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  +49 176 84482616
                </a>
              </p>
            </section>

            {/* Unternehmensform */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.businessType.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.businessType.text')}
              </p>
            </section>

            {/* Tätigkeitsbeschreibung */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.activities.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.activities.intro')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.activities.listIntro')}
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-2">
                {t('impressum.sections.activities.items', { returnObjects: true }).map((item, i) => (
                  <li key={i}>– {item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.activities.outro')}
              </p>
            </section>

            {/* Geschäftsmodell & Haftung (highlighted) */}
            <section className="space-y-3 rounded-xl bg-amber-50 border border-amber-200 p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.businessModel.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                {t('impressum.sections.businessModel.intro')}
              </p>
              {t('impressum.sections.businessModel.paragraphs', { returnObjects: true }).map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
              ))}
            </section>

            {/* Verantwortlich § 55 RStV */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.responsible.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fawaz Alhamad<br />
                Königstraße 95<br />
                23552 Lübeck<br />
                {t('impressum.sections.address.country')}
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.disclaimer.title')}
              </h2>
              {t('impressum.sections.disclaimer.paragraphs', { returnObjects: true }).map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
              ))}
            </section>

            {/* Urheberrecht */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('impressum.sections.copyright.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('impressum.sections.copyright.text')}
              </p>
            </section>

          </div>

          <p className="text-xs text-gray-500 mt-8">
            {t('impressum.lastUpdated')} {new Date().toLocaleDateString(i18n.language)}
          </p>
        </main>
      </div>
    </>
  );
};

export default Impressum;
