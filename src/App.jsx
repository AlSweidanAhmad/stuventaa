import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import VisualGallery from '@/components/VisualGallery';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import Privacy from '@/pages/Privacy';

function App() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    // امسح state حتى ما يعيد اسكرول عند refresh
    window.history.replaceState({}, document.title);

    // انتظر رندر الصفحة الرئيسية
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 90;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 150);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>STUVENTAA - Study, Travel, Work & Internship in Germany</title>
        <meta
          name="description"
          content="At Stuventaa, we empower students to explore, learn, and grow through educational programs, internships, and travel adventures in Germany."
        />
      </Helmet>

      <div className="min-h-screen bg-white font-sans text-gray-800">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <WhoWeAre />
                <Services />
                <VisualGallery />
                <Footer />
              </>
            }
          />

          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
