import React from 'react';
import FullLoading from '../../components/FullLoading/FullLoading';
import {
  applicationContext,
  useApplicationProviderControl,
} from './ApplicationProvider-control';
import { ApplicationProviderProps } from './ApplicationProvider-types';

const RenderChildren: React.FC<ApplicationProviderProps> = ({ children }) => {
  return <>{children}</>;
};

const RenderChildrenWithMemo = React.memo(RenderChildren);

const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {
  const {
    state: { showFullLoading },
    context,
  } = useApplicationProviderControl();
  return (
    <applicationContext.Provider value={context}>
      <RenderChildrenWithMemo>{children}</RenderChildrenWithMemo>
      <FullLoading visible={showFullLoading} />
    </applicationContext.Provider>
  );
};

export default ApplicationProvider;
