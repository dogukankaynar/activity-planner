/* eslint-disable react-hooks/rules-of-hooks */
import { ElementType } from "@/constants/staticObjects";
import { useDataList } from "@/context/DataContext";
import React, { useEffect, useState } from "react";
import Input from "../Input";
import InputDesc from "../Textarea";
import styles from "./styles.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  id: number;
};

const index: React.FC<Props> = ({ isOpen, setIsOpen, id }) => {
  const {todo } = useDataList();
  const [title, setTitle] = useState<string>("");
  const [desc, setNewDesc] = useState<string>("");

  const handleAddButtonClick = () => {
    if(title && desc){
      todo.map((item) => {
        if (item.id === id) {
          item.elements.push({
            id: new Date().getTime(),
            title: `${title}`,
            desc: `${desc}`,
          });
        }
      });
      setIsOpen(false);
      console.log("todo :>> ", todo);
    }
    else{
      alert("tüm alanları doldur")
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Input title={title} setTitle={setTitle} />

        <InputDesc desc={desc} setNewDesc={setNewDesc} />

        <div className={styles.button}>
          <button onClick={handleAddButtonClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default index;
