type DataItem = {
  id: number;
  text: string;
  icon: JSX.Element;
};

type DataArray = DataItem[];

export type TChosenProps = {
  data: DataArray;
};
