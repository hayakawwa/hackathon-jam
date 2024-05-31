import styles from './Information.module.scss'
import MainInfo, {EventProps} from "@/components/Event/Information/MainInfo/MainInfo";
import Description from "@/components/Event/Information/Description/Description";
import Partners from "@/components/Event/Information/Partners/Partners";
import ParticipantsBlock from "@/components/Event/Information/ParticipantsBlock/ParticipantsBlock";
import {EventSchema} from "@/store/types/EventSchema";
import {User} from "@/api/types";

interface InformationProps {
  data?: EventSchema
  users?: User[]
  pathname?: string
}

export default function Information({data, users, pathname}: InformationProps) {
  return (
    <div className={styles.wrapper}>
      <MainInfo title={data?.name} start_date={data?.start_time} location={data?.location}
                end_date={data?.end_time} prize={data?.prize} tags={data?.tags} organisators={data?.organisators}/>
      <Description desc={data?.desc}/>
      <Partners />
      <ParticipantsBlock pathname={pathname} users={users}/>
    </div>
  )
}