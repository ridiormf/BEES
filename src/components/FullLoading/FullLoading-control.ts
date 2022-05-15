import { CSS } from '@stitches/react';
import React from 'react';
import { getBody } from '../../utils/dom';
import { useConstructor, useDidUpdate } from '../../utils/hooks';
import { FULL_LOADING } from './FullLoading-consts';
import { FullLoadingProps } from './FullLoading-types';

export const useFullLoadingControl = ({ visible }: FullLoadingProps) => {
  const initialContainerCSS = useConstructor<CSS>(() => {
    if (!visible) {
      return {
        opacity: 0,
        zIndex: FULL_LOADING.VALUES.MIN_Z_INDEX,
        display: 'none',
      };
    }
    getBody().style.overflowY = 'hidden';
    return {
      opacity: 1,
      zIndex: FULL_LOADING.VALUES.MAX_Z_INDEX,
      display: 'flex',
    };
  });

  const [containerCSS, setContainerCSS] = React.useState(initialContainerCSS);

  useDidUpdate(() => {
    setContainerCSS(visible ? { opacity: 1 } : { opacity: 0 });
    if (!visible) {
      getBody().style.overflowY = 'auto';
    } else {
      getBody().style.overflowY = 'hidden';
    }
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
