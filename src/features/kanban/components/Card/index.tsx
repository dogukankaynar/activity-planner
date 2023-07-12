import { ElementType } from "@/constants/staticObjects";
import React from "react";
import { getColumnClassName } from "../Column";
import styles from "./index.module.scss";

const Card: React.FC<ElementType> = ({ id, title, desc, itemId }) => {
  return (
    <div className={`${styles.container} ${getColumnClassName(id)}`}>
      <span>{title}</span>
    </div>
  );
};

export default Card;
