import React, { Suspense } from 'react';
import { DataItem } from '../../components/CardList';
import { useBreweriesControl } from './Breweries-control';

const CardList = React.lazy(() => import('../../components/CardList'));

const Breweries = () => {
  const {
    state: { breweries },
  } = useBreweriesControl();
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      {breweries ? (
        <CardList
          data={breweries.map((brewery): DataItem => {
            return {
              key: brewery.id,
              title: brewery.name,
              firstLineText: brewery.street,
              firstLineEmptyText: 'No street registered',
              secondLineText:
                brewery.city && brewery.state && brewery.country
                  ? `${brewery.city}, ${brewery.state} - ${brewery.country}`
                  : '',
              secondLineEmptyText: 'Location not registered or incomplete',
              bullets: [],
            };
          })}
        />
      ) : undefined}
    </Suspense>
  );
};

export default Breweries;
