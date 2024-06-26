'use client'

import styles from "./MainInfo.module.scss";
import Title from "@/components/ui-kit/Title/Title";
import Button from "@/components/ui-kit/Button/Button";
import Image from "next/image";
import locationIcon from "@/assets/location-item.svg";
import dateIcon from '@/assets/date-icon.svg'
import prizeIcon from '@/assets/prize-icon.svg'
import orgIcon from '@/assets/org-icon.svg'
import Tag from "@/components/ui-kit/Tag/Tag";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {formattedDay} from "@/utils/utils";

export interface EventProps {
  title?: string
  prize?: string
  location?: string
  start_date?: string
  end_date?: string
  tags?: string[]
  organisators?: {
    email: string
    username: string
  }[]

}

export default function MainInfo({title, prize, start_date, end_date, location, tags, organisators}: EventProps) {

  const start_time = start_date && formattedDay(start_date)
  const end_time = end_date && formattedDay(end_date)
  const pathname = usePathname()

  return (
    <div className={styles.wrapper}>
      <p className={styles.picture}>1025x575</p>
      <div className={styles.content}>
        <Title className={styles.title}>{title}</Title>
        <Link className={styles.acceptWrapper} href={`${pathname}/registration`}>
          <Button className={styles.accept}>Участвовать</Button>
        </Link>
        <div className={styles.tags}>
          {tags && tags.map((tag, index) => (
            <Tag key={index} className={styles.tag}>{tag}</Tag>
          ))}
        </div>
        <div className={styles.itemsIcon}>
          <div className={styles.item}>
            <Image src={dateIcon} alt={'dateIcon'}/>
            <p className={styles.info}><span>{start_time ? start_time : ''}</span> - <span>{end_time ? end_time : ''}</span></p>
          </div>
          <div className={styles.item}>
            <Image src={locationIcon} alt={'locationIcon'}/>
            <div className={`${styles.info} ${styles.locationInfo}`}>{location ? location : 'Локация не указана'}</div>
          </div>
          <div className={styles.item}>
            <Image src={prizeIcon} alt={'prizeIcon'}/>
            <div className={`${styles.info} ${styles.prizeInfo}`}>
              <p className={`${styles.prize} ${styles.topInfo}`}>Призовой фонд:</p>
              <p className={`${styles.size} ${styles.botInfo}`}>{prize ? prize : 'не указан'}</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={orgIcon} alt={'orgIcon'}/>
            <div className={`${styles.info}`}>
              <p className={`${styles.topInfo}`}>Организатор:</p>
              <p className={`${styles.org} ${styles.botInfo}`}>{organisators ? organisators[0].email : 'не указан'}</p>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}