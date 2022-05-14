import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../components/SuspenseFallback';

const Landing = React.lazy(() => import('../pages/public/Landing'));

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Landing />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PublicRoutes;
