import {
  ApplicationContext,
  useApplicationProviderControl,
} from './ApplicationProvider-control';
import { ApplicationProviderProps } from './ApplicationProvider-types';

const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {
  const control = useApplicationProviderControl();
  return (
    <ApplicationContext.Provider value={control}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
