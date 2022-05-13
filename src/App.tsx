import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/public/Landing';
import { Home } from './pages/protected/Home';
import { useApplicationContext } from './providers';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

const ProtectedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

const App: React.FC = () => {
  const {
    state: { user },
  } = useApplicationContext();

  console.log({ user });
  return user ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default App;
