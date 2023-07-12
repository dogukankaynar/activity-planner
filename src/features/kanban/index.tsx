import { RootState } from "@/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Column from "./components/Column";
import styles from "./index.module.scss";;
const Kanban = () => {
   const todo = useSelector((state: RootState) => state.todo.value)
  return (
    <div className={styles.container}>
      {todo.map((item) => (
        <Column
          key={item.id}
          name={item.name}
          id={item.id}
          elements={item.elements}
        />
      ))}
    </div>
  );
};

export default Kanban;
