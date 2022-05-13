import theme from '../../theme';

const Label = theme.styled('label', {
  padding: '4px',
  fontSize: 14,
  lineHeight: '21px',
  fontWeight: 400,
  color: '$primaryText',
  display: 'flex',
  alignItems: 'center',
});

const Input = theme.styled('input', {
  width: '$selectable',
  height: '$selectable',
  borderRadius: '$borderRadius',
  marginRight: 8,
});

export const checkboxStyles = {
  styled: {
    Label,
    Input,
  },
};
