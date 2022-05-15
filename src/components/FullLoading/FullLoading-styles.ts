import { CSS, keyframes } from '@stitches/react';
import theme from '../../theme';
import { FULL_LOADING } from './FullLoading-consts';

const show = keyframes({
  '0%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX, display: 'flex' },
  '100%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX, display: 'flex' },
});

const hide = keyframes({
  '0%': { zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX, display: 'flex' },
  '100%': { zIndex: FULL_LOADING.VALUES.MIN_Z_INDEX, display: 'none' },
});

const Container = theme.styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$primaryBackground',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  transition: '500ms',
  '&.show': {
    animation: `${show} 500ms forwards`,
  },
  '&.hide': {
    animation: `${hide} 500ms forwards`,
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
  '@lgDown': {
    width: '20%',
  },

  '@smDown': {
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
