import React from 'react';
import { DataItem } from '../../components/CardList';
import { useBreweriesControl } from './Breweries-control';

import chartSvg from '../../assets/svg/chart-square-bar.svg';
import pinSvg from '../../assets/svg/location-marker.svg';
import phoneSvg from '../../assets/svg/phone.svg';
import { BulletProps } from '../../components/Bullet/Bullet-types';
import { CardBulletProps } from '../../components/CardList/CardList-types';

const CardList = React.lazy(() => import('../../components/CardList'));

const Breweries = () => {
  const {
    state: { breweries },
    methods: { onSaveNewBullet },
  } = useBreweriesControl();

  return (
    <CardList
      bulletsWithAddMore
      onSaveNewBullet={onSaveNewBullet}
      data={
        breweries
          ? breweries.map((brewery): DataItem => {
              const bullets: Array<CardBulletProps> = [];
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
              if (brewery.customBullets) {
                bullets.push(
                  ...brewery.customBullets.map((value) => ({
                    children: value,
                  })),
                );
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
