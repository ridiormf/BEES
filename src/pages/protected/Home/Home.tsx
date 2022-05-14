import React from 'react';
import PageTemplate from '../../../components/PageTemplate/PageTemplate';
import Breweries from '../../../features/Breweries';

import { useHomeControl } from './Home-control';
import { HomeProps } from './Home-types';

const Home: React.FC<HomeProps> = () => {
  useHomeControl();
  return (
    <PageTemplate>
      <Breweries />
    </PageTemplate>
  );
};

export default Home;
