import React from 'react';
import { createPortal } from 'react-dom';

import { fullLoadingStyles } from './FullLoading-styles';
import { FullLoadingProps } from './FullLoading-types';

import Image from '../Image';

import BeesImage from '../../assets/png/bees.png';
import { useFullLoadingControl } from './FullLoading-control';
import { getBody } from '../../utils/dom';

const {
  styled: { Container },
  css,
} = fullLoadingStyles;

const FullLoading: React.FC<FullLoadingProps> = ({ visible }) => {
  const {
    state: { containerCSS, containerClassName },
  } = useFullLoadingControl({ visible });
  return createPortal(
    <Container css={containerCSS!} className={containerClassName}>
      <Image src={BeesImage} css={css.image} alt="Bee image" />
    </Container>,
    getBody(),
  );
};

export default FullLoading;
