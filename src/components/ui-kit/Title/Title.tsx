import cls from './Title.module.scss';
import {FC} from "react";

interface ITitleProps {
    children?: string,
    className?: string
}

const Title: FC<ITitleProps> = ({children, className}) => {
    return (
        <h1 className={`${cls.header} ${className}`}>
            {children}
        </h1>
    )
}

export default Title;