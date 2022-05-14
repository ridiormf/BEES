import React from 'react';
import { suspenseFallbackStyles } from './SuspenseFallback-styles';
import { SuspenseFallbackProps } from './SuspenseFallback-types';
const {
  styled: { Container, LoadingText },
} = suspenseFallbackStyles;

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  color = 'primary',
}) => {
  return (
    <Container color={color}>
      <LoadingText>Carregando...</LoadingText>
    </Container>
  );
};

export default SuspenseFallback;
