'use client'

import cls from './Profile.module.scss'
import Header from "@/components/Profile/Header/Header";
import Information from "@/components/Profile/Information/Information";
import Skills from "@/components/Profile/Skills/Skills";
import About from "@/components/Profile/About/About";

export default function Profile () {
    return (
        <main className={cls.main}>
            <div className={cls.cover}></div>
            <div className={cls.mainInfo}>
                <Header/>
                <div className={cls.blocks}>
                    <Information className={cls.block}/>
                    <Skills className={cls.block}/>
                    <About className={cls.block}/>
                </div>
            </div>
        </main>
    )
}