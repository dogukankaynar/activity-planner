import React, { useState } from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import { data, DataType } from "../../../../constants/staticObjects";
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
        isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} />   
      }
      {elements.map((item) => (
        <Card key={item.id} name={item.name} id={item.id} />
      ))}
    </div>
  );
};

export default Column;
