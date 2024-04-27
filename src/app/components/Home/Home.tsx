import Header from "@/app/components/Home/Header/Header";
import Tagline from "@/app/components/Home/Tagline/Tagline";
import EventsDirectory from "@/app/components/Home/EventsDirectory/EventsDirectory";
import React from "react";
import styles from './Header.module.scss'

export default function Home() {
  return (
    <div className={styles.window}>
      <Header />
      <Tagline />
      <EventsDirectory />
    </div>
  )
}