import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationProvider } from '../providers/ApplicationProvider';
import { BreweriesProvider } from '../providers/BreweriesProvider';

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

interface ProvidersProps {
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApplicationProvider>
      <BreweriesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </BreweriesProvider>
    </ApplicationProvider>
  );
};

export { Wrapper, resizeWindow };
