export type ElementType = {
  id: number | undefined;
  title: string;
  desc: string;
};
export type DataType = {
  name: string;
  id: number;
  elements: ElementType[];
};

export const data: DataType[] = [
  {
    name: "Yapılacaklar",
    id: 1,
    elements: [],
  },
  {
    name: "Devam Ediyor",
    id: 2,
    elements: [],
  },
  {
    name: "Tamamlandı",
    id: 3,
    elements: [],
  },
];
