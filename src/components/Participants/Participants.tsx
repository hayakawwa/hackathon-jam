'use client'

import styles from './Participants.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Card from "@/components/Event/Information/ParticipantsBlock/Card/Card";
import Button from "@/components/ui-kit/Button/Button";
import {redirect, usePathname} from "next/navigation";
import {useExitEventMutation, useGetEventByNameQuery, useGetUsersMutation, useJoinEventMutation} from "@/api/eventApi";
import React, {useEffect} from "react";
import Link from "next/link";
import {useAppSelector} from "@/hooks/hooks";
import {getEvents} from "@/store/selectors/eventSelector";

export default function Participants() {
  const pathname = usePathname().split('/').slice(-2)[0]
  const [getUsers, {data, isSuccess, isError}] = useGetUsersMutation()
  const [joinEvent, {isSuccess: joinSuccess, isError: joinError}] = useJoinEventMutation()
  const [exitEvent, {isSuccess: exitSuccess, isError: exitError}] = useExitEventMutation()
  const usersCount = `Участники: ${data?.users.length}`
  const events = useAppSelector(getEvents)


  let name = events.filter(item => item.urid === pathname).map(item => item.name)[0]
  const {data: EventsData, error} = useGetEventByNameQuery(pathname)
  name = EventsData?.name

  if (!name) {
    redirect('/home')
  }


  useEffect(() => {
    getUsers({urid: pathname, skills_to_search: []})
  }, [joinSuccess]);

  if (isError) {
    redirect('/home')
  }


  const joinToEvent = async () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        await joinEvent({urid: pathname, access_token: localStorage.getItem('access_token') as string})
      }
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
      <section className={styles.breadcrumbs}><Link className={styles.home} href={'/home'}>Каталог событий</Link> / <Link href={`/home/${pathname}`}>{name}</Link> / <span className={styles.currentPage}>Участники</span></section>
      <section className={styles.content}>
        <div className={styles.infoWrapper}>
          <Title className={styles.title}>{usersCount}</Title>
          <Button onClick={joinToEvent} className={styles.publicBtn}>Опубликовать профиль</Button>
        </div>
        <p className={styles.label}>Чтобы участники смогли пригласить вас в команду, опубликуйте ваш профиль.</p>
        <div className={styles.cards}>
          {data?.users.map((item, index) => (
            <Card key={index} lastName={item.last_name} firstName={item.first_name}/>
          ))}
        </div>
      </section>
    </div>
  )
}