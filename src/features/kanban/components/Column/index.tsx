import React, { useState } from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import { DataType } from "../../../../constants/staticObjects";
import Popup from "../Popup";

const Column: React.FC<DataType> = ({ name, id, elements }) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>{name}</h1>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
      {
        isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} id={id} />   
      }
      {elements.map((item,index) => (
        <Card key={index} title={item.title} desc={item.desc} id={item.id} />
      ))}
    </div>
  );
};

export default Column;
