'use client'

import styles from './EventRegistration.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import ParticipantReg from "@/components/EventRegistration/ParticipantReg/ParticipantReg";
import Button from "@/components/ui-kit/Button/Button";
import {redirect, usePathname} from "next/navigation";
import {useGetEventByNameQuery} from "@/api/eventApi";
import Link from "next/link";
import React, {useState} from "react";
import Input from "@/components/ui-kit/Input/Input";

export default function EventRegistration() {
  const pathname = usePathname().split('/').slice(-2)[0]
  const {data, isLoading, isError, isSuccess, error} = useGetEventByNameQuery(pathname)

  let eventName = data?.name
  let participantCount = data?.team_requirements_value


  if (!eventName) {
    redirect('/home')
  }

  return (
    <div className={styles.layout}>
      <div className={styles.breadcrumbs}><Link className={styles.home} href={'/home'}>Каталог событий</Link>  / <Link href={`/home/${pathname}`}>{eventName}</Link> / <span className={styles.currentPage}>Регистрация на мероприятие</span></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title className={styles.title}>Регистрация на мероприятие</Title>
          <p className={styles.req}>Требования к команде: <span>{participantCount} человек</span></p>
          <p className={styles.people}>Заполнено: <span>{participantCount} человек</span></p>
          <div className={styles.team}>
            <p className={styles.teamName}>Название команды</p>
            <Input name={'название команды'}/>
          </div>
          {Array(participantCount).fill(0).map((_, index) => (
            <ParticipantReg participantNumber={index + 1}/>
          ))}
          <Button className={styles.buttonReg}>Зарегистрироваться</Button>
        </div>
      </div>
    </div>

  )
}