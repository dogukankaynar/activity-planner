import React from "react";
import { useDispatch } from "react-redux";
import { getColumnClassName } from "../Column";
import styles from "./index.module.scss";
import { deleteTodo, ElementType } from "@/store/todoSlice";


const Card: React.FC<ElementType> = ({ id, title, desc, itemId }) => {
  
  const dispatch=useDispatch()
  const handleAddButtonClick=()=>{
    if(itemId){
      dispatch(deleteTodo(id))
    }
  }
  return (
    <div className={`${styles.container} ${getColumnClassName(id)}`}>
      <div className={styles.content}>
        <span>{title}</span>
        <span onClick={handleAddButtonClick}>X</span>
      </div>
    </div>
  );
};

export default Card;
