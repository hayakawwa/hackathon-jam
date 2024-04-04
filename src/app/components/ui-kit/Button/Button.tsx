import cls from './Button.module.scss';
import React, {FC} from "react";

interface IButtonProps {
    children: string,
    onClick: () => void,
    w?: string,
}

const Button: FC<IButtonProps> = ({children, w, onClick}) => {
    const handleOnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        onClick();
    }
    return (
        <button
            className={cls.button}
            style={{width: w}}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

export default Button;