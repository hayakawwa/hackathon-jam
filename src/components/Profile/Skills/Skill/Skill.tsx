'use client'

import cls from './Skill.module.scss';
import {FC} from "react";

interface ISkillProps {
    name: string;
}

const Skill: FC<ISkillProps> = ({name}) => {
    return (
        <div className={cls.skill}>
            {name}
        </div>
    )
}

export default Skill