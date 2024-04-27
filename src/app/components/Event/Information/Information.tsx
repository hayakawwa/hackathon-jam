import styles from './Information.module.scss'
import MainInfo from "@/app/components/Event/Information/MainInfo/MainInfo";
import Description from "@/app/components/Event/Information/Description/Description";

export default function Information() {
  return (
    <div className={styles.wrapper}>
      <MainInfo />
      <Description />
    </div>
  )
}