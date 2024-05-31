'use client'

import cls from './Skills.module.scss'
import {FC} from "react";
import Skill from "@/components/Profile/Skills/Skill/Skill";
import Tag from "@/components/ui-kit/Tag/Tag";

interface ISkillsProps {
    className?: string;
}

const Skills: FC<ISkillsProps> = ({className}) => {
    return (
        <section className={`${cls.wrapper} ${className}`}>
            <h2 className={cls.header}>Навыки</h2>
            <div className={cls.skills}>
                <Tag>react</Tag>
                <Tag>javascript</Tag>
                <Tag>хуйня</Tag>
                <Tag>падж</Tag>
                <Tag>дота 2</Tag>
                <Tag>моя любимая игра</Tag>
            </div>
        </section>
    )
}

export default Skills;