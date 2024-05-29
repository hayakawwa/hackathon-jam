import styles from './Information.module.scss'
import MainInfo, {EventProps} from "@/components/Event/Information/MainInfo/MainInfo";
import Description from "@/components/Event/Information/Description/Description";
import Partners from "@/components/Event/Information/Partners/Partners";
import Participants from "@/components/Event/Information/Participants/Participants";
import {EventSchema} from "@/store/types/EventSchema";

interface InformationProps {
  data?: EventSchema
}

export default function Information({data}: InformationProps) {
  return (
    <div className={styles.wrapper}>
      <MainInfo title={data?.name} start_date={data?.start_time} location={data?.location}
                end_date={data?.end_time} prize={data?.prize} tags={data?.tags}/>
      <Description desc={data?.desc}/>
      <Partners />
      <Participants />
    </div>
  )
}