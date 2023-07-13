import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getColumnClassName } from "../Column";
import styles from "./index.module.scss";
import { deleteTodo, ElementType,editTodo } from "@/store/todoSlice";
import Popup from "../Popup";


const Card: React.FC<ElementType> = ({ id, title, desc, itemId }) => {
  const [isOpen,setIsOpen]=useState<boolean>(false);
  
  const handleEditButton =()=>{
    setIsOpen(true);
  }

  const dispatch=useDispatch()
  const handleAddButtonClick=()=>{
    if(itemId){
      const taskId={id:id,itemId:itemId}
      dispatch(deleteTodo(taskId))
    }
  }
  return (
    <div className={`${styles.container} ${getColumnClassName(id)}`}>
      <div className={styles.content}>
        <span>{title}</span>
        <button onClick={handleEditButton}>Edit</button>
        <button onClick={handleAddButtonClick}>X</button>
      </div>
      {isOpen && 
       <Popup isOpen={isOpen}  setIsOpen={setIsOpen} id={id} itemId={itemId} />
      }
    </div>
  );
};

export default Card;
