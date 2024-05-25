'use client'

import styles from './Header.module.scss'
import logoBlack from '@/assets/logo-black.png'
import logoWhite from '@/assets/logo-white.png'
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui-kit/Button/Button";
import {usePathname} from "next/navigation";
import {BLUE_BACKGROUND} from "@/constants/consts";
export default function Header() {
  const pathname = usePathname()

  return (
    <nav className={styles.header}>
      {BLUE_BACKGROUND.includes(pathname) ?
        <Image src={logoWhite} alt={'logo'} className={styles.logo}/> :
        <Image src={logoBlack} alt={'logo'} className={styles.logo}/>
      }
      {!['/register', '/login'].includes(pathname) &&
      <div className={styles.buttons}>
        <Link href={''}>
          <Button className={`${styles.loginBtn} ${!BLUE_BACKGROUND.includes(pathname) ? styles.loginBtnWhite : ''}`}>Войти</Button>
        </Link>
        <Link href={'/register'}>
          <Button className={`${styles.registerBtn} ${!BLUE_BACKGROUND.includes(pathname) ? styles.registerBtnWhite : ''}`}>Зарегистрироваться</Button>
        </Link>
      </div>}
    </nav>
  )
}