import React from 'react';

import { inputStyles } from './Input-styles';
import { InputProps } from './Input-types';

const {
  styled: { Input: StyledInput },
} = inputStyles;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
