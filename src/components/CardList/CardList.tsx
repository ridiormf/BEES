import React from 'react';
import { cardListStyles } from './CardList-styles';
import { CardListProps, CardListDataItem } from './CardList-types';
import { useCardListControl } from './CardList-control';

import Image from '../Image';
import Bullet from '../Bullet';

import garbageSvg from '../../assets/svg/trash.svg';
import addMoreSvg from '../../assets/svg/plus-circle.svg';
import addConfirmSvg from '../../assets/svg/check-circle.svg';

const {
  styled: {
    CardsContainer,
    Card,
    CloseButton,
    Title,
    Text,
    BulletsContainer,
    Input,
  },
  css,
} = cardListStyles;

const CardList: React.FC<CardListProps> = ({
  data,
  bulletsWithAddMore,
  onSaveNewBullet,
  onDeleteCard,
}) => {
  const {
    state: { showBulletField, fieldValue },
    methods: { openBulletField, saveNewBullet, onChangeField, onFieldKeyUp },
  } = useCardListControl({ onSaveNewBullet });

  return (
    <CardsContainer>
      {data.map((item: CardListDataItem, index: number) => (
        <Card key={item.key}>
          {onDeleteCard ? (
            <CloseButton onClick={() => onDeleteCard(item.key, index)}>
              <Image src={garbageSvg} alt="trash icon" />
            </CloseButton>
          ) : null}
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
                <Bullet
                  onKeyUp={(e) => e.preventDefault()}
                  icon={
                    showBulletField === item.key ? addConfirmSvg : addMoreSvg
                  }
                  onClick={
                    showBulletField === item.key
                      ? saveNewBullet
                      : () => openBulletField(item.key)
                  }
                >
                  {showBulletField === item.key ? (
                    <Input
                      autoFocus
                      onKeyUp={onFieldKeyUp}
                      onSubmit={saveNewBullet}
                      onClick={(e) => e.stopPropagation()}
                      value={fieldValue}
                      onChange={onChangeField}
                    />
                  ) : (
                    'add more'
                  )}
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
