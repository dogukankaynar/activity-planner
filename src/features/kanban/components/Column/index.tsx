import React, { useState } from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import Popup from "../Popup";
import { DataType } from "@/store/todoSlice";



export const getColumnClassName = (id:number) => {

  if (id === 1) {
    return styles.columnOne;
  } else if (id === 2) {
    return styles.columnTwo;
  } else if (id === 3) {
    return styles.columnThree;
  }
};



const Column: React.FC<DataType> = ({ name, id, elements }) => {
  
 const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={`${styles.title} ${getColumnClassName(id)}`}> <p></p> {name}</h1>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
      {
        isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} id={id} />   
      }
      {elements.map((item,index) => (
        <Card key={index} title={item.title} desc={item.desc} id={id} itemId={item.id} />
      ))}
    </div>
  );
};

export default Column;
