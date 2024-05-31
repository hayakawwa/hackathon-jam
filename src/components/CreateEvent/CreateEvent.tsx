'use client'

import styles from './CreateEvent.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Button from "@/components/ui-kit/Button/Button";
import Input from "@/components/ui-kit/Input/Input";
import Multiselect from "@/components/ui-kit/Multiselect/Multiselect";
import Image from "next/image";
import map from '@/assets/map-temp-create-page.png'
import React, {useState} from "react";
import {toISOFormat} from "@/utils/utils";
import {EventSchema} from "@/store/types/EventSchema";
import Switch from "@/components/ui-kit/Switch/Switch";
import {useCreateEventMutation} from "@/api/eventApi";
import Link from "next/link";
import Description from "@/components/CreateEvent/Description/Description";
import Requirements from "@/components/CreateEvent/Requirements/Requirements";
import EventInfo from "@/components/CreateEvent/EventInfo/EventInfo";

interface CreateEventBody extends EventSchema {
  access_token: string
}

export default function CreateEvent() {

  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [prize, setPrize] = useState('')
  const [count, setCount] = useState(0)
  const [desc, setDesc] = useState('')
  const [location, setLocation] = useState('')
  const [link, setLink] = useState('')
  const [checked, setChecked] = useState<boolean>(false)


  const [createEvent, {isError, isSuccess}] = useCreateEventMutation()

  // TODO: сделать форматирование даты

  const body: CreateEventBody = {
    access_token: '58af532fb5c6c62f2a6a694d94fc7939',
    desc: desc,
    end_time: endDate && toISOFormat(endDate),
    icon: '',
    is_irl: checked,
    location: location,
    name: name,
    prize: prize,
    requirements: '1',
    start_time: startDate && toISOFormat(startDate),
    team_requirements_type: 0,
    team_requirements_value: count,
    urid: link
  }


  const onCreateButtonClick = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      await createEvent(body)
    } catch (e) {
      console.log(e)
    }
  };

  return !isSuccess ? (
    <form onSubmit={onCreateButtonClick} className={styles.wrapper}>
      <div className={styles.create}>
        <section className={styles.photoWrapper}>
          <Title className={styles.title}>Создание мероприятия</Title>
          <Button className={styles.addPhotoBtn}>Загрузить фото</Button>
        </section>
        <section className={styles.titleBlock}>
          <Title className={styles.infoTitle}>Информация</Title>
          <div className={styles.switchWrapper}>
            <Switch setChecked={setChecked} className={styles.switch} /><span className={styles.switchLabel}>Мероприятие проходит очно</span>
          </div>
        </section>
        <EventInfo setLink={setLink} setName={setName} setStartDate={setStartDate} setEndDate={setEndDate} setPrize={setPrize} setLocation={setLocation} checked={checked} />
        <Requirements setCount={setCount} />
      </div>
      <Description setDesc={setDesc} />
      <div className={styles.buttons}>
        <Button isSubmit={true} className={styles.createBtn}>Опубликовать</Button>
        <Button className={styles.reviewBtn}>Посмотреть ревью</Button>
        <Button className={styles.clearBtn}>Опубликовать</Button>
      </div>
      {isError && <div className={styles.error}>Произошла ошибка</div>}
    </form>
  ) :
    (<div className={styles.create}>
      <Title className={styles.confirmTitle}>Заявка успешно создана</Title>
      <Link href={'/home'}>
        <Button className={styles.toHomeBtn}>К каталогу событий</Button>
      </Link>
    </div>)
}