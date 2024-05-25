'use client'

import styles from './Participants.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Card from "@/components/Event/Information/Participants/Card/Card";
import Button from "@/components/ui-kit/Button/Button";
import {useState} from "react";

export default function Participants() {
  const ITEMS_LIMIT = 3
  const [visible, setVisible] = useState(ITEMS_LIMIT)
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  const showMoreItems = () => {
    setVisible((prevState) => prevState + 3)
  }

  const defaultState = () => {
    setVisible(ITEMS_LIMIT)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title className={styles.title}>Участники: 9</Title>
        <div className={styles.cards}>
          {data.slice(0, visible).map(() => (
            <Card className={styles.card}/>
          ))}
        </div>
        <div className={`${styles.btnWrapper} ${data.length <= ITEMS_LIMIT && styles.disable}`}>
          {visible < data.length ?
            <Button className={`${styles.scaleBtn}`} onClick={showMoreItems}>Показать ещё</Button> :
            <Button className={styles.scaleBtn} onClick={defaultState}>Скрыть</Button>
          }
        </div>
      </div>
    </div>
  )
}