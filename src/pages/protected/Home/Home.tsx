import React from 'react';

import { useHomeControl } from './Home-control';
import { homeStyles } from './Home-styles';
import { HomeProps } from './Home-types';

const {
  styled: { Container },
} = homeStyles;

const Home: React.FC<HomeProps> = () => {
  const {} = useHomeControl();
  return <Container>Home</Container>;
};

export default Home;
