import { suspenseFallbackStyles } from './SuspenseFallback-styles';
const {
  styled: { Container, LoadingText },
} = suspenseFallbackStyles;

const SuspenseFallback = () => {
  return (
    <Container>
      <LoadingText>Carregando...</LoadingText>
    </Container>
  );
};

export default SuspenseFallback;
