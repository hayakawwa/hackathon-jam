'use client'

import cls from './Header.module.scss'
import Button from "@/components/ui-kit/Button/Button";
import {FC} from "react";
import pencil from '@/assets/pencil.svg'
import Image from "next/image";

interface IHeaderProps {
    firstName: string,
    lastName: string,
    username: string,
    avatar: string,
}

const Header: FC<IHeaderProps> = ({firstName, lastName, avatar, username}) => {
    return (
        <section className={cls.wrapper}>
            <img className={cls.avatar} src="https://placeholder.com/220" alt="Аватар" width={220} height={220}/>
            <div className={cls.header}>
                <div className={cls.personalData}>
                    <h2 className={cls.name}>{lastName} {firstName}</h2>
                    <p className={cls.username}>@{username}</p>
                </div>
                {/*<Button className={cls.inviteBtn}>Пригласить в команду</Button>*/}
                <Button className={cls.editBtn}>Редактировать</Button>
            </div>
        </section>
    )
}

export default Header;