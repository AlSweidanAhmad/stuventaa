import React, { useEffect } from 'react';
import { Outlet, useLocation, matchPath } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

/**
 * ScrollToTop: always scroll to top on route change,
 * unless the navigation carries a section scroll target (location.state.scrollTo).
 * In that case, HomePage handles the smooth section scroll itself.
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const hasSectionScroll = Boolean(location.state?.scrollTo);
    if (hasSectionScroll) return;

    window.scrollTo(0, 0);
  }, [location.pathname, location.key]);

  return null;
}

const MainLayout = () => {
  const location = useLocation();
  const isB2B = Boolean(matchPath('/b2b', location.pathname));

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <ScrollToTop />
      <Outlet />
      {!isB2B && <Footer />}
      <Toaster />
    </div>
  );
};

export default MainLayout;
