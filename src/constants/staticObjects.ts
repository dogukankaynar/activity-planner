export type ElementType ={
    id:number;
    name:string;
}
export type DataType={
    name:string;
    id:number;
    elements:ElementType[];
}

export const data:DataType[] = [
  {
    name: "Yapılacaklar",
    id: 1,
    elements: [
      {
        id: 11,
        name: "yapılacak 1",
      },
      {
        id: 12,
        name: "yapılacak 2",
      },
    ],
  },
  {
    name: "Devam Ediyor",
    id: 2,
    elements: [],
  },
  {
    name: "Tamamlandı",
    id: 3,
    elements: [
      {
        id: 32,
        name: "tamam 2",
      },
    ],
  },
];
