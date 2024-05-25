import cls from './Button.module.scss';
import React, {FC} from "react";

interface IButtonProps {
    children: string,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string
    isSubmit?: boolean
    disabled?: boolean
}

const Button: FC<IButtonProps> = ({ isSubmit, children, onClick, className, disabled}) => {
    return (
        <button
            className={`${cls.button} ${className}`}
            onClick={onClick}
            type={isSubmit ? 'submit' : 'button'}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;