/* eslint-disable react-hooks/rules-of-hooks */
import { addTodo, editTodo } from "@/store/todoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";
import InputDesc from "../Textarea";
import styles from "./index.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  id: number;
  itemId?: number;
};

const index: React.FC<Props> = ({ isOpen, setIsOpen, id, itemId }) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setNewDesc] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemId) {
      console.log("edit durumunda");
      // if(itemId){
      //   const taskId={id:id,itemId:itemId}
      //   dispatch(editTodo(taskId))
      // }
    }
  }, [dispatch, id, itemId]);

  const handleAddButtonClick = () => {
    if (itemId) {
      console.log("itemId: >>>", itemId);
      const cardInfo = { columnId: id, itemId: itemId };
      const element = { title: title, desc: desc, id: itemId };
      dispatch(
        editTodo({
          ...cardInfo,
          element,
        })
      );
      setIsOpen(false);
    }
    if (title && desc) {
      if (!itemId) {
        setIsOpen(false);
        dispatch(
          addTodo({
            id: new Date().getTime(),
            title: `${title}`,
            desc: `${desc}`,
            parentId: id,
          })
        );
      }
    } else {
      alert("tüm alanları doldur");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Input title={title} setTitle={setTitle} />
        <InputDesc desc={desc} setNewDesc={setNewDesc} />
        <div className={styles.button}>
          <button className={styles.open} onClick={handleAddButtonClick}>
            Add
          </button>
          <button className={styles.close} onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
