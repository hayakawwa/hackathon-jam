'use client'

import './globals.scss';
import './reset.scss';
import styles from './background.module.scss'
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";
import {BLUE_BACKGROUND} from "@/constants/consts";
import Header from "@/components/Header/Header";
import ProviderStore from "@/components/ProviderStore/ProviderStore";
import Auth from "@/components/Auth/Auth";


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  const currentPathname = usePathname()

  return (
    <ProviderStore>
      <Auth>
        <html lang="en">
        <body className={BLUE_BACKGROUND.includes(currentPathname) ? styles.blue : styles.white}>
        <Header/>
        {children}
        </body>
        </html>
      </Auth>
    </ProviderStore>
  );
}

