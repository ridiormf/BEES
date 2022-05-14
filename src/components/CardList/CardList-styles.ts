import { CSS } from '@stitches/react';
import theme from '../../theme';
import ComponentText from '../Text';

const CardsContainer = theme.styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: 40,
  alignItems: 'stretch',
  justifyItems: 'center',
  alignSelf: 'center',
  width: '100%',
  overflow: 'hidden',
  maxWidth: 1280,
  '@lgUp': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@xlUp': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@mdDown': {},
  // flexDirection: 'row',
  // flexWrap: 'wrap',
  // alignItems: 'center',
  // justifyContent: 'space-around',
});

const Card = theme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  paddingHorizontal: 23,
  paddingVertical: 30,
  width: '100%',
  minWidth: 0,
  backgroundColor: '$secondaryCard',
  borderRadius: '$borderRadius',
  border: '1px solid $primaryText',
});

const CloseButton = theme.styled('button', {
  padding: 12,
  lineHeight: 0,
  fontSize: 16,
  position: 'absolute',
  top: 0,
  right: 0,
  border: 'none',
  backgroundColor: 'unset',
  cursor: 'pointer',
  transition: '200ms',
  alignSelf: 'flex-end',
  '&:hover': {
    filter: 'brightness(1.5)',
  },
  '&:active': {
    filter: 'brightness(2)',
  },
});

const Title = theme.styled('h3', {
  fontSize: 20,
  lineHeight: '30px',
  margin: 0,
  fontWeight: 700,
  color: '$secondaryTitle',
  marginBottom: 16,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Text = theme.styled(ComponentText, {
  fontSize: 16,
  lineHeight: '26px',
  color: '$secondaryText',
  marginVertical: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const BulletsContainer = theme.styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
});

const Bullet = theme.styled('button', {
  paddingVertical: 0,
  paddingHorizontal: 16,
  lineHeight: 0,
  fontSize: 16,
  minHeight: 38,
  border: 'none',
  borderRadius: 200,
  backgroundColor: '$primaryBackground',
  cursor: 'pointer',
  transition: '200ms',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    filter: 'brightness(1.05)',
  },
  '&:active': {
    filter: 'brightness(1.1)',
  },
});

const TextEmptyCSS: CSS = {
  opacity: 0.5,
  fontStyle: 'italic',
  textTransform: 'lowercase',
};

export const cardListStyles = {
  styled: {
    CardsContainer,
    Card,
    CloseButton,
    Title,
    Text,
    BulletsContainer,
    Bullet,
  },
  css: {
    TextEmpty: TextEmptyCSS,
  },
};
