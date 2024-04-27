import styles from './Requirements.module.scss'
import Title from "@/app/components/ui-kit/Title/Title";
import teamIcon from '@/app/assets/teamIcon.svg'
import Image from "next/image";


export default function Requirements() {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>Требования к команде</Title>
      <div className={styles.iconGroup}>
        <Image src={teamIcon} alt={'teamIcon'} />
        <p className={styles.count}>5 человек</p>
      </div>
      <Title className={styles.teamTitle}>Состав команды: </Title>
      <div className={styles.team}>
        <p className={styles.item}>Разработчик</p>
        <p className={styles.item}>Аналитик</p>
        <p className={styles.item}>Дизайнер</p>
      </div>
    </div>
  )
}