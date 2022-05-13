import React from 'react';

import { buttonStyles } from './Button-styles';
import { ButtonProps } from './Button-types';

const {
  styled: { Button: StyledButton },
} = buttonStyles;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
