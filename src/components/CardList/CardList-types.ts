export interface DataItem {
  key: string | number;
  title: string | number;
  firstLineText: string | number;
  firstLineEmptyText: string | number;
  secondLineText: string | number;
  secondLineEmptyText: string | number;
  bullets: Array<any>;
}

export interface CardListProps {
  data: Array<DataItem>;
}
