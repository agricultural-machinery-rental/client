type TDataItem = {
  id: number;
  text: string;
  icon: JSX.Element;
};

type TDataArray = TDataItem[];

export type TChosenProps = {
  data: TDataArray;
};
