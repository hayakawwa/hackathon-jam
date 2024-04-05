import styles from './Select.module.scss'

interface Props {
  children: string
}
export default function Select({children}: Props) {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        <option selected disabled>{children}</option>
      </select>
    </div>
  )
}