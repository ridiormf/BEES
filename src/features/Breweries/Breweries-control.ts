import { useBreweriesContext } from '../../providers/BreweriesProvider';
import { useConstructor } from '../../utils/hooks';

export const useBreweriesControl = () => {
  const { getBreweries, breweries } = useBreweriesContext();

  useConstructor(() => {
    getBreweries!();
  });

  return {
    state: {
      breweries,
    },
  };
};
