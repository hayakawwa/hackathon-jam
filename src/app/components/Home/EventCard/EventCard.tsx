import styles from './EventCard.module.scss'
import Title from "@/app/components/ui-kit/Title/Title";
import Image from "next/image";
import location from '@/app/assets/location-item.svg'

export default function EventCard() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.avatar}></p>
      <p className={styles.date}>24 июня - 26 июня</p>
      <h1 className={styles.title}>Название хакатона</h1>
      <section className={styles.locationWrapper}>
        <Image src={location} alt={'location'} />
        <div className={styles.location}>
          <p className={styles.city}>Екатеринбург, Россия</p>
          <p className={styles.street}>ул. Мира, 19</p>
        </div>
      </section>
      <p className={styles.tag}>тэг мероприятия</p>
    </div>
  )
}