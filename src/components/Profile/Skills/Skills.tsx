'use client'

import cls from './Skills.module.scss'
import {FC} from "react";
import Skill from "@/components/Profile/Skills/Skill/Skill";
import Tag from "@/components/ui-kit/Tag/Tag";
import {useGetSkillsQuery} from "@/api/profileApi";

interface ISkillsProps {
    className?: string;
    username: string;
}

const Skills: FC<ISkillsProps> = ({className, username}) => {
    const {data, isLoading, isSuccess} = useGetSkillsQuery(username);

    return (
        <section className={`${cls.wrapper} ${className}`}>
            {isSuccess &&
                <>
                    <h2 className={cls.header}>Навыки</h2>
                    <div className={cls.skills}>
                        {data!.skills && data!.skills.map((skill, index) => (
                            <Tag key={index}>{skill}</Tag>
                        ))}
                    </div>
                </>
            }
        </section>
    )
}

export default Skills;