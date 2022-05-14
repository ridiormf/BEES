import { ApiResponse, create } from 'apisauce';
import type { Brewery } from '../providers/BreweriesProvider/BreweriesProvider-types';

const api = create({
  baseURL: 'https://api.openbrewerydb.org',
  timeout: 10000,
});

export const getBreweriesList = (): Promise<ApiResponse<Array<Brewery>>> => {
  return api.get('/breweries', { per_page: 21 });
};
