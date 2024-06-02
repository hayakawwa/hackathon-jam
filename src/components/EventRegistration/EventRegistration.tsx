'use client'

import styles from './EventRegistration.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import RegSelect from "@/components/EventRegistration/RegSelect/RegSelect";
import ParticipantReg from "@/components/EventRegistration/ParticipantReg/ParticipantReg";
import Button from "@/components/ui-kit/Button/Button";
import {useAppSelector} from "@/hooks/hooks";
import {getEvents} from "@/store/selectors/eventSelector";
import {redirect, usePathname} from "next/navigation";
import {useGetEventByNameQuery} from "@/api/eventApi";
import Link from "next/link";
import React from "react";
import Input from "@/components/ui-kit/Input/Input";

export default function EventRegistration() {
  const events = useAppSelector(getEvents)
  const pathname = usePathname().split('/').slice(-2)[0]
  let name = events.filter(item => item.urid === pathname).map(item => item.name)[0]
  if (events.length === 0) {
    const {data, isLoading, isError, isSuccess, error} = useGetEventByNameQuery(pathname)
    name = data?.name
  }

  if (!name) {
    redirect('/home')
  }

  return (
    <div className={styles.layout}>
      <div className={styles.breadcrumbs}><Link className={styles.home} href={'/home'}>Каталог событий</Link>  / <Link href={`/home/${pathname}`}>{name}</Link> / <span className={styles.currentPage}>Регистрация на мероприятие</span></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title className={styles.title}>Регистрация на мероприятие</Title>
          <p className={styles.req}>Требования к команде: <span>5 человек</span></p>
          <p className={styles.people}>Заполнено: <span>5 человек</span></p>
          <div className={styles.team}>
            <p className={styles.teamName}>Название команды</p>
            <Input name={'название команды'}/>
          </div>
          <ParticipantReg/>
          <ParticipantReg/>
          <ParticipantReg/>
          <ParticipantReg/>
          <ParticipantReg/>
          <Button className={styles.buttonReg}>Зарегистрироваться</Button>
        </div>
      </div>
    </div>

  )
}