'use client'

import cls from './Header.module.scss'
import Button from "@/components/ui-kit/Button/Button";

export default function Header () {
    return (
        <section className={cls.wrapper}>
            <img className={cls.avatar} src="https://placeholder.com/220" alt="Аватар"/>
            <div className={cls.header}>
                <div className={cls.personalData}>
                    <h2 className={cls.name}>Кузнецова Анастасия</h2>
                    <p className={cls.username}>@n.kuz</p>
                </div>
                <Button className={cls.inviteBtn}>Пригласить в команду</Button>
            </div>
        </section>
    )
}