import styles from './Description.module.scss'
import Title from "@/components/ui-kit/Title/Title";

interface DescriptionProps {
  desc?: string
}

export default function Description({desc}: DescriptionProps) {
  return (
    <div className={styles.content}>
      <Title className={styles.title}>Описание</Title>
      <div className={styles.description}>{desc}</div>
    </div>
  )
}