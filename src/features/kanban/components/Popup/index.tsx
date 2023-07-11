import React from "react";
import styles from "./styles.module.css";

type Props={
    isOpen:boolean;
    setIsOpen:(val:boolean)=>void;
}

const index:React.FC<Props> = ({isOpen,setIsOpen}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Deneme</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          similique nam quia magnam nihil praesentium a eveniet velit voluptates
          excepturi. Nihil, beatae soluta. Provident corrupti atque aspernatur
          at ipsam dicta, quae exercitationem quos laborum dolorem ipsum impedit
          eligendi nemo expedita qui commodi veritatis voluptates! Ipsum minus
          voluptates fugit sunt impedit.
        </p>
        <button onClick={()=>setIsOpen(false)}>close</button>
      </div>
    </div>
  );
};

export default index;
