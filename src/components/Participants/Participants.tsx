'use client'

import styles from './Participants.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Card from "@/components/Event/Information/ParticipantsBlock/Card/Card";
import Button from "@/components/ui-kit/Button/Button";
import {redirect, usePathname} from "next/navigation";
import {useExitEventMutation, useGetUsersMutation, useJoinEventMutation} from "@/api/eventApi";
import React, {useEffect} from "react";

export default function Participants() {
  const pathname = usePathname().split('/').slice(-2)[0]
  const [getUsers, {data, isSuccess, isError}] = useGetUsersMutation()
  const [joinEvent, {isSuccess: joinSuccess, isError: joinError}] = useJoinEventMutation()
  const [exitEvent, {isSuccess: exitSuccess, isError: exitError}] = useExitEventMutation()
  const usersCount = `Участники: ${data?.users.length}`

  useEffect(() => {
    getUsers({urid: pathname, skills_to_search: []})
  }, [joinSuccess]);

  if (isError) {
    redirect('/home')
  }


  const joinToEvent = async () => {
    try {
      await joinEvent({urid: pathname, access_token: 'a716fdd517059706aaf5965c74673ac5'})
    } catch (e) {
      console.log(e)
    }
  }

  const exitToEvent = async () => {
    try {
      await exitEvent({urid: pathname, access_token: 'a716fdd517059706aaf5965c74673ac5'})
    } catch (e) {
      console.log(e)
    }
  }

  return isSuccess && (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <Title className={styles.title}>{usersCount}</Title>
        <Button onClick={joinToEvent} className={styles.publicBtn}>Опубликовать профиль</Button>
      </div>
      <p className={styles.label}>Чтобы участники смогли пригласить вас в команду, опубликуйте ваш профиль.</p>
      <div className={styles.cards}>
        {data?.users.map((item) => (
          <Card lastName={item.last_name} firstName={item.first_name}/>
        ))}
      </div>
    </div>
  )
}