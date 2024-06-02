'use client'

import styles from "./RegSelect.module.scss";
import Image from "next/image";
import selectArrow from "@/assets/selectArrow.svg";
import React, {useState} from "react";

interface RegSelectProps {
  className?: string
  options: string[]
}

export default function RegSelect({className, options}: RegSelectProps) {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [activeSelect, setActiveSelect] = useState<string>('')

  const onArrowClick = () => {
    setModalActive(!modalActive)
  }

  const onItemClick = (value: string) => {
    setActiveSelect(value)
    setModalActive(false)
  }

  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      <div className={styles.selectBtn} onClick={onArrowClick}>
        <span>{activeSelect}</span>
        <div>
          <Image src={selectArrow} alt={'selectArrow'}
                 className={`${styles.selectArrow} ${modalActive ? styles.arrowActive : ''}`}/>
        </div>
      </div>
      <ul className={`${styles.options} ${modalActive ? styles.modalActive : ''}`}>
        {options!.map((item) => (
          <li onClick={() => onItemClick(item)} className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}