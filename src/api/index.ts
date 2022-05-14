import { ApiResponse, create } from 'apisauce';
import type { Brewery } from '../providers/BreweriesProvider/BreweriesProvider-types';

export interface SuspenseResponse<DataType> {
  read: () => ApiResponse<DataType>;
}

const api = create({
  baseURL: 'https://api.openbrewerydb.org',
  timeout: 10000, // 10 seconds
});

const wrapPromise = <DataType>(
  promise: Promise<ApiResponse<DataType>>,
): SuspenseResponse<DataType> => {
  let status = 'pending';
  let result: ApiResponse<DataType>;
  let suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    },
  );

  return {
    read: () => {
      if (status === 'success') {
        return result;
      } else if (status === 'error') {
        throw result;
      }
      throw suspender;
    },
  };
};

const apiCallWithTimer = async <DataType>(
  promise: Promise<ApiResponse<DataType>>,
) => {
  // Only for tests purposes, remove to see correct application functionality.
  await new Promise((res) => setTimeout(res, 2000));
  return promise;
};

export const getBreweriesList = () => {
  return wrapPromise<Array<Brewery>>(
    apiCallWithTimer(api.get<Array<Brewery>>('/breweries', { per_page: 21 })),
  );
};
