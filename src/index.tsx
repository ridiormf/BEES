import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ApplicationProvider } from './providers/ApplicationProvider';
import { BreweriesProvider } from './providers/BreweriesProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApplicationProvider>
      <BreweriesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BreweriesProvider>
    </ApplicationProvider>
  </React.StrictMode>,
);
