import React from 'react';
import { getBreweriesList, SuspenseResponse } from '../../api';
import {
  BreweriesContext,
  BreweriesProviderControl,
  Brewery,
} from './BreweriesProvider-types';

export const breweriesContext = React.createContext<BreweriesContext>({});

export const useBreweriesProviderControl = (): BreweriesProviderControl => {
  const [breweriesResources, setBreweriesResources] = React.useState<
    SuspenseResponse<Array<Brewery>> | undefined
  >();

  const [breweries, setBreweries] = React.useState<Array<Brewery>>();

  const setOrUpdateBreweries = (breweryList: Array<Brewery>) => {
    setBreweries(breweryList);
  };
  // const _breweries = breweriesResources?.read().data;
  // if (_breweries?.length && _breweries !== breweries) {
  //   setBreweries(_breweries);
  // }

  const getBreweries = async (): Promise<void> => {
    console.log('entrou aqui');
    setBreweriesResources(getBreweriesList());
  };

  const clearBreweries = async (): Promise<void> => {
    setBreweries(undefined);
    setBreweriesResources(undefined);
  };

  return {
    context: {
      breweries,
      setOrUpdateBreweries,
      breweriesResources,
      getBreweries,
      clearBreweries,
    },
  };
};

export const useBreweriesContext = (): BreweriesContext => {
  const context = React.useContext(breweriesContext);
  return context;
};
