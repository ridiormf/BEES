import React from 'react';
import Image from '../Image';

import { bulletStyles } from './Bullet-styles';
import { BulletProps } from './Bullet-types';

const {
  styled: { Bullet: StyledBullet, Text },
} = bulletStyles;

const Bullet: React.FC<BulletProps> = ({
  children,
  icon,
  onClick,
  ...rest
}) => {
  return (
    <StyledBullet {...rest} onClick={onClick} disabled={!onClick}>
      <Image src={icon} />
      <Text>{children}</Text>
    </StyledBullet>
  );
};

export default Bullet;
