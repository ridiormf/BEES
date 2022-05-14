import React from 'react';
import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';
import { useDidMount } from '../../utils/hooks';

export const useBreweriesControl = () => {
  const { closeFullLoading } = useApplicationContext();
  const { breweriesResources } = useBreweriesContext();

  const breweriesResponse = breweriesResources?.read();

  React.useEffect(() => {
    if (breweriesResponse) {
      closeFullLoading!();
    }
  }, [breweriesResponse]);

  return {
    state: {
      breweries: breweriesResponse?.data,
    },
  };
};
