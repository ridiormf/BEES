import React from 'react';
import { buttonStyles } from './Button-styles';

const {
  styled: { Button },
} = buttonStyles;

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  children: string;
}
