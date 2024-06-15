import Image from "next/image";
import avatar from '@/assets/avatar.jpg'
import styles from './MateCard.module.scss'

interface MateCardProps {
  firstName?: string
  lastName?: string
}
export default function MateCard({firstName, lastName}: MateCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Image src={avatar} alt={'avatar'} className={styles.avatar}/>
        <p className={`${styles.lastName} ${styles.name}`}>{lastName}</p>
        <p className={`${styles.firstName} ${styles.name}`}>{firstName}</p>
      </div>
    </div>
  )
}