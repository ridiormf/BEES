import { useApplicationContext } from '../../../providers/ApplicationProvider';
import { useDidMount } from '../../../utils/hooks';

export const useProtected404Control = () => {
  const { closeFullLoading } = useApplicationContext();

  useDidMount(() => {
    closeFullLoading!();
  });
};
