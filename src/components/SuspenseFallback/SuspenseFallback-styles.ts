import { keyframes } from '@stitches/react';
import theme from '../../theme';

const Container = theme.styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$primaryBackground',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$',
});

const opacityAnimation = keyframes({
  '0%': { opacity: 0.1 },
  '50%': { opacity: 0.3 },
  '100%': { opacity: 0.1 },
});

const LoadingText = theme.styled('h1', {
  animation: `${opacityAnimation} 1000ms infinite`,
});

export const suspenseFallbackStyles = {
  styled: {
    Container,
    LoadingText,
  },
};
