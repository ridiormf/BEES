import React from 'react';

import { usePublic404Control } from './Public404-control';
import { public404Styles } from './Public404-styles';
import { Public404Props } from './Public404-types';

import Text from '../../../components/Text';
import Image from '../../../components/Image';

import BeesImage from '../../../assets/png/bees.png';
import backButtonSvg from '../../../assets/svg/arrow-circle-left.svg';

const {
  styled: { Container, Title, BackButton, ButtonLabel },
  css,
} = public404Styles;

const Public404: React.FC<Public404Props> = () => {
  const {
    methods: { onGoBack },
  } = usePublic404Control();
  return (
    <Container>
      <Image src={BeesImage} css={css.image} />
      <Title>Oops, be careful not to get stung!</Title>

      <Text css={css.text}>
        Return to a safe place by clicking the button below. ;)
      </Text>
      <BackButton onClick={onGoBack}>
        <Image src={backButtonSvg} />
        <ButtonLabel>Go Back</ButtonLabel>
      </BackButton>
    </Container>
  );
};

export default Public404;
