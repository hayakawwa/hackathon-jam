import cls from './Title.module.scss';
import {FC} from "react";
import exp from "node:constants";

interface ITitleProps {
    value: string,
    className?: string,
}

const Title: FC<ITitleProps> = ({value, className = ''}) => {
    return (
        <h1
            className={cls.header + className}
        >
            {value}
        </h1>
    )
}

export default Title;