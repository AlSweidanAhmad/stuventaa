import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("privacy.seo.title")}</title>
        <meta name="description" content={t("privacy.seo.description")} />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#FF6600] uppercase">
              {t("privacy.header.kicker")}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003366] mt-2">
              {t("privacy.header.title")}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("privacy.header.intro")}
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-10">
            {/* 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.responsible.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>STUVENTAA</strong>
                <br />
                {t("privacy.sections.responsible.location")}
                <br />
                {t("privacy.sections.responsible.emailLabel")}{" "}
                <a
                  href="mailto:info@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  info@stuventaa.de
                </a>
                <br />
                {t("privacy.sections.responsible.phoneLabel")} +49 176 844826
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.scope.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.scope.text")}
              </p>
            </section>

            {/* 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.processing.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.processing.text")}
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>{t("privacy.sections.processing.channels.email")}</li>
                <li>{t("privacy.sections.processing.channels.phone")}</li>
                <li>{t("privacy.sections.processing.channels.inPerson")}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.processing.note")}
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.purpose.title")}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>{t("privacy.sections.purpose.items.0")}</li>
                <li>{t("privacy.sections.purpose.items.1")}</li>
                <li>{t("privacy.sections.purpose.items.2")}</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.legalBasis.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.legalBasis.text")}
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>{t("privacy.sections.legalBasis.items.0")}</li>
                <li>{t("privacy.sections.legalBasis.items.1")}</li>
              </ul>
            </section>

            {/* 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.storage.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.storage.text")}
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.sharing.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.sharing.text")}
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.hosting.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.hosting.text")}
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.cookies.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.cookies.text")}
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.rights.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.rights.text")}
                <br />
                {t("privacy.sections.rights.contact")}
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("privacy.sections.complaint.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.sections.complaint.text")}
              </p>
            </section>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-500 mt-8">
            {t("privacy.lastUpdated")}{" "}
            {new Date().toLocaleDateString(i18n.language)}
          </p>
        </main>
      </div>
    </>
  );
};

export default Privacy;
