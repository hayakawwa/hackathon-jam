import Image from "next/image";
import mapImage from '@/assets/Map.png'
import styles from './MapContainer.module.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function MapContainer() {

  return (
    // <YMaps>
    //   <div className={styles.map}>
    //     <Map defaultState={{ center: [56.837760, 60.659961], zoom: 16}} height={416} width={'100%'} style={{zIndex: -1}} />
    //   </div>
    // </YMaps>
    <Image src={mapImage} alt={'map'} className={styles.map}/>
  )
}