import React from 'react';
import {
  breweriesContext,
  useBreweriesProviderControl,
} from './BreweriesProvider-control';
import { BreweriesProviderProps } from './BreweriesProvider-types';

const RenderChildren: React.FC<BreweriesProviderProps> = ({ children }) => {
  return <>{children}</>;
};

const RenderChildrenWithMemo = React.memo(RenderChildren);

const BreweriesProvider: React.FC<BreweriesProviderProps> = ({ children }) => {
  const { context } = useBreweriesProviderControl();
  return (
    <breweriesContext.Provider value={context}>
      <RenderChildrenWithMemo>{children}</RenderChildrenWithMemo>
    </breweriesContext.Provider>
  );
};

export default BreweriesProvider;
