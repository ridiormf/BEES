import { CSS } from '@stitches/react';
import theme from '../../../theme';

const Container = theme.styled('div', {
  alignSelf: 'stretch',
  flexGrow: 1,
  backgroundColor: '$secondaryBackground',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
});

export const homeStyles = {
  styled: {
    Container,
  },
};
