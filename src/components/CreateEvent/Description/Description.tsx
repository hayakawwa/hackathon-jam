import styles from './Description.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Input from "@/components/ui-kit/Input/Input";
import React from "react";
import Textarea from "@/components/ui-kit/Textarea/Textarea";

interface DescriptionProps {
  setDesc: React.Dispatch<React.SetStateAction<string>>
}

export default function Description({setDesc}: DescriptionProps) {
  return (
    <div className={styles.descWrapper}>
      <div className={styles.desc}>
        <Title className={styles.title}>Описание</Title>
        <Input name={'описание'} placeholder='Добавить описание' onChange={(e) => setDesc(e.target.value)}/>
      </div>
    </div>
  )
}