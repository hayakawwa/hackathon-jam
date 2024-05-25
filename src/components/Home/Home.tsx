import React from "react";
import styles from './Home.module.scss'
import Tagline from "@/components/Home/Tagline/Tagline";
import EventsDirectory from "@/components/Home/EventsDirectory/EventsDirectory";

export default function Home() {
  return (
    <div className={styles.window}>
      <Tagline />
      <EventsDirectory />
    </div>
  )
}