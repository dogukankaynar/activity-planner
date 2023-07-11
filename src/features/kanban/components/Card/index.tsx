import { ElementType } from '@/constants/staticObjects'
import React from 'react'
import styles from "./index.module.scss"


const Card:React.FC<ElementType> = ({id,title,desc}) => {
  return (
    <div className={styles.container}>
        {title}
    </div>
  )
}

export default Card