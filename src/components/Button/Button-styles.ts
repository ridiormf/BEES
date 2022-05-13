import theme from '../../theme';

const Button = theme.styled('button', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: '$borderRadius',
  paddingVertical: 8,
  paddingHorizontal: 16,
  color: '$primaryAccentText',
  backgroundColor: '$primaryAccentDisabled',
  fontSize: 16,
  transition: '200ms',
  '&:not([disabled])': {
    cursor: 'pointer',
    backgroundColor: '$primaryAccent',
  },
  '&:not([disabled]):hover': {
    filter: 'brightness(1.05)',
  },
  '&:not([disabled]):active': {
    filter: 'brightness(1.2)',
  },
});

export const buttonStyles = {
  styled: {
    Button,
  },
};
