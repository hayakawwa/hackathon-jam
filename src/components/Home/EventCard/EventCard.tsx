import styles from './EventCard.module.scss'
import Image from "next/image";
import locationIcon from '@/assets/location-item.svg'
import Title from "@/components/ui-kit/Title/Title";
import Link from "next/link";
import {formattedDay} from "@/utils/utils";


export interface EventCardProps {
  name?: string
  start_date?: string
  end_date?: string
  location?: string
  tags?: string[]
  urid?: string
}

export default function EventCard({name, location, start_date, end_date, tags, urid}: EventCardProps) {
  const start_time = start_date && formattedDay(start_date)
  const end_time = end_date && formattedDay(end_date)

  return (
    <Link className={styles.wrapper} href={`home/${urid}`}>
      <p className={styles.picture}></p>
      <div className={styles.content}>
        <p className={styles.date}><span>{start_time}</span> - <span>{end_time}</span></p>
        <Title className={styles.title}>{name}</Title>
        <div className={styles.locationWrapper}>
          <Image src={locationIcon} alt={'locationIcon'}/>
          <div className={styles.location}>{location}</div>
        </div>
        <div className={styles.tags}>
          {tags?.map((tag, index) => (
            <p key={index} className={styles.tag}>{tag}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}