import styles from './ParticipantReg.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import Input from "@/components/ui-kit/Input/Input";
import RegSelect from "@/components/EventRegistration/RegSelect/RegSelect";

interface ParticipantRegProp {
  participantNumber?: number
}

export default function ParticipantReg({participantNumber}: ParticipantRegProp) {
  const title = `Участник ${participantNumber}`

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>{title}</Title>
      <section className={styles.name}>
        <p className={styles.sign}>ФИО</p>
        <Input name={'ФИО'} className={styles.nameInput}/>
      </section>
      <section className={styles.subInfo}>
        <div className={styles.mail}>
          <p className={styles.sign}>Почта</p>
          <Input name={'Почта'} />
        </div>
        <div className={styles.role}>
          <p className={styles.sign}>Роль</p>
          <RegSelect options={['Разработчик', 'Дизайнер', 'Тимлид']}/>
        </div>
      </section>
    </div>
  )
}

