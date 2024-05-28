import styles from './EventCard.module.scss'
import Image from "next/image";
import locationIcon from '@/assets/location-item.svg'
import Title from "@/components/ui-kit/Title/Title";
import Link from "next/link";

export interface EventCardProps {
  id: number
  title?: string
  date?: string
  city?: string
  street?: string
  tag?: string
}

export default function EventCard({title, street, city, date, tag, id}: EventCardProps) {
  const pathname = title?.toLowerCase().replace(/ /g, '_')

  return (
    <Link className={styles.wrapper} href={`home/${pathname}`}>
      <p className={styles.picture}></p>
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <Title className={styles.title}>{title}</Title>
        <div className={styles.locationWrapper}>
          <Image src={locationIcon} alt={'locationIcon'}/>
          <div className={styles.location}>
            <p className={styles.city}>{city}</p>
            <p className={styles.street}>{street}</p>
          </div>
        </div>
        <p className={styles.tag}>{tag}</p>
      </div>
    </Link>
  )
}