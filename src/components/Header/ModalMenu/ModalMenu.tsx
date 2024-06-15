import styles from './ModalMenu.module.scss'
import Image from "next/image";
import profile from '@/assets/profileIcon.svg'
import events from '@/assets/eventsIcon.svg'
import teams from '@/assets/teamIcon.svg'
import settings from '@/assets/settingIcon.svg'
import logout from '@/assets/logoutIcon.svg'
import Link from "next/link";
import {Dispatch, MutableRefObject, SetStateAction, useRef} from "react";
import {useOnClickOutside} from "usehooks-ts";

interface ModalMenuProps {
  active: boolean
  setActive:  Dispatch<SetStateAction<boolean>>
}
export default function ModalMenu({active, setActive}: ModalMenuProps) {
  return (
    <div className={`${styles.wrapper} ${active ? styles.active : ''}`}>
      <Link href={'/profile'} onClick={() => setActive(!active)} className={styles.menuItem}>
        <Image src={profile} alt={'profile'} />
        <p>Профиль</p>
      </Link>
      <Link href={'/'} onClick={() => setActive(!active)} className={styles.menuItem}>
        <Image src={events} alt={'events'}/>
        <p>Мои события</p>
      </Link>
      <Link href={'/my-teams'} onClick={() => setActive(!active)} className={styles.menuItem}>
        <Image src={teams} alt={'teams'}/>
        <p>Мои команды</p>
      </Link>
      <Link href={'/'} onClick={() => setActive(!active)} className={styles.menuItem}>
        <Image src={settings} alt={'setting'}/>
        <p>Настройки</p>
      </Link>
      <Link href={'/'} onClick={() => setActive(!active)} className={`${styles.menuItem} ${styles.logout}`}>
        <Image src={logout} alt={'logout'}/>
        <p>Выйти</p>
      </Link>
    </div>
  )
}