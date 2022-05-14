import { CSS, keyframes } from '@stitches/react';
import theme from '../../theme';
import { FULL_LOADING } from './FullLoading-consts';

const opacityUp = keyframes({
  '0%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX },
  '100%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX },
});

const opacityDown = keyframes({
  '0%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX },
  '100%': { zIndex: FULL_LOADING.VALUES.MIN_Z_INDEX },
});

const Container = theme.styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$primaryBackground',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  transition: '500ms',
  '&.show': {
    animation: `${opacityUp} 500ms forwards`,
  },
  '&.hide': {
    animation: `${opacityDown} 500ms forwards`,
  },
});

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '60%': { transform: 'scale(1.3)' },
  '100%': { transform: 'scale(1)' },
});

const imageCSS: CSS = {
  width: '10%',
  animation: `${scaleUp} 2000ms infinite`,
  '@lg': {
    width: '20%',
  },

  '@sm': {
    width: '40%',
  },
};

export const fullLoadingStyles = {
  styled: {
    Container,
  },
  css: {
    image: imageCSS,
  },
};
