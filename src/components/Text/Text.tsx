import React from 'react';

import { textStyles } from './Text-styles';
import { TextProps } from './Text-types';

const {
  styled: { Text: StyledText },
} = textStyles;

const Text: React.FC<TextProps> = ({ ...rest }) => {
  return <StyledText {...rest} />;
};

export default Text;
