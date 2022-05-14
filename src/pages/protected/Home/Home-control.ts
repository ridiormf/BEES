import { useApplicationContext } from '../../../providers';
import { useConstructor } from '../../../utils/hooks';

export const useHomeControl = () => {
  const applicationContext = useApplicationContext();
  useConstructor(() => {
    applicationContext.closeFullLoading!();
  });
  return {};
};
