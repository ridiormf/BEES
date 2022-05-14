import React from 'react';
import { cardListStyles } from './CardList-styles';
import { CardListProps, DataItem } from './CardList-types';

const {
  styled: { CardsContainer, Card, Title, Text },
} = cardListStyles;

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((item: DataItem) => (
        <Card>
          <Title>{item.title}</Title>
          <Text>
            {item.firstLineText ? item.firstLineText : item.firstLineEmptyText}
          </Text>
          <Text>
            {item.secondLineText
              ? item.secondLineText
              : item.secondLineEmptyText}
          </Text>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default CardList;
