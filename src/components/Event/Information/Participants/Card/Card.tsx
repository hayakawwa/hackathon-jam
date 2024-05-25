import styles from './Card.module.scss'
import Image from "next/image";
import avatar from '@/assets/avatar.png'
import Tag from "@/components/ui-kit/Tag/Tag";

interface CardProps {
  className?: string
}
export default function Card({className}: CardProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.content}>
        <Image src={avatar} alt={'avatar'} className={styles.avatar}/>
        <p className={`${styles.lastName} ${styles.name}`}>Кузнецова</p>
        <p className={`${styles.firstName} ${styles.name}`}>Анастасия</p>
        <div className={styles.tags}>
          <Tag className={styles.tag}>Adobe Illustrator</Tag>
          <Tag className={styles.tag}>Дизайн</Tag>
          <Tag className={styles.tag}>Figma</Tag>
        </div>
      </div>
    </div>
  )
}