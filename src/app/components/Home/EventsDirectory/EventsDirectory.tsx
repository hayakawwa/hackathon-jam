import Title from "@/app/components/ui-kit/Title/Title";
import Select from "@/app/components/ui-kit/Select/Select";
import reset from '@/app/assets/reset-arrow.svg'
import Image from "next/image";
import styles from './EventsDirectory.module.scss'
import Input from "@/app/components/ui-kit/Input/Input";
import EventCard from "@/app/components/Home/EventCard/EventCard";
export default function EventsDirectory() {
  return (
    <>
      <section className={styles.header}>
        <Title value={'Каталог событий'}/>
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
        <Input placeholder={'Найдите мероприятие'} name={'?'} width={'100%'}/>
      </section>
      <section className={styles.eventsContainer}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </section>

    </>

  )
}