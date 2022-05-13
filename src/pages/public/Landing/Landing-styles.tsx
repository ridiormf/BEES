import { CSS } from '@stitches/react';
import theme from '../../../theme';

const Container = theme.styled('div', {
  alignSelf: 'stretch',
  flexGrow: 1,
  backgroundColor: '$primaryBackground',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
});

const FormContainer = theme.styled('form', {
  width: 300,
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  zIndex: 1,
});

const textFieldCSS: CSS = {
  marginTop: 6,
  marginBottom: 16,
  textTransform: 'capitalize',
};

const checkboxCSS: CSS = {
  alignSelf: 'center',
};

const buttonCSS: CSS = {
  marginTop: 22,
  alignSelf: 'center',
};

const imageCSS: CSS = {
  position: 'absolute',
  left: 28,
  bottom: 16,
  maxWidth: '100%',
  '@sm': {
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
  },
};

export const landingStyles = {
  styled: {
    Container,
    FormContainer,
  },
  css: {
    textField: textFieldCSS,
    checkbox: checkboxCSS,
    button: buttonCSS,
    image: imageCSS,
  },
};
