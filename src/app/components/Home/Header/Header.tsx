import Button from "@/app/components/ui-kit/Button/Button";
import styles from './Header.module.scss'
import logo from '../../../assets/logo-tmp.svg'
import Image from "next/image";
export default function Header() {
  return (
    <nav className={styles.header}>
      <Image src={logo} alt={'logo'} className={styles.logo}/>
      <div className={styles.buttons}>
        <Button width={126} border='1px solid white' padding='16px'>Войти</Button>
        <Button width={327} backgroundColor='white' color='black' padding='16px'>Зарегистрироваться</Button>
      </div>
    </nav>
  )
}