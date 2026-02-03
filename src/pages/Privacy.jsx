import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | STUVENTAA</title>
        <meta
          name="description"
          content="Privacy Policy of STUVENTAA in accordance with the General Data Protection Regulation (GDPR)."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#FF6600] uppercase">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003366] mt-2">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We take the protection of your personal data very seriously. This
              privacy policy explains how we collect, process, and protect your
              personal data in accordance with the General Data Protection
              Regulation (GDPR).
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-10">
            {/* 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                1. Responsible Entity
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>STUVENTAA</strong>
                <br />
                Germany, Lübeck
                <br />
                Email:{" "}
                <a
                  href="mailto:info@stuventaa.de"
                  className="text-[#FF6600] font-semibold hover:underline"
                >
                  info@stuventaa.de
                </a>
                <br />
                Phone: +49 176 844826
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                2. Scope of This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This privacy policy applies to the website operated by
                STUVENTAA and all services offered through this website.
              </p>
            </section>

            {/* 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                3. Personal Data Processing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We process personal data only when you voluntarily contact us
                via:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Email</li>
                <li>Phone</li>
                <li>Personal contact (in person)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The processed data may include your email address, phone number,
                and the content of your inquiry.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                4. Purpose of Processing
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Responding to inquiries</li>
                <li>Providing information about our services</li>
                <li>Direct communication with interested users</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                5. Legal Basis
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal data is processed on the following legal bases:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Art. 6(1)(b) GDPR – processing necessary for pre-contractual
                  measures or contractual communication
                </li>
                <li>
                  Art. 6(1)(f) GDPR – legitimate interest in responding to
                  inquiries and maintaining communication
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                6. Data Storage and Deletion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal data is stored only for as long as necessary to process
                your request or as required by legal retention obligations.
                After that, the data is deleted.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                7. Data Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your personal data will not be shared with third parties unless
                required by law.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                8. Hosting and Server Logs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When accessing this website, technical data (such as IP address,
                date and time of access, browser type, and operating system) may
                be processed by the hosting provider for security and technical
                reasons. This processing is based on Art. 6(1)(f) GDPR.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                9. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This website does not use cookies for tracking, analytics, or
                marketing purposes.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                10. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, rectify, delete, or restrict the
                processing of your personal data, as well as the right to data
                portability and to object to processing (Art. 15–21 GDPR).
                <br />
                To exercise your rights, please contact us via email.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                11. Right to Lodge a Complaint
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to lodge a complaint with a data protection
                supervisory authority if you believe that the processing of your
                personal data violates the GDPR.
              </p>
            </section>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
