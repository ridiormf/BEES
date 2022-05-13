import React from 'react';
import { checkboxStyles } from './Checkbox-styles';

const {
  styled: { Input, Label },
} = checkboxStyles;

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof Label>, 'children' | 'htmlFor'> {
  label: string;
  id: string;
  inputProps?: Omit<React.ComponentProps<typeof Input>, 'type' | 'id'>;
}
