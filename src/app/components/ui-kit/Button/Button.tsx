import cls from './Button.module.scss';
import React, {FC} from "react";

interface IButtonProps {
    children: string,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
    width?: string | number,
    backgroundColor?: string,
    color?: string,
    border?: string,
    padding?: string,
    borderRadius?: string,
    className?: string
    isSubmit?: boolean
}

const Button: FC<IButtonProps> = ({ isSubmit, children, width,
                                      onClick, backgroundColor = '', color,
                                      border, padding = '16px', borderRadius = '12px', className
                                  }) => {
    return (
        <button
            className={`${cls.button} ${className}`}
            style={{
                width: width, backgroundColor: backgroundColor, color: color,
                border: border, padding: padding, borderRadius: borderRadius
            }}
            onClick={onClick}
            type={isSubmit ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
};

export default Button;