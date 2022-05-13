import React from 'react';
import { textStyles } from './Text-styles';

const {
  styled: { Text },
} = textStyles;

export type TextProps = React.ComponentProps<typeof Text>;
