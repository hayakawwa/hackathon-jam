import cls from './Button.module.scss';
import React, {FC} from "react";

interface IButtonProps {
    children: string,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
    width?: string | number,
}

const Button: FC<IButtonProps> = ({children, width, onClick}) => {
    return (
        <button
            className={cls.button}
            style={{width: width}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;