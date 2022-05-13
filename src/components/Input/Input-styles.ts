import theme from '../../theme';

const Input = theme.styled('input', {
  width: '100%',
  paddingHorizontal: 12,
  height: '$inputHeight',
  borderRadius: '$borderRadius',
  outline: 'none',
  border: '1px solid $primaryInputBorder',
  fontSize: 16,
  transition: '200ms',
  '&:hover': {
    boxShadow: '$small',
  },
  '&:focus': {
    boxShadow: '$large',
  },
});

export const inputStyles = {
  styled: {
    Input,
  },
};
