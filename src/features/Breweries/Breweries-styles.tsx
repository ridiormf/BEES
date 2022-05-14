import { CSS } from '@stitches/react';
import theme from '../../theme';

const ErrorContainer = theme.styled('div', {
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'stretch',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const ErrorTitle = theme.styled('h2', {
  fontSize: 30,
  fontWeight: 400,
});

const ImageButton = theme.styled('button', {
  padding: 0,
  lineHeight: 0,
  border: 'none',
  backgroundColor: 'unset',
});

const imageCSS: CSS = {
  filter: 'grayscale(50%)',
  opacity: 0.7,
  transition: '200ms',
  cursor: 'pointer',
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
};

export const breweriesStyles = {
  styled: {
    ErrorContainer,
    ErrorTitle,
    ImageButton,
  },
  css: {
    image: imageCSS,
  },
};
