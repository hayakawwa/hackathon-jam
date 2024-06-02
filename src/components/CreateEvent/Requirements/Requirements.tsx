import styles from "./Requirements.module.scss";
import Title from "@/components/ui-kit/Title/Title";
import Input from "@/components/ui-kit/Input/Input";
import React from "react";
import RegSelect from "@/components/EventRegistration/RegSelect/RegSelect";

interface RequirementsProps {
  setCount:  React.Dispatch<React.SetStateAction<number>>
}

export default function Requirements({setCount}: RequirementsProps) {
  return (
    <section className={styles.req}>
      <Title className={styles.reqTitle}>Требования к команде</Title>
      <p className={styles.inputName}>Количество человек</p>
      <div className={styles.count}>
        <div className={styles.item}>
          <RegSelect options={['Ровно', 'До']}/>
        </div>
        <div className={styles.item}>
          <Input name={'количество человек'} required={true} onChange={(e) => setCount(Number(e.target.value))}/>
        </div>
      </div>
      <div className={styles.lineUp}>
        <p className={styles.inputName}>Состав команды</p>
        <Input name={'состав команды'}/>
      </div>
    </section>
  )
}