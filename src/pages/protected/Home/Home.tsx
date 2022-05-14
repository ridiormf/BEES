import React, { Suspense } from 'react';
import PageTemplate from '../../../components/PageTemplate/PageTemplate';
import SuspenseFallback from '../../../components/SuspenseFallback';

import { useHomeControl } from './Home-control';
import { HomeProps } from './Home-types';

const Breweries = React.lazy(() => import('../../../features/Breweries'));

const Home: React.FC<HomeProps> = () => {
  useHomeControl();
  return (
    <PageTemplate>
      <Suspense fallback={<SuspenseFallback color="secondary" />}>
        <Breweries />
      </Suspense>
    </PageTemplate>
  );
};

export default Home;
