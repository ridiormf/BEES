import React from 'react';

import { useProtected404Control } from './Protected404-control';
import { protected404Styles } from './Protected404-styles';
import { Protected404Props } from './Protected404-types';

import Text from '../../../components/Text';
import Image from '../../../components/Image';

import BeesImage from '../../../assets/png/bees.png';
import PageTemplate from '../../../components/PageTemplate/PageTemplate';

const {
  styled: { Title, BackButton, ButtonLabel },
  css,
} = protected404Styles;

const Protected404: React.FC<Protected404Props> = () => {
  useProtected404Control();
  return (
    <PageTemplate
      css={{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={BeesImage} css={css.image} />
      <Title>Oops, be careful not to get stung!</Title>

      <Text css={css.text}>
        Return to a safe place by clicking the button on header. ;)
      </Text>
    </PageTemplate>
  );
};

export default Protected404;
