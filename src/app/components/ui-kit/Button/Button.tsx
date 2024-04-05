import cls from './Button.module.scss';
import React, {FC} from "react";

interface IButtonProps {
    children: string,
    onClick?: () => void,
    width?: string | number,
}

const Button: FC<IButtonProps> = ({children, width, onClick}) => {
    // const handleOnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    //     evt.preventDefault();
    //     onClick();
    // }
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