import styles from "./EventInfo.module.scss";
import Input from "@/components/ui-kit/Input/Input";
import Multiselect from "@/components/ui-kit/Multiselect/Multiselect";
import Image from "next/image";
import map from "@/assets/map-temp-create-page.png";
import React from "react";

interface EventInfoProps {
  setName:  React.Dispatch<React.SetStateAction<string>>
  setStartDate:  React.Dispatch<React.SetStateAction<string>>
  setEndDate:  React.Dispatch<React.SetStateAction<string>>
  setPrize:  React.Dispatch<React.SetStateAction<string>>
  setLocation:  React.Dispatch<React.SetStateAction<string>>
  setLink:  React.Dispatch<React.SetStateAction<string>>
  checked: boolean
}

export default function EventInfo({setName, setLocation, setPrize, setEndDate, setStartDate, setLink, checked}: EventInfoProps) {
  return (
    <section className={styles.info}>
      <div className={styles.mainInfo}>
        <div className={styles.eventName}>
          <p className={styles.inputName}>Название мероприятия</p>
          <Input name={'название мероприятия'} required={true} className={styles.input}
                 onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={styles.link}>
          <p className={styles.inputName}>Ссылка на мероприятие (в формате  «@ссылка»)</p>
          <Input name={'название мероприятия'} required={true} className={styles.input}
                 onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div className={styles.tags}>
          <p className={styles.inputName}>Тэги мероприятия</p>
          <Multiselect options={['test1', 'test2', 'test3']}/>
        </div>
        <div className={styles.dates}>
          <div className={styles.item}>
            <p className={styles.inputName}>Дата начала</p>
            <Input name={'дата начала'} required={true} onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div className={styles.item}>
            <p className={styles.inputName}>Дата окончания</p>
            <Input name={'дата окончания'} required={true} onChange={(e) => setEndDate(e.target.value)}/>
          </div>
        </div>
        <div className={styles.prize}>
          <p className={styles.inputName}>Призовой фонд</p>
          <Input name={'призовой фонд'} required={true} onChange={(e) => setPrize(e.target.value)}/>
        </div>
      </div>
      <div className={styles.location}>
        <p className={styles.inputName}>Локация</p>
        <Input name={'локация'} className={styles.locationInput} required={true} isDisabled={!checked}
               onChange={(e) => setLocation(e.target.value)}/>
        <Image src={map} alt={'карта'}/>
      </div>
    </section>
  )
}