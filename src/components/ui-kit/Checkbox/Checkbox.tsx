import styles from "./Checkbox.module.scss";
import React from "react";

interface ICheckbox {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
  checked?: boolean
}

export default function Checkbox({onClick, checked}: ICheckbox) {
  // @ts-ignore
  return <input className={styles.checkbox} checked={checked} onClick={onClick} type={'checkbox'}/>
}