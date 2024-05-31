'use client'

import cls from "./Information.module.scss";
import {FC} from "react";
import location from '@/assets/ProfileLocation.svg'
import work from '@/assets/ProfileWork.svg'
import tg from '@/assets/ProfileTg.svg'
import Image from "next/image";

interface IInformationProps {
    className?: string;
}

const Information: FC<IInformationProps> = ({className}) => {
    return (
        <section className={`${cls.wrapper} ${className}`}>
            <h2 className={cls.header}>Информация</h2>
            <div className={cls.blocks}>
                <div className={cls.block}>
                    <div className={cls.icon}>
                        <Image src={location} alt="Населенный пункт"/>
                    </div>
                    <p className={cls.text}>Екатеринбург, Россия</p>
                </div>
                <div className={cls.block}>
                    <div className={cls.icon}>
                        <Image src={work} alt="Опыт работы"/>
                    </div>
                    <div className={cls.textBlock}>
                        <p className={cls.text}>Работает в IT</p>
                        <p className={cls.subtext}>Опыт: 2 месяца</p>
                    </div>
                </div>
                <div className={cls.block}>
                    <div className={cls.icon}>
                        <Image src={tg} alt="Телеграм"/>
                    </div>
                    <div className={cls.textBlock}>
                        <p className={cls.text}>Телеграм</p>
                        <p className={cls.subtext}>@margo.sof</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;