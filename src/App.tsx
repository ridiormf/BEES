import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './navigation/ProtectedRoutes';
import PublicRoutes from './navigation/PublicRoutes';
import {
  ApplicationProvider,
  useApplicationContext,
} from './providers/ApplicationProvider';
import { BreweriesProvider } from './providers/BreweriesProvider';

const App: React.FC = () => {
  return (
    <ApplicationProvider>
      <BreweriesProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </BreweriesProvider>
    </ApplicationProvider>
  );
};

const AppContent: React.FC = () => {
  const { user } = useApplicationContext();
  return user ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default App;
