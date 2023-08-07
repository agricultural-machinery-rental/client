import { JSX } from 'react';

type TDataItem = {
  text: string;
  icon: JSX.Element;
};

type TDataArray = TDataItem[];

export type TChosenProps = {
  data: TDataArray;
};
