import React from 'react';

import { checkboxStyles } from './Checkbox-styles';
import { CheckboxProps } from './Checkbox-types';

const {
  styled: { Input, Label },
} = checkboxStyles;

const Checkbox: React.FC<CheckboxProps> = ({
  inputProps,
  label,
  id,
  ...rest
}) => {
  return (
    <Label {...rest} htmlFor={id}>
      <Input {...inputProps} id={id} type="checkbox" /> {label}
    </Label>
  );
};

export default Checkbox;
