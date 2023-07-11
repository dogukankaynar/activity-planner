import React, { useState } from "react";
import Column from "./components/Column";
import styles from "./index.module.scss";
import { data } from "../../constants/staticObjects";
const Kanban = () => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Column
          key={item.id}
          name={item.name}
          id={item.id}
          elements={item.elements}
        />
      ))}
      {/* {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} />}
      <button onClick={() => setIsOpen(true)}>Open</button> */}
    </div>
  );
};

export default Kanban;
