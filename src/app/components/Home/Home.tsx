import Header from "@/app/components/Home/Header/Header";
import Tagline from "@/app/components/Tagline/Tagline";
import EventsDirectory from "@/app/components/Home/EventsDirectory/EventsDirectory";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Tagline />
      <EventsDirectory />
    </>
  )
}