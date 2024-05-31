'use client'

import cls from './About.module.scss';
import {FC} from "react";

interface IAboutProps {
    className?: string;
    text: string;
}

const About: FC<IAboutProps> = ({className, text}) => {
    return (
        <section className={`${cls.wrapper} ${className}`}>
            <h2 className={cls.header}>О себе</h2>
            <p className={cls.text}>{text}</p>
        </section>
    )
}

export default About;