import theme from '../../theme';
import ComponentText from '../Text';

const Bullet = theme.styled('button', {
  paddingVertical: 0,
  paddingHorizontal: 16,
  lineHeight: 0,
  fontSize: 16,
  minHeight: 38,
  border: 'none',
  borderRadius: 200,
  backgroundColor: '$primaryBackground',
  transition: '200ms',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '&:not([disabled]):hover': {
    cursor: 'pointer',
    filter: 'brightness(1.05)',
  },
  '&:not([disabled]):active': {
    filter: 'brightness(1.1)',
  },
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

export const bulletStyles = {
  styled: {
    Bullet,
    Text,
  },
};
