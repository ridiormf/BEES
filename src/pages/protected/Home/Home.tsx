import React from 'react';

import { useHomeControl } from './Home-control';
import { homeStyles } from './Home-styles';
import { HomeProps } from './Home-types';

const {} = homeStyles;

const Home: React.FC<HomeProps> = () => {
  const {} = useHomeControl();
  return <h1>Home</h1>;
};

export default Home;
