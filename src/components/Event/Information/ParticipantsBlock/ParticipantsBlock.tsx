'use client'

import styles from './ParticipantsBlock.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Card from "@/components/Event/Information/ParticipantsBlock/Card/Card";
import Button from "@/components/ui-kit/Button/Button";
import {useState} from "react";
import {User} from "@/api/types";
import Link from "next/link";

interface ParticipantsProps {
  users?: User[]
  pathname?: string
}

export default function ParticipantsBlock({users, pathname}: ParticipantsProps) {
  const ITEMS_LIMIT = 3
  const [visible, setVisible] = useState(ITEMS_LIMIT)
  const usersCount = `Участники: ${users?.length}`
  const showMoreItems = () => {
    setVisible((prevState) => prevState + 3)
  }

  const defaultState = () => {
    setVisible(ITEMS_LIMIT)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link href={`/home/${pathname}/participants`}>
          <Title className={styles.title}>{usersCount}</Title>
        </Link>
        <div className={styles.cards}>
          {users?.slice(0, visible).map((item, index) => (
            <Link key={index} href={`/profile/${item.username}`}>
              <Card firstName={item.first_name} lastName={item.last_name} className={styles.card}/>
            </Link>
          ))}
        </div>
        <div className={`${styles.btnWrapper} ${users && users.length <= ITEMS_LIMIT && styles.disable}`}>
          {users && visible < users.length ?
            <Button className={`${styles.scaleBtn}`} onClick={showMoreItems}>Показать ещё</Button> :
            <Button className={styles.scaleBtn} onClick={defaultState}>Скрыть</Button>
          }
        </div>
      </div>
    </div>
  )
}