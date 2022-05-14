import theme from '../../theme';

export const Text = theme.styled('p', {
  fontSize: 14,
  lineHeight: '21px',
  margin: 0,
  fontWeight: 400,
  color: '$primaryText',
});

export const textStyles = {
  styled: {
    Text,
  },
};
