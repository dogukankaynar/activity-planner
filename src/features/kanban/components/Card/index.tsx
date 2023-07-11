import { ElementType } from '@/constants/staticObjects'
import React from 'react'
import styles from "./index.module.scss"


const Card:React.FC<ElementType> = ({id,name}) => {
  return (
    <div className={styles.container}>
        {name}
    </div>
  )
}

export default Card