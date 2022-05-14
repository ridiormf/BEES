import {
  breweriesContext,
  useBreweriesProviderControl,
} from './BreweriesProvider-control';
import { BreweriesProviderProps } from './BreweriesProvider-types';

const BreweriesProvider: React.FC<BreweriesProviderProps> = ({ children }) => {
  const { context } = useBreweriesProviderControl();
  return (
    <breweriesContext.Provider value={context}>
      {children}
    </breweriesContext.Provider>
  );
};

export default BreweriesProvider;
