import React from 'react';
import { CardListDataItem } from '../../components/CardList/CardList-types';
import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';
import { Brewery } from '../../providers/BreweriesProvider/BreweriesProvider-types';

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
      console.log(item.id, cardId);

      return item.id !== cardId;
    });

    setOrUpdateBreweries!(newBreweries!);
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
      onDeleteBrewery,
    },
  };
};
