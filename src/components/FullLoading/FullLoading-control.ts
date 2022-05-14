import { CSS } from '@stitches/react';
import React from 'react';
import { useConstructor, useDidUpdate } from '../../utils/hooks';
import { FULL_LOADING } from './FullLoading-consts';
import { FullLoadingProps } from './FullLoading-types';

export const useFullLoadingControl = ({ visible }: FullLoadingProps) => {
  const initialContainerCSS = useConstructor<CSS>(() => {
    if (!visible)
      return { opacity: 0, zIndex: FULL_LOADING.VALUES.MIN_Z_INDEX };
    return { opacity: 1, zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX };
  });

  const [containerCSS, setContainerCSS] = React.useState(initialContainerCSS);

  useDidUpdate(() => {
    setContainerCSS(visible ? { opacity: 1 } : { opacity: 0 });
  }, [visible]);

  let containerClassName = '';
  if (!containerCSS!.zIndex) {
    containerClassName = visible ? 'show' : 'hide';
  }

  return {
    state: {
      containerCSS,
      containerClassName,
    },
  };
};
