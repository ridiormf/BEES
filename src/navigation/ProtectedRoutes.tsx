import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../components/SuspenseFallback';
import { BreweriesProvider } from '../providers/BreweriesProvider';

const Home = React.lazy(() => import('../pages/protected/Home'));

const ProtectedRoutes: React.FC = () => {
  return (
    <BreweriesProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BreweriesProvider>
  );
};

export default ProtectedRoutes;
