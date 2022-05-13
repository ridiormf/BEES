import React from 'react';

import { imageStyles } from './Image-styles';
import { ImageProps } from './Image-types';

const {
  styled: { Image: StyledImage },
} = imageStyles;

const Image: React.FC<ImageProps> = ({ children, ...rest }) => {
  return <StyledImage {...rest}>{children}</StyledImage>;
};

export default Image;
