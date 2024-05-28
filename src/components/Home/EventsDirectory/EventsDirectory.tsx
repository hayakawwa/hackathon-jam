'use client'

import React, {useState} from "react";
import styles from './EventsDirectory.module.scss'
import removeIcon from '@/assets/x-white.svg'
import Input from "@/components/ui-kit/Input/Input";
import EventCard, {EventCardProps} from "@/components/Home/EventCard/EventCard";
import Title from "@/components/ui-kit/Title/Title";
import Button from "@/components/ui-kit/Button/Button";
import EventFilters from "@/components/Home/EventsDirectory/EventFilters/EventFilters";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {getActiveFilters} from "@/store/selectors/eventFiltersSelector";
import Image from "next/image";
import {activeFiltersActions} from "@/store/slices/FiltersSlices/activeFilters.slice";
import {useGetEventsQuery} from "@/api/eventApi";


const mockEventsData: EventCardProps[] = [
  {
    id: 1,
    title: 'Хакатон: кожаный мяч',
    date: '16 июня - 20 июня',
    street: 'ул. Комсомольская, 70',
    city: 'Екатеринбург',
    tag: 'Веб-разработка',
  },
  {
    id: 2,
    title: 'Супер крутой хакатон',
    date: '16 мая - 18 мая',
    street: 'ул. Мира, 19',
    city: 'Архангельск',
    tag: 'Мобильная разработка',
  },
  {
    id: 3,
    title: 'Покори мир',
    date: '15 апреля - 17 апреля',
    street: 'ул. Финика, 44',
    city: 'Мурманск',
    tag: 'Робототехника',
  },
  {
    id: 4,
    title: 'Уральский областной хакатон',
    date: '15 января - 17 января',
    street: 'ул. Фурманова, 228',
    city: 'Саратов',
    tag: 'No-code',
  },
  {
    id: 1,
    title: 'Хакатон: кожаный мяч',
    date: '16 июня - 20 июня',
    street: 'ул. Комсомольская, 70',
    city: 'Екатеринбург',
    tag: 'Веб-разработка',
  },
  {
    id: 2,
    title: 'Супер крутой хакатон',
    date: '16 мая - 18 мая',
    street: 'ул. Мира, 19',
    city: 'Архангельск',
    tag: 'Мобильная разработка',
  },
  {
    id: 3,
    title: 'Покори мир',
    date: '15 апреля - 17 апреля',
    street: 'ул. Финика, 44',
    city: 'Мурманск',
    tag: 'Робототехника',
  },
  {
    id: 4,
    title: 'Уральский областной хакатон',
    date: '15 января - 17 января',
    street: 'ул. Фурманова, 228',
    city: 'Саратов',
    tag: 'No-code',
  },
  {
    id: 1,
    title: 'Хакатон: кожаный мяч',
    date: '16 июня - 20 июня',
    street: 'ул. Комсомольская, 70',
    city: 'Екатеринбург',
    tag: 'Веб-разработка',
  },
  {
    id: 2,
    title: 'Супер крутой хакатон',
    date: '16 мая - 18 мая',
    street: 'ул. Мира, 19',
    city: 'Архангельск',
    tag: 'Мобильная разработка',
  },
  {
    id: 3,
    title: 'Покори мир',
    date: '15 апреля - 17 апреля',
    street: 'ул. Финика, 44',
    city: 'Мурманск',
    tag: 'Робототехника',
  },
  {
    id: 4,
    title: 'Уральский областной хакатон',
    date: '15 января - 17 января',
    street: 'ул. Фурманова, 228',
    city: 'Саратов',
    tag: 'No-code',
  },
]

export default function EventsDirectory() {
  const ITEMS_LIMIT = 9;
  const [visible, setVisible] = useState(ITEMS_LIMIT)
  const [filtered, setFiltered] = useState<EventCardProps[]>(mockEventsData)
  const activeFilters = useAppSelector(getActiveFilters).filter(item => item.checked)
  const dispatch = useAppDispatch()

  const {data = [], isError, isLoading} = useGetEventsQuery();

  const removeFilterItem = (value?: string) => {
    dispatch(activeFiltersActions.removeFilterItem({value}))
  }

  console.log(data)

  const showMoreItems = () => {
    setVisible((prevState) => prevState + 3)
  }

  const defaultState = () => {
    setVisible(ITEMS_LIMIT)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={styles.headerWrapper}>
          <Title className={styles.title}>Каталог событий</Title>
          <EventFilters />
        </section>
        <section className={styles.activeFilters}>
          {activeFilters && activeFilters.map(item => (
            <div className={styles.item}>
              {item.value}
              <Image src={removeIcon} alt={'removeIcon'} className={styles.removeIcon} onClick={() => removeFilterItem(item.value)}/>
            </div>
          ))}
        </section>
        <section className={styles.inputSection}>
          <Input placeholder={'Найти мероприятие'} className={styles.input} name={'searchInput'} isSearch />
        </section>
        <section className={styles.eventsContainer}>
          {mockEventsData.slice(0, visible).map((item) => (
            <EventCard id={item.id} tag={item.tag} date={item.date} title={item.title} city={item.city} street={item.street}/>
          ))}
        </section>
        <div className={`${styles.showMoreWrapper} ${mockEventsData.length <= ITEMS_LIMIT && styles.disable}`}>
          {visible < mockEventsData.length ?
            <Button className={styles.scaleBtn} onClick={showMoreItems}>Показать еще</Button> :
            <Button className={`${styles.scaleBtn}`} onClick={defaultState}>Скрыть</Button>
          }
        </div>
      </div>
    </div>

  )
}