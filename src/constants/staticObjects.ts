export type ElementType = {
  id: number ;
  title: string;
  desc: string;
  itemId?:number;
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
