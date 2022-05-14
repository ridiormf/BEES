import { BulletProps } from '../Bullet/Bullet-types';

export interface CardListBulletProps extends BulletProps {
  children: string;
}

export interface CardListDataItem {
  key: string | number;
  title: string | number;
  firstLineText: string | number;
  firstLineEmptyText: string | number;
  secondLineText: string | number;
  secondLineEmptyText: string | number;
  bullets?: Array<CardListBulletProps>;
}

export interface CardListProps {
  data: Array<CardListDataItem>;
  bulletsWithAddMore?: boolean;
  onSaveNewBullet?: (cardId: string | number, value: string) => void;
  onDeleteCard?: (cardId: string | number, index?: number) => void;
}
