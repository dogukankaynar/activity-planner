import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  setTitle: (e: string) => void;
};

const Input: React.FC<Props> = ({ title, setTitle }) => {
  return (
    <>
      <input
        className={styles.textInput}
        value={title}
        type="text"
        placeholder="title.."
        onChange={(e)=>setTitle(e.target.value)}
      />
    </>
  );
};

export default Input;
