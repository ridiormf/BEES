import React from 'react';
import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';

export const useBreweriesControl = () => {
  const { closeFullLoading, showNewFeedback } = useApplicationContext();
  const { breweriesResources, breweries, setOrUpdateBreweries } =
    useBreweriesContext();

  const breweriesResponse = breweriesResources?.read();

  React.useEffect(() => {
    if (breweriesResponse?.data && !breweries) {
      setOrUpdateBreweries!(breweriesResponse?.data);
    }
  }, [breweriesResponse?.data, breweries]);

  const onSaveNewBullet = (cardId: string | number, value: string) => {
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

  const onDeleteBrewery = (cardId: string | number) => {
    const newBreweries = breweries?.filter((item) => {
      return item.id !== cardId;
    });

    setOrUpdateBreweries!(newBreweries!);
  };

  React.useEffect(() => {
    if (breweriesResponse) {
      closeFullLoading!();
      if (!breweriesResponse.ok) {
        showNewFeedback!({
          kind: 'error',
          message: 'something went wrong when trying to query the breweries.',
        });
      }
    }
  }, [breweriesResponse]);

  return {
    state: {
      breweries,
    },
    methods: {
      onSaveNewBullet,
      onDeleteBrewery,
    },
  };
};
