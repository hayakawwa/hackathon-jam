import styles from "@/components/CreateEvent/CreateEvent.module.scss";
import Title from "@/components/ui-kit/Title/Title";
import Input from "@/components/ui-kit/Input/Input";
import React from "react";

interface RequirementsProps {
  setCount:  React.Dispatch<React.SetStateAction<number>>
}

export default function Requirements({setCount}: RequirementsProps) {
  return (
    <section className={styles.req}>
      <Title className={styles.reqTitle}>Требования к команде</Title>
      <div className={styles.count}>
        <p className={styles.inputName}>Количество человек</p>
        <Input name={'количество человек'} required={true} onChange={(e) => setCount(Number(e.target.value))}/>
      </div>
      <div className={styles.lineUp}>
        <p className={styles.inputName}>Состав команды</p>
        <Input name={'состав команды'}/>
      </div>
    </section>
  )
}