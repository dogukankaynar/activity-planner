import { createContext, useState, useContext, useEffect } from "react";
import { data, DataType, ElementType } from "../constants/staticObjects";

type DataProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

type DataContextType = {
  todo: DataType[];
  setTodo: (todo: DataType[]) => void;
};

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [todo, setTodo] = useState<DataType[]>(data);

  const values: DataContextType = {
    todo,
    setTodo,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export const useDataList = () => useContext(DataContext);
export { DataProvider };
