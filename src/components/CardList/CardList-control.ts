import React from 'react';
import { CardListProps } from './CardList-types';

export const useCardListControl = ({
  onSaveNewBullet,
}: Partial<CardListProps>) => {
  const [showBulletField, setShowBulletField] = React.useState<string>();
  const [fieldValue, setFieldValue] = React.useState<string>('');

  const openBulletField = (cardId: string) => {
    setFieldValue('');
    setShowBulletField(cardId);
  };

  const saveNewBullet = () => {
    if (onSaveNewBullet && showBulletField) {
      onSaveNewBullet(showBulletField, fieldValue);
    }
    setFieldValue('');
    setShowBulletField(undefined);
  };

  const onFieldKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') saveNewBullet();
  };

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  return {
    state: {
      showBulletField,
      fieldValue,
    },
    methods: {
      openBulletField,
      onChangeField,
      saveNewBullet,
      onFieldKeyUp,
    },
  };
};
