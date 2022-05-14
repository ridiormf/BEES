import React from 'react';
import { suspenseFallbackStyles } from './SuspenseFallback-styles';

const {
  styled: { Container },
} = suspenseFallbackStyles;

export interface SuspenseFallbackProps
  extends React.ComponentProps<typeof Container> {}
