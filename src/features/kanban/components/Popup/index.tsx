/* eslint-disable react-hooks/rules-of-hooks */
import { ElementType } from "@/constants/staticObjects";
import { addTodo } from "@/store/todoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";
import InputDesc from "../Textarea";
import styles from "./index.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  id: number;
};

const index: React.FC<Props> = ({ isOpen, setIsOpen, id }) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setNewDesc] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    if (title && desc) {
      setIsOpen(false);
      dispatch(
        addTodo({
          id: new Date().getTime(),
          title: `${title}`,
          desc: `${desc}`,
          parentId: id,
        })
      );
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
          <button onClick={handleAddButtonClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default index;
