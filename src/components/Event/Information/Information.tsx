import styles from './Information.module.scss'
import MainInfo, {EventProps} from "@/components/Event/Information/MainInfo/MainInfo";
import Description from "@/components/Event/Information/Description/Description";
import Partners from "@/components/Event/Information/Partners/Partners";
import Participants from "@/components/Event/Information/Participants/Participants";

interface InformationProps {
  mainInfo?: EventProps
}

export default function Information({mainInfo}: InformationProps) {
  return (
    <div className={styles.wrapper}>
      <MainInfo title={mainInfo?.title} street={mainInfo?.street} city={mainInfo?.city} date={mainInfo?.date} prize={mainInfo?.prize}/>
      <Description />
      <Partners />
      <Participants />
    </div>
  )
}