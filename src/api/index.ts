import { ApiResponse, create } from 'apisauce';
import type { Brewery } from '../providers/BreweriesProvider/BreweriesProvider-types';

export interface SuspenseResponse<DataType> {
  read: () => ApiResponse<DataType>;
}

const api = create({
  baseURL: 'https://api.openbrewerydb.org',
  timeout: 10000,
});

const wrapPromise = <DataType>(
  promise: Promise<ApiResponse<DataType>>,
): SuspenseResponse<DataType> => {
  let status = 'pending';
  let result: ApiResponse<DataType>;
  let suspender = promise.then(
    (res) => {
      if (res.ok) {
        status = 'success';
        result = res;
      } else {
        status = 'api_error';
        result = res;
      }
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
      } else if (status === 'api_error') {
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
  await new Promise((res) => setTimeout(res, 2000));
  return promise;
};

export const getBreweriesList = () => {
  return wrapPromise<Array<Brewery>>(
    apiCallWithTimer(api.get<Array<Brewery>>('/breweries', { per_page: 21 })),
  );
};
