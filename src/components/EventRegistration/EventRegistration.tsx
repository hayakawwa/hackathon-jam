import styles from './EventRegistration.module.scss'
import Title from "@/components/ui-kit/Title/Title";
import RegSelect from "@/components/EventRegistration/RegSelect/RegSelect";
import ParticipantReg from "@/components/EventRegistration/ParticipantReg/ParticipantReg";
import Button from "@/components/ui-kit/Button/Button";

export default function EventRegistration() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title className={styles.title}>Регистрация на мероприятие</Title>
        <p className={styles.req}>Требования к команде: <span>5 человек</span></p>
        <p className={styles.people}>Заполнено: <span>5 человек</span></p>
        <div className={styles.team}>
          <p className={styles.teamName}>Название команды</p>
          <RegSelect />
        </div>
        <ParticipantReg />
        <ParticipantReg />
        <ParticipantReg />
        <ParticipantReg />
        <ParticipantReg />
        <Button className={styles.buttonReg}>Зарегистрироваться</Button>
      </div>
    </div>
  )
}