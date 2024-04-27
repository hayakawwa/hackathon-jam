import styles from './EventCard.module.scss'
import Image from "next/image";
import locationIcon from '@/app/assets/location-item.svg'
import Title from "@/app/components/ui-kit/Title/Title";
import Link from "next/link";

export interface EventCardProps {
  id: number
  title?: string
  date?: string
  location?: {
    city?: string
    street?: string
  }
  tag?: string
}

export default function EventCard({title, location, date, tag}: EventCardProps) {
  return (
    <Link className={styles.wrapper} href={'/event'}>
      <p className={styles.picture}></p>
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <Title className={styles.title}>{title}</Title>
        <div className={styles.locationWrapper}>
          <Image src={locationIcon} alt={'locationIcon'}/>
          <div className={styles.location}>
            <p className={styles.city}>{location?.city}</p>
            <p className={styles.street}>{location?.street}</p>
          </div>
        </div>
        <p className={styles.tag}>{tag}</p>
      </div>
    </Link>
  )
}