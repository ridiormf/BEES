import { useBreweriesContext } from '../../../providers/BreweriesProvider';
import { useDidMount } from '../../../utils/hooks';

export const useHomeControl = () => {
  const { getBreweries } = useBreweriesContext();

  useDidMount(() => {
    getBreweries!();
  });
};
