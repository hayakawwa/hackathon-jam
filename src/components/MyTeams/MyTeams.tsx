import Title from "@/components/ui-kit/Title/Title";
import TeamCard from "@/components/MyTeams/TeamCard/TeamCard";
import styles from './MyTeams.module.scss'

const mockMates = [{firstName: 'Виталий', lastName: 'Цаль'}, {firstName: 'Виталий', lastName: 'Цаль'}, {firstName: 'Виталий', lastName: 'Цаль'}, {firstName: 'Виталий', lastName: 'Цаль'}, {firstName: 'Виталий', lastName: 'Цаль'}]
export default function MyTeams() {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>Мои команды</Title>
      <div className={styles.teams}>
        <TeamCard eventName={'TechFusion Innovate-a-Thon'} teamMates={mockMates} teamName={'ViKa'} />
      </div>
    </div>
  )
}