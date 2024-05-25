'use client'

import styles from './Select.module.scss'
import Image from "next/image";
import selectArrow from '@/assets/selectArrow.svg'
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {eventFiltersActions} from "@/store/slices/FiltersSlices/eventFilters.slice";
import {getFiltersData} from "@/store/selectors/eventFiltersSelector";
import {activeFiltersActions} from "@/store/slices/FiltersSlices/activeFilters.slice";
import FilterItem from "@/components/Home/EventsDirectory/EventFilters/Select/FilterItem/FilterItem";

interface Props {
  children: string
  id: number
  name: string
  data?: string[]
}

export default function Select({children, id, data}: Props) {
  const dispatch = useAppDispatch()
  const filtersData = useAppSelector(getFiltersData)
  const currentFilter = filtersData.find(item => item.id === id)

  const onArrowClick = () => {
    dispatch(eventFiltersActions.openCurrentFilter({id}))
  }

  const onCheckboxClick = (value: string) => {
    dispatch(activeFiltersActions.activateFilter({value}))
  }

  useEffect(() => {
    data && data.map(item => {
      dispatch(activeFiltersActions.initializeItem({value: item, checked: false}))
    })
  }, []);

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectBtn} onClick={onArrowClick}>
        <span>{children}</span>
        <div>
          <Image src={selectArrow} alt={'selectArrow'} className={`${styles.selectArrow} ${currentFilter?.active ? styles.arrowActive : ''}`}/>
        </div>
      </div>
      <ul className={`${styles.options} ${currentFilter?.active ? styles.modalActive : ''}`}>
        {data && data.map((item) => (
          <FilterItem text={item} onClick={() => onCheckboxClick(item)}/>
        ))}
      </ul>
    </div>
  )
}