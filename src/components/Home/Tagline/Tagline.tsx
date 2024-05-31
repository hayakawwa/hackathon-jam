import styles from './Tagline.module.scss'
import React from "react";
import Button from "@/components/ui-kit/Button/Button";
export default function Tagline() {
  return (
    <div className={styles.wrapper}>
      <p>Хакатоны начинаются здесь: вдохновляй, создавай, побеждай!</p>
      <Button className={styles.btn}>Участвовать</Button>
    </div>
  )
}