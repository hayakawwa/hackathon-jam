import Image from "next/image";
import map from '@/app/assets/Map.png'
import styles from './Map.module.scss'
export default function Map() {
  return (
    <Image src={map} alt={'map'} className={styles.map}/>
  )
}