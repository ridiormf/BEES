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
  imageAlt,
  onClick,
  ...rest
}) => {
  return (
    <StyledBullet {...rest} onClick={onClick} disabled={!onClick}>
      {icon && imageAlt ? <Image src={icon} alt={imageAlt} /> : undefined}
      <Text>{children}</Text>
    </StyledBullet>
  );
};

export default Bullet;
