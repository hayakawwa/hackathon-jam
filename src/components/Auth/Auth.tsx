'use client'

import React, {useEffect} from "react";
import {useGetCurrentProfileMutation} from "@/api/profileApi";

export default function Auth({children}: Readonly<{ children: React.ReactNode; }>) {
  const [getCurrentProfile, {isLoading}] = useGetCurrentProfileMutation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      getCurrentProfile({
        access_token: localStorage.getItem('access_token') as string
      });
    }
  }, []);

  return (
    <>
      {children}
    </>
  )
}