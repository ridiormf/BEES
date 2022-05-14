import React from 'react';
import { CardListDataItem } from '../../components/CardList';
import { useBreweriesControl } from './Breweries-control';
import { breweriesStyles } from './Breweries-styles';

import { CardListBulletProps } from '../../components/CardList/CardList-types';

import chartSvg from '../../assets/svg/chart-square-bar.svg';
import pinSvg from '../../assets/svg/location-marker.svg';
import phoneSvg from '../../assets/svg/phone.svg';
import beesLogo from '../../assets/png/bees.png';
import Image from '../../components/Image';

const CardList = React.lazy(() => import('../../components/CardList'));

const {
  styled: { ErrorContainer, ErrorTitle, ImageButton },
  css,
} = breweriesStyles;

const Breweries = () => {
  const {
    state: { breweries },
    methods: { onSaveNewBullet, onDeleteBrewery, tryQueryAgain },
  } = useBreweriesControl();

  return breweries?.map ? (
    <CardList
      bulletsWithAddMore
      onSaveNewBullet={onSaveNewBullet}
      onDeleteCard={onDeleteBrewery}
      data={breweries.map((brewery): CardListDataItem => {
        const bullets: Array<CardListBulletProps> = [];
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
          bullets,
        };
      })}
    />
  ) : (
    <ErrorContainer>
      <ErrorTitle>No brewery to show</ErrorTitle>
      <ImageButton onClick={tryQueryAgain}>
        <Image src={beesLogo} css={css.image} />
      </ImageButton>
      <ErrorTitle>Tap the BEE to query again.</ErrorTitle>
    </ErrorContainer>
  );
};

export default Breweries;
