import Title from "@/components/ui-kit/Title/Title";
import MateCard from "@/components/MyTeams/TeamCard/MateCard/MateCard";
import styles from './TeamCard.module.scss'
import Button from "@/components/ui-kit/Button/Button";

interface TeamMate {
  firstName?: string
  lastName?: string
}

interface TeamCardProps {
  eventName?: string
  teamName?: string
  teamMates?: TeamMate[]
}

export default function TeamCard({eventName, teamName, teamMates}: TeamCardProps) {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.eventName}>{eventName}</Title>
      <div className={styles.teamWrapper}>
        <div className={styles.teamNameWrapper}>
          <Title className={styles.teamName}>{teamName}</Title>
          <Button className={styles.btn}>Редактировать</Button>
        </div>
        <div className={styles.teamMates}>
          {teamMates?.map((mate) => (
            <MateCard firstName={mate.firstName} lastName={mate.lastName} />
          ))}
        </div>
      </div>
    </div>
  )
}