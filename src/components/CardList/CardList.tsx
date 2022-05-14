import React from 'react';
import { cardListStyles } from './CardList-styles';
import { CardListProps, DataItem } from './CardList-types';

import Image from '../Image';
import Bullet from '../Bullet';

import garbageSvg from '../../assets/svg/trash.svg';
import addMoreSvg from '../../assets/svg/plus-circle.svg';

const {
  styled: { CardsContainer, Card, CloseButton, Title, Text, BulletsContainer },
  css,
} = cardListStyles;

const CardList: React.FC<CardListProps> = ({ data, bulletsWithAddMore }) => {
  return (
    <CardsContainer>
      {data.map((item: DataItem) => (
        <Card key={item.key}>
          <CloseButton>
            <Image src={garbageSvg} />
          </CloseButton>
          <Title>{item.title}</Title>
          <Text css={item.firstLineText ? undefined : css.TextEmpty}>
            {item.firstLineText ? item.firstLineText : item.firstLineEmptyText}
          </Text>
          <Text css={item.secondLineText ? undefined : css.TextEmpty}>
            {item.secondLineText
              ? item.secondLineText
              : item.secondLineEmptyText}
          </Text>
          {item.bullets ? (
            <BulletsContainer>
              {item.bullets.map((bullet) => (
                <Bullet icon={bullet.icon} key={bullet.children}>
                  {bullet.children}
                </Bullet>
              ))}
              {bulletsWithAddMore ? (
                <Bullet icon={addMoreSvg} onClick={() => {}}>
                  add more
                </Bullet>
              ) : undefined}
            </BulletsContainer>
          ) : null}
        </Card>
      ))}
    </CardsContainer>
  );
};

export default CardList;
