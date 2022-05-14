import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../components/SuspenseFallback';

const Home = React.lazy(() => import('../pages/protected/Home'));
const Protected404 = React.lazy(
  () => import('../pages/protected/Protected404'),
);

const ProtectedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SuspenseFallback color="secondary" />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Protected404 />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default ProtectedRoutes;
