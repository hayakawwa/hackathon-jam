import styles from "@/components/Home/EventsDirectory/EventFilters/Select/Select.module.scss";
import Checkbox from "@/components/ui-kit/Checkbox/Checkbox";
import {useAppSelector} from "@/hooks/hooks";
import {getActiveFilters} from "@/store/selectors/eventFiltersSelector";

interface FilersItemProps {
  text?: string
  onClick?: () => void
}
export default function FilterItem({text, onClick}: FilersItemProps) {
  const currentItem = useAppSelector(getActiveFilters).filter(item => item.value === text)[0]

  return (
    <li className={styles.item}>
      <Checkbox onClick={onClick} checked={currentItem?.checked}/>
      <span className={styles.itemText}>{text}</span>
    </li>
  )
}