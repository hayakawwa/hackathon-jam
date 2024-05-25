import styles from './Information.module.scss'
import MainInfo from "@/components/Event/Information/MainInfo/MainInfo";
import Description from "@/components/Event/Information/Description/Description";
import Partners from "@/components/Event/Information/Partners/Partners";
import Participants from "@/components/Event/Information/Participants/Participants";

export default function Information() {
  return (
    <div className={styles.wrapper}>
      <MainInfo />
      <Description />
      <Partners />
      <Participants />
    </div>
  )
}