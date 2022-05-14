import React from 'react';
import ProtectedRoutes from './navigation/ProtectedRoutes';
import PublicRoutes from './navigation/PublicRoutes';
import { useApplicationContext } from './providers/ApplicationProvider';

const App: React.FC = () => {
  const { user } = useApplicationContext();

  return user ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default App;
