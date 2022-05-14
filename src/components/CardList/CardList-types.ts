import { BulletProps } from '../Bullet/Bullet-types';

export interface DataItem {
  key: string | number;
  title: string | number;
  firstLineText: string | number;
  firstLineEmptyText: string | number;
  secondLineText: string | number;
  secondLineEmptyText: string | number;
  onClose?: (item: DataItem, index: number) => void;
  bullets?: Array<BulletProps>;
}

export interface CardListProps {
  data: Array<DataItem>;
  bulletsWithAddMore?: boolean;
}
