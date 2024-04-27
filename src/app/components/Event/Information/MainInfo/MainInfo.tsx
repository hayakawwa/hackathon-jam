import styles from "./MainInfo.module.scss";
import Title from "@/app/components/ui-kit/Title/Title";
import Button from "@/app/components/ui-kit/Button/Button";
import Image from "next/image";
import locationIcon from "@/app/assets/location-item.svg";
import dateIcon from '@/app/assets/date-icon.svg'
import prizeIcon from '@/app/assets/prize-icon.svg'


export default function MainInfo() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.picture}></p>
      <div className={styles.content}>
        <Title className={styles.title}>TechFusion Innovate-a-Thon</Title>
        <Button className={styles.accept}>Участвовать</Button>
        <p className={styles.tag}>тэг мероприятия</p>
        <div className={styles.itemsIcon}>
          <div className={styles.item}>
            <Image src={dateIcon} alt={'dateIcon'}/>
            <p className={styles.info}>15 июня - 17 августа</p>
          </div>
          <div className={styles.item}>
            <Image src={locationIcon} alt={'locationIcon'}/>
            <div className={`${styles.info} ${styles.locationInfo}`}>
              <p className={`${styles.city} ${styles.topInfo}`}>г. Астрахань</p>
              <p className={`${styles.street} ${styles.botInfo}`}>ул. Попова, 17</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={prizeIcon} alt={'prizeIcon'}/>
            <div className={`${styles.info} ${styles.prizeInfo}`}>
              <p className={`${styles.prize} ${styles.topInfo}`}>Призовой фонд:</p>
              <p className={`${styles.size} ${styles.botInfo}`}>100 тыс. рублей</p>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}