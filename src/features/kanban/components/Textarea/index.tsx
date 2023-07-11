import React from "react";
import styles from "./index.module.scss";

type Props = {
  desc: string;
  setNewDesc: (e: string) => void;
};

const InputDesc: React.FC<Props> = ({ desc, setNewDesc }) => {
  return (
    <>
      <textarea
        className={styles.textInput}
        value={desc}
        placeholder="desc.."
        onChange={(e)=>setNewDesc(e.target.value)}
      />
    </>
  );
};

export default InputDesc;
