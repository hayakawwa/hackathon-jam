import Information from "@/components/Event/Information/Information";
import styles from './Event.module.scss'
import Map from "@/components/Event/Map/Map";
import Requirements from "@/components/Event/Requirements/Requirements";
import {EventProps} from "@/components/Event/Information/MainInfo/MainInfo";
export default function EventItem() {

  const mockMainInfo: EventProps = {
    title: `TechFusion Innovate-a-Thon`,
    date: '24 декабря - 31 декабря',
    prize: '25 тыс. рублей',
    city: 'Екатеринбург',
    street: 'ул. Мира, 19'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>Каталог событий / <span className={styles.currentPage}>{mockMainInfo.title}</span></div>
      <div className={styles.content}>
        <Information mainInfo={mockMainInfo}/>
        <div className={styles.subInfo}>
          <Map/>
          <Requirements/>
        </div>
      </div>
    </div>
  )
}