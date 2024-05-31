'use client'

import cls from './Header.module.scss'
import Button from "@/components/ui-kit/Button/Button";
import {FC} from "react";
import pencil from '@/assets/pencil.svg'
import Image from "next/image";
import avatarMock from '@/assets/avatar.png'

interface IHeaderProps {
    firstName: string,
    lastName: string,
    username: string,
    avatar: string,
    isCurrentProfile: boolean,
}

const Header: FC<IHeaderProps> = ({firstName, lastName, avatar, username, isCurrentProfile}) => {
    return (
        <section className={cls.wrapper}>
            <Image className={cls.avatar} src={avatarMock} alt={"Аватар"} width={220} height={220}/>
            <div className={cls.header}>
                <div className={cls.personalData}>
                    <h2 className={cls.name}>{lastName} {firstName}</h2>
                    <p className={cls.username}>@{username}</p>
                </div>
                {isCurrentProfile
                    ? <Button className={cls.editBtn}>Редактировать</Button>
                    : <Button className={cls.inviteBtn}>Пригласить в команду</Button>
                }
            </div>
        </section>
    )
}

export default Header;