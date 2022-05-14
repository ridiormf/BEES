import { CSS } from '@stitches/react';
import theme from '../../theme';

const Container = theme.styled('div', {
  alignSelf: 'stretch',
  flexGrow: 1,
  backgroundColor: '$secondaryBackground',
  display: 'flex',
  flexDirection: 'column',
});

const Header = theme.styled('header', {
  height: 72,
  backgroundColor: '$primaryBackground',
  color: '$primaryText',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
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
  '&:hover': {
    filter: 'brightness(1.5)',
  },
  '&:active': {
    filter: 'brightness(2)',
  },
});

const HeaderTitles = theme.styled('h2', {
  fontSize: 30,
  fontWeight: 400,
  marginLeft: 16,
  textTransform: 'capitalize',
  '@smDown': {
    fontSize: 20,
  },
});

const ContentContainer = theme.styled('div', {
  padding: 60,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  '@lgDown': {
    padding: 40,
  },
  '@smDown': {
    padding: 20,
  },
});

const backImageCSS: CSS = {};

export const pageTemplateStyles = {
  styled: {
    Container,
    Header,
    BackButton,
    HeaderTitles,
    ContentContainer,
  },
  css: {
    backImage: backImageCSS,
  },
};
