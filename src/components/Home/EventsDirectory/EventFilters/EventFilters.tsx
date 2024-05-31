import styles from './EventFilters.module.scss'
import Select from './Select/Select';
import Image from "next/image";
import reset from '@/assets/reset-arrow.svg'
import {useAppDispatch} from "@/hooks/hooks";
import {activeFiltersActions} from "@/store/slices/FiltersSlices/activeFilters.slice";

const CITIES = ['Москва', 'Екатеринбург', 'Санкт-Петербург', 'Саратов', 'Коркино', 'Другое']
const DATES = ['Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь']
const FORMAT = ['Онлнай', 'Оффлайн']
const DIRECTIONS = ['Робототехника', 'IT', 'Machine Learning', 'AI']
export default function EventFilters() {
  const dispatch = useAppDispatch()

  const removeAll = () => {
    dispatch(activeFiltersActions.removeAll())
  }

  return (
    <div className={styles.filters}>
      <Select key={1} id={1} name={'Даты'} data={DATES}>Даты</Select>
      <Select key={2} id={2} name={'Локация'} data={CITIES}>Локация</Select>
      <Select key={3} id={3} name={'Формат'} data={FORMAT}>Формат</Select>
      <Select key={4} id={4} name={'Сфера'} data={DIRECTIONS}>Сфера</Select>
      <Image src={reset} alt={'reset'} className={styles.resetIcon} onClick={removeAll}/>
    </div>
  )
}