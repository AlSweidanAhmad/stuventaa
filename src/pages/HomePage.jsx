import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import VisualGallery from '@/components/VisualGallery';

const ALLOWED_SECTIONS = ['home', 'about', 'services', 'contact'];

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id || !ALLOWED_SECTIONS.includes(id)) return;

    // Clear the state so refresh/back doesn't re-trigger scroll
    window.history.replaceState({}, document.title);

    // Wait for sections to render before scrolling
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

      <Hero />
      <WhoWeAre />
      <Services />
      <VisualGallery />
    </>
  );
};

export default HomePage;
