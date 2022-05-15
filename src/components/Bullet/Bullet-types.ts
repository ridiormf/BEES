import React from 'react';
import { bulletStyles } from './Bullet-styles';

const {
  styled: { Bullet },
} = bulletStyles;

export interface BulletProps
  extends Omit<React.ComponentProps<typeof Bullet>, 'onChange'> {
  children: React.ReactNode;
  icon?: string;
  imageAlt?: string;
}
