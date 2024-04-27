import Button from "@/app/components/ui-kit/Button/Button";
import styles from './Tagline.module.scss'
export default function Tagline() {
  return (
    <div className={styles.wrapper}>
      <p>Инновации начинаются здесь: вдохновляй, создавай, побеждай!</p>
      <Button width={209} backgroundColor='rgba(231, 255, 67, 1)' padding='20px' color='black' borderRadius='16px'>Участвовать</Button>
    </div>
  )
}