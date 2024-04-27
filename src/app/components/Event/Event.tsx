import Information from "@/app/components/Event/Information/Information";
import styles from './Event.module.scss'
import Map from "@/app/components/Event/Map/Map";
import Requirements from "@/app/components/Event/Requirements/Requirements";
export default function EventItem() {
  return (
    <div className={styles.wrapper}>
      <Information />
      <div className={styles.subInfo}>
        <Map />
        <Requirements />
      </div>
    </div>
  )
}