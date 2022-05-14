import React from 'react';
import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';

export const useBreweriesControl = () => {
  const { closeFullLoading } = useApplicationContext();
  const { breweriesResources, breweries, setOrUpdateBreweries } =
    useBreweriesContext();

  const breweriesResponse = breweriesResources?.read();

  React.useEffect(() => {
    if (breweriesResponse?.data && !breweries) {
      setOrUpdateBreweries!(breweriesResponse?.data);
    }
  }, [breweriesResponse?.data, breweries]);

  const onSaveNewBullet = (cardId: string, value: string) => {
    const brewery = breweries?.find((item) => `${item.id}` === cardId);
    if (brewery && value) {
      if (!brewery.customBullets) {
        brewery.customBullets = [];
      }
      brewery.customBullets.push(value);
      const newBreweries = breweries?.map((item) =>
        item.id === brewery.id ? brewery : item,
      );
      setOrUpdateBreweries!(newBreweries!);
    }
  };

  React.useEffect(() => {
    if (breweriesResponse) {
      closeFullLoading!();
    }
  }, [breweriesResponse]);

  return {
    state: {
      breweries,
    },
    methods: {
      onSaveNewBullet,
    },
  };
};
