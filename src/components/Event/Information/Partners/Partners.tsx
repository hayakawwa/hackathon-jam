import styles from './Partners.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Image from "next/image";
import sber from '@/assets/sber.png'
import urfu from '@/assets/urfu.png'
import alfa from '@/assets/alfa.png'


export default function Partners() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title className={styles.title}>Партнеры</Title>
        <div className={styles.partners}>
          <div className={styles.partner}>
            <Image src={sber} alt={'Сбербанк'}/>
          </div>
          <div className={styles.partner}>
            <Image src={urfu} alt={'УрФУ'}/>
          </div>
          <div className={styles.partner}>
            <Image src={alfa} alt={'Альфа'}/>
          </div>
        </div>
      </div>
    </div>
  )
}