import { useApplicationContext } from '../../../providers/ApplicationProvider';
import { useDidMount } from '../../../utils/hooks';

export const useHomeControl = () => {
  const { closeFullLoading } = useApplicationContext();
  useDidMount(() => {
    closeFullLoading!();
  });
};
