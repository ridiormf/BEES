import React from 'react';
import { bulletStyles } from './Bullet-styles';

const {
  styled: { Bullet },
} = bulletStyles;

export interface BulletProps extends React.ComponentProps<typeof Bullet> {
  children: string;
  icon: string;
}
