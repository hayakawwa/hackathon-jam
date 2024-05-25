import Information from "@/components/Event/Information/Information";
import styles from './Event.module.scss'
import Map from "@/components/Event/Map/Map";
import Requirements from "@/components/Event/Requirements/Requirements";
export default function EventItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>Каталог событий / </div>
      <div className={styles.content}>
        <Information/>
        <div className={styles.subInfo}>
          <Map/>
          <Requirements/>
        </div>
      </div>
    </div>
  )
}