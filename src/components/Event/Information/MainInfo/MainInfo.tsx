'use client'

import styles from "./MainInfo.module.scss";
import Title from "@/components/ui-kit/Title/Title";
import Button from "@/components/ui-kit/Button/Button";
import Image from "next/image";
import locationIcon from "@/assets/location-item.svg";
import dateIcon from '@/assets/date-icon.svg'
import prizeIcon from '@/assets/prize-icon.svg'
import Tag from "@/components/ui-kit/Tag/Tag";
import Link from "next/link";
import {usePathname} from "next/navigation";


export interface EventProps {
  title?: string
  date?: string
  prize?: string
  city?: string
  street?: string
}


export default function MainInfo({title, street, city, date, prize}: EventProps) {
  const pathname = usePathname()
  return (
    <div className={styles.wrapper}>
      <p className={styles.picture}></p>
      <div className={styles.content}>
        <Title className={styles.title}>{title}</Title>
        <Link href={`${pathname}/registration`}>
          <Button className={styles.accept}>Участвовать</Button>
        </Link>
        <Tag className={styles.tag}>тэг мероприятия</Tag>
        <div className={styles.itemsIcon}>
          <div className={styles.item}>
            <Image src={dateIcon} alt={'dateIcon'}/>
            <p className={styles.info}>{date}</p>
          </div>
          <div className={styles.item}>
            <Image src={locationIcon} alt={'locationIcon'}/>
            <div className={`${styles.info} ${styles.locationInfo}`}>
              <p className={`${styles.city} ${styles.topInfo}`}>{city}</p>
              <p className={`${styles.street} ${styles.botInfo}`}>{street}</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={prizeIcon} alt={'prizeIcon'}/>
            <div className={`${styles.info} ${styles.prizeInfo}`}>
              <p className={`${styles.prize} ${styles.topInfo}`}>Призовой фонд:</p>
              <p className={`${styles.size} ${styles.botInfo}`}>{prize}</p>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}