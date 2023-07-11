import { useDataList } from "@/context/DataContext";
import React, { useState } from "react";
import Column from "./components/Column";
import styles from "./index.module.scss";;
const Kanban = () => {
  const {todo,setTodo}=useDataList();  
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
