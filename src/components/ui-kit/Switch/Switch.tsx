import styles from './Switch.module.scss'
import {Dispatch, SetStateAction, useState} from "react";
interface SwitchProps {
  className?: string
  setChecked: Dispatch<SetStateAction<boolean>>
}

export default function Switch({className, setChecked}: SwitchProps) {

  return (
    <label className={`${styles.switch} ${className}`}>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <span className={styles.slider}></span>
    </label>
  )
}