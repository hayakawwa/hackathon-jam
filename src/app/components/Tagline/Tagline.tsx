import Button from "@/app/components/ui-kit/Button/Button";
import styles from './Tagline.module.scss'
export default function Tagline() {
  return (
    <div className={styles.wrapper}>
      <p>Инновации начинаются здесь: вдохновляй, создавай, побеждай!</p>
      <Button width={273}>Участвовать</Button>
    </div>
  )
}