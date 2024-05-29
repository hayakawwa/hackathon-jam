'use client'

import Information from "@/components/Event/Information/Information";
import styles from './Event.module.scss'
import Map from "@/components/Event/Map/Map";
import Requirements from "@/components/Event/Requirements/Requirements";
import {EventProps} from "@/components/Event/Information/MainInfo/MainInfo";
import {usePathname} from "next/navigation";
import {useGetEventByNameQuery, useGetEventsQuery} from "@/api/eventApi";
import Link from "next/link";
export default function EventItem() {
  const pathname = usePathname().split('/').slice(-1)[0]
  const {data, isLoading, isError} = useGetEventByNameQuery(pathname)

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}><Link href={'/home'}>Каталог событий</Link> / <span className={styles.currentPage}>{data?.name}</span></div>
      <div className={styles.content}>
        <Information data={data}/>
        <div className={styles.subInfo}>
          <Map/>
          <Requirements data={data}/>
        </div>
      </div>
    </div>
  )
}