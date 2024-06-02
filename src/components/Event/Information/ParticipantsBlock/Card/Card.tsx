import styles from './Card.module.scss'
import Image from "next/image";
import avatar from '@/assets/avatar.jpg'
import Tag from "@/components/ui-kit/Tag/Tag";

interface CardProps {
  className?: string
  lastName?: string
  firstName?: string
}

const TAGS = [1,2,3]
export default function Card({className, lastName, firstName}: CardProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.content}>
        <Image src={avatar} alt={'avatar'} className={styles.avatar}/>
        <p className={`${styles.lastName} ${styles.name}`}>{lastName}</p>
        <p className={`${styles.firstName} ${styles.name}`}>{firstName}</p>
        <div className={styles.tags}>
          {TAGS.map((item, index) => (
            <Tag key={index} className={styles.tag}>Заглушка</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}