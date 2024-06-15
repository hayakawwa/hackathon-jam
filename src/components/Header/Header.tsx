'use client'

import styles from './Header.module.scss'
import logoBlack from '@/assets/logo-black.png'
import logoWhite from '@/assets/logo-white.png'
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui-kit/Button/Button";
import {usePathname} from "next/navigation";
import {BLUE_BACKGROUND} from "@/constants/consts";
import notifications from '@/assets/notifications.svg';
import avatar from '@/assets/avatar.jpg'
import arrow from '@/assets/selectArrow.svg'
import {SyntheticEvent, useEffect, useRef, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {getProfileData} from "@/store/selectors/profileSelector";
import ModalMenu from "@/components/Header/ModalMenu/ModalMenu";
import {useOnClickOutside} from "usehooks-ts";

export default function Header() {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>()
  // const [isArrow, setIsArrow] = useState<boolean>(false)

  const pathname = usePathname()
  const currentProfileData = useAppSelector(getProfileData);
  const perm = currentProfileData.permissions

  const ref = useRef(null)

  // TODO: костыль, сделать получение профиля при первом рендеринге, а поле isAuth в store


  useEffect(() => {
    window.localStorage.getItem('access_token') ? setIsAuth(true) : setIsAuth(false)
  }, []);

  const handleArrowClick = () => {
    setModalActive(!modalActive)
  }

  const handleClickOutside = () => {
    setModalActive(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <nav className={styles.header}>
      <Link className={styles.logo} href={'/home'}>
        {BLUE_BACKGROUND.includes(pathname) ?
          <Image src={logoWhite} alt={'logo'} /> :
          <Image src={logoBlack} alt={'logo'} />
        }
      </Link>
      {!['/register', '/login'].includes(pathname) && !isAuth! && isAuth != undefined &&
      <div className={styles.buttons}>
        <Link href={'/login'}>
          <Button className={`${styles.loginBtn} ${!BLUE_BACKGROUND.includes(pathname) ? styles.loginBtnWhite : ''}`}>Войти</Button>
        </Link>
        <Link href={'/register'}>
          <Button className={`${styles.registerBtn} ${!BLUE_BACKGROUND.includes(pathname) ? styles.registerBtnWhite : ''}`}>Зарегистрироваться</Button>
        </Link>
      </div>
      }
      {isAuth &&
      <div className={styles.logged}>
        {perm == 1 &&
          <Link href={'/create-event'}>
            <Button className={styles.createEventBtn}>Создать мероприятие</Button>
          </Link>
        }
        <Image src={notifications} alt={'уведомления'}/>
        <div className={styles.avatarGroup}>
          <Link href={'/profile'}>
            <Image src={avatar} alt={'аватар'} className={styles.avatar}/>
          </Link>
          <div ref={ref}>
            <Image src={arrow} alt={'menu'} className={`${styles.arrow} ${modalActive ? styles.arrowActive : ''}`} onClick={handleArrowClick}/>
            <ModalMenu active={modalActive} setActive={setModalActive}/>
          </div>
        </div>
      </div>
      }
    </nav>
  )
}