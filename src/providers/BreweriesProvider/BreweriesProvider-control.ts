import React from 'react';
import { getBreweriesList } from '../../api';
import {
  BreweriesContext,
  BreweriesProviderControl,
  Brewery,
} from './BreweriesProvider-types';

export const breweriesContext = React.createContext<BreweriesContext>({});

export const useBreweriesProviderControl = (): BreweriesProviderControl => {
  const [breweries, setBreweries] = React.useState<Array<Brewery>>();

  const getBreweries = async (): Promise<void> => {
    const { ok, data } = await getBreweriesList();
    if (ok) {
      setBreweries(data);
    }
  };

  return {
    context: {
      breweries,
      getBreweries,
    },
  };
};

export const useBreweriesContext = (): BreweriesContext => {
  const context = React.useContext(breweriesContext);
  return context;
};
