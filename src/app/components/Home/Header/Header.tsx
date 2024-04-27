import Button from "@/app/components/ui-kit/Button/Button";
import styles from './Header.module.scss'
import logo from '../../../assets/logo-tmp.svg'
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <nav className={styles.header}>
      <Image src={logo} alt={'logo'} className={styles.logo}/>
      <div className={styles.buttons}>
        <Link href={''}>
          <Button width={126} border='1px solid white' padding='16px' color='white'>Войти</Button>
        </Link>
        <Link href={'/register'}>
          <Button width={327} backgroundColor='white' color='black' padding='16px'>Зарегистрироваться</Button>
        </Link>
      </div>
    </nav>
  )
}