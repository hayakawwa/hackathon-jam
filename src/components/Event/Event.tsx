'use client'

import Information from "@/components/Event/Information/Information";
import styles from './Event.module.scss'
import Map from "@/components/Event/Map/MapContainer";
import Requirements from "@/components/Event/Requirements/Requirements";
import {redirect, usePathname} from "next/navigation";
import {useGetEventByNameQuery, useGetUsersMutation} from "@/api/eventApi";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "@/hooks/hooks";
import {eventsActions} from "@/store/slices/events.slice";
import MapContainer from "@/components/Event/Map/MapContainer";
export default function EventItem() {
  const pathname = usePathname().split('/').slice(-1)[0]
  const {data, isLoading, isError, isSuccess, error} = useGetEventByNameQuery(pathname)
  const [getUsers, {data: usersData, isSuccess: getUsersSuccess}] = useGetUsersMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    isSuccess && dispatch(eventsActions.addEvent(data))
  }, [isSuccess]);

  useEffect(() => {
    getUsers({urid: pathname, skills_to_search: []})
  }, []);

  if (isError) {
    redirect('/home')
  }

  return isSuccess && (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}><Link  href={'/home'}>Каталог событий</Link> / <span className={styles.currentPage}>{data?.name}</span></div>
      <div className={styles.content}>
        <Information pathname={pathname} data={data} users={usersData?.users}/>
        <div className={styles.subInfo}>
          <MapContainer />
          <Requirements data={data}/>
        </div>
      </div>
    </div>
  )
}