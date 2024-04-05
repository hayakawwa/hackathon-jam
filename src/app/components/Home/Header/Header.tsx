import Button from "@/app/components/ui-kit/Button/Button";
import styles from './Header.module.scss'
export default function Header() {
  return (
    <nav className={styles.header}>
      <p className={styles.logo}>лого</p>
      <div className={styles.buttons}>
        <Button width={126}>Войти</Button>
        <Button width={327}>Зарегистрироваться</Button>
      </div>
    </nav>
  )
}