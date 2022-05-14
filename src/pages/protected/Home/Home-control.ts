import { useApplicationContext } from '../../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../../providers/BreweriesProvider';
import { useConstructor, useDidMount } from '../../../utils/hooks';

export const useHomeControl = () => {
  // const { closeFullLoading } = useApplicationContext();
  const { getBreweries } = useBreweriesContext();

  useDidMount(() => {
    getBreweries!();
  });

  // useDidMount(() => {
  //   closeFullLoading!();
  // });
};
