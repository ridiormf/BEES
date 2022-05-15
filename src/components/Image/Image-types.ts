import React from 'react';
import { imageStyles } from './Image-styles';

const {
  styled: { Image },
} = imageStyles;

export interface ImageProps extends React.ComponentProps<typeof Image> {
  alt: string;
}
