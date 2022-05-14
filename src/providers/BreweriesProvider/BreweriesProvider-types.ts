import React from 'react';
import { SuspenseResponse } from '../../api';

export interface Brewery {
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
}

export interface BreweriesContext {
  breweriesResources?: SuspenseResponse<Array<Brewery>>;
  getBreweries?: () => Promise<void>;
  clearBreweries?: () => void;
}

export interface BreweriesProviderControl {
  context: BreweriesContext;
}

export interface BreweriesProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
