import Select from "@/app/components/ui-kit/Select/Select";
import reset from '@/app/assets/reset-arrow.svg'
import Image from "next/image";
import styles from './EventsDirectory.module.scss'
import Input from "@/app/components/ui-kit/Input/Input";
import EventCard, {EventCardProps} from "@/app/components/Home/EventCard/EventCard";

const mockEventsData: EventCardProps[] = [
  {
    id: 1,
    title: 'Хакатон: кожаный мяч',
    date: '16 июня - 20 июня',
    location: {
      street: 'ул. Комсомольская, 70',
      city: 'Екатеринбург'
    },
    tag: 'Веб-разработка',
  },
  {
    id: 2,
    title: 'Супер крутой хакатон',
    date: '16 мая - 18 мая',
    location: {
      street: 'ул. Мира, 19',
      city: 'Архангельск'
    },
    tag: 'Мобильная разработка',
  },
  {
    id: 3,
    title: 'Покори мир',
    date: '15 апреля - 17 апреля',
    location: {
      street: 'ул. Финика, 44',
      city: 'Мурманск'
    },
    tag: 'Робототехника',
  },
  {
    id: 4,
    title: 'Уральский областной хакатон',
    date: '15 января - 17 января',
    location: {
      street: 'ул. Фурманова, 228',
      city: 'Саратов'
    },
    tag: 'No-code',
  }
]

export default function EventsDirectory() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={styles.headerWrapper}>
          <p className={styles.header}>Каталог событий</p>
          <div className={styles.filters}>
            <Select>Даты</Select>
            <Select>Локация</Select>
            <Select>Формат</Select>
            <Select>Сфера</Select>
            <Image src={reset} alt={'reset'}/>
          </div>
        </section>
        <section className={styles.activeFilters}>
          <p>Екатеринбург</p>
        </section>
        <section className={styles.input}>
          <Input placeholder={'Найти мероприятие'} name={'searchInput'} width='100%' height='80px'  />
        </section>
        <section className={styles.eventsContainer}>
          {mockEventsData.map((item) => (
            <EventCard key={item.id} id={item.id} tag={item.tag} date={item.date} title={item.title} location={item.location}/>
          ))}
        </section>
      </div>
    </div>

  )
}