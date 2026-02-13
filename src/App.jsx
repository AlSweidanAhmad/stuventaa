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

/**
 * Enterprise: Scroll restoration / route-change scroll handling.
 * - Always scroll to top on route change
 * - BUT: keep existing "scrollTo section" behavior via location.state.scrollTo
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If navigation requests a section scroll (Home page sections), App will handle it.
    // We avoid forcing scrollTo(0,0) here in that case to not fight the smooth scroll.
    const hasSectionScroll = Boolean(location.state?.scrollTo);
    if (hasSectionScroll) return;

    window.scrollTo(0, 0);
  }, [location.pathname, location.key]);

  return null;
}

function App() {
  const location = useLocation();

  // ✅ Keep your existing Home section scroll logic (ID scrolling)
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    // Clear the state so refresh/back doesn't re-trigger scroll
    window.history.replaceState({}, document.title);

    // Wait for Home page to render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 90;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

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

      {/* ✅ Always-on: Scroll management */}
      <ScrollToTop />

      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* ✅ Header/Footer outside Routes so they render on EVERY page */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhoWeAre />
                <Services />
                <VisualGallery />
              </>
            }
          />

          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
