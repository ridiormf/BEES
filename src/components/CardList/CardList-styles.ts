import theme from '../../theme';
import ComponentText from '../Text';

const CardsContainer = theme.styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: 40,
  alignItems: 'center',
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
  paddingHorizontal: 23,
  paddingVertical: 30,
  height: 200,
  width: '100%',
  minWidth: 0,
  backgroundColor: '$secondaryCard',
  borderRadius: '$borderRadius',
  border: '1px solid $primaryText',
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

export const cardListStyles = {
  styled: {
    CardsContainer,
    Card,
    Title,
    Text,
  },
};
