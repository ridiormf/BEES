import React from 'react';
import { DataItem } from '../../components/CardList';
import { useBreweriesControl } from './Breweries-control';

import chartSvg from '../../assets/svg/chart-square-bar.svg';
import pinSvg from '../../assets/svg/location-marker.svg';
import phoneSvg from '../../assets/svg/phone.svg';
import { BulletProps } from '../../components/Bullet/Bullet-types';

const CardList = React.lazy(() => import('../../components/CardList'));

const Breweries = () => {
  const {
    state: { breweries },
  } = useBreweriesControl();

  return (
    <CardList
      bulletsWithAddMore
      data={
        breweries
          ? breweries.map((brewery): DataItem => {
              const bullets: Array<BulletProps> = [];
              if (brewery.brewery_type) {
                bullets.push({
                  icon: chartSvg,
                  children: brewery.brewery_type,
                });
              }
              if (brewery.postal_code) {
                bullets.push({
                  icon: pinSvg,
                  children: brewery.postal_code,
                });
              }
              if (brewery.phone) {
                bullets.push({
                  icon: phoneSvg,
                  children: brewery.phone,
                });
              }
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
                onClose: () => {},
                bullets,
              };
            })
          : []
      }
    />
  );
};

export default Breweries;
