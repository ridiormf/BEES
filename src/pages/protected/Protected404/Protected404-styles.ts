import { CSS, keyframes } from '@stitches/react';
import Text from '../../../components/Text';
import theme from '../../../theme';

const Container = theme.styled('div', {
  alignSelf: 'stretch',
  flexGrow: 1,
  backgroundColor: '$primaryBackground',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  textAlign: 'center',
});

const Title = theme.styled(Text, {
  fontSize: 30,
  fontWeight: 700,
  marginBottom: 20,
});

const BackButton = theme.styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  lineHeight: 0,
  border: 'none',
  backgroundColor: 'unset',
  cursor: 'pointer',
  transition: '200ms',
  marginTop: 20,
  '&:hover': {
    filter: 'brightness(1.5)',
  },
  '&:active': {
    filter: 'brightness(2)',
  },
});

const ButtonLabel = theme.styled('h2', {
  fontSize: 30,
  fontWeight: 400,
  marginLeft: 16,
  textTransform: 'capitalize',
});

const imageAnimation = keyframes({
  '0%': { left: 0, bottom: 0, filter: 'drop-shadow(0 0 0 #00000030)' },
  '33%': {
    left: 25,
    bottom: 10,
    transform: 'rotateZ(-20deg)',
    filter: 'drop-shadow(-10px 0 8px #00000030)',
  },
  '66%': {
    left: -25,
    bottom: 25,
    transform: 'rotateZ(20deg)',
    filter: 'drop-shadow(10px 0 8px #00000030)',
  },
  '100%': { left: 0, bottom: 0 },
});

const imageCSS: CSS = {
  maxWidth: '100%',
  position: 'relative',

  animation: `${imageAnimation} 2000ms infinite`,
  '@smDown': {
    width: '40%',
  },
};

const textCSS: CSS = {
  fontSize: 16,
};

export const protected404Styles = {
  styled: {
    Container,
    Title,
    BackButton,
    ButtonLabel,
  },
  css: {
    image: imageCSS,
    text: textCSS,
  },
};
