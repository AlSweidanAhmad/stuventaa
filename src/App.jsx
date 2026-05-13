import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import Privacy from '@/pages/Privacy';
import Impressum from '@/pages/Impressum';
import B2B from '@/pages/b2b/V2';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/b2b" element={<B2B />} />
      </Route>
    </Routes>
  );
}

export default App;
