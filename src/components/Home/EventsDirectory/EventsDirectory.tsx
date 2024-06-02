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
import {useDebounce} from "@/hooks/useDebounce";

export default function EventsDirectory() {
  const ITEMS_LIMIT = 9;
  const [visible, setVisible] = useState(ITEMS_LIMIT)
  const [searchValue, setSearchValue] = useState<string>()
  const activeFilters = useAppSelector(getActiveFilters).filter(item => item.checked)
  const dispatch = useAppDispatch()

  const debouncedValue = useDebounce(searchValue, 500)

  console.log(debouncedValue)

  const {data: response, isError, isLoading} = useGetEventsQuery();
  const eventsData = response?.events
  const eventsCount = response?.count

  const removeFilterItem = (value?: string) => {
    dispatch(activeFiltersActions.removeFilterItem({value}))
  }

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
          {activeFilters && activeFilters.map((item, index) => (
            <div key={index} className={styles.item}>
              {item.value}
              <Image src={removeIcon} alt={'removeIcon'} className={styles.removeIcon} onClick={() => removeFilterItem(item.value)}/>
            </div>
          ))}
        </section>
        <section className={styles.inputSection}>
          <Input placeholder={'Найти мероприятие'} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} name={'searchInput'} isSearch />
        </section>
        <section className={styles.eventsContainer}>
          {isError ? <p className={styles.error}>Ошибка при загрузке событий</p> : ''}
          {debouncedValue ?
            (eventsData?.filter(item => item.name?.includes(debouncedValue!)).slice(0, visible).map((item, index) => (
              <EventCard key={index} start_date={item.start_time} end_date={item.end_time} name={item.name} location={item.location} tags={item.tags} urid={item.urid}/>
            ))) :
            (eventsData?.slice(0, visible).map((item, index) => (
                <EventCard key={index} start_date={item.start_time} end_date={item.end_time} name={item.name} location={item.location} tags={item.tags} urid={item.urid}/>
              )))
          }
        </section>
        <div className={`${styles.showMoreWrapper} ${eventsCount && eventsCount <= ITEMS_LIMIT && styles.disable}`}>
          {eventsCount && visible < eventsCount ?
            <Button className={styles.scaleBtn} onClick={showMoreItems}>Показать еще</Button> :
            <Button className={`${styles.scaleBtn}`} onClick={defaultState}>Скрыть</Button>
          }
        </div>
      </div>
    </div>

  )
}