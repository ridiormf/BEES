import FullLoading from '../components/FullLoading/FullLoading';
import {
  applicationContext,
  useApplicationProviderControl,
} from './ApplicationProvider-control';
import { ApplicationProviderProps } from './ApplicationProvider-types';

const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {
  const {
    state: { showFullLoading },
    context,
  } = useApplicationProviderControl();
  return (
    <applicationContext.Provider value={context}>
      {children}
      <FullLoading visible={showFullLoading} />
    </applicationContext.Provider>
  );
};

export default ApplicationProvider;
