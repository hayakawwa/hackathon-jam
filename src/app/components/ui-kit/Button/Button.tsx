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


}

const Button: FC<IButtonProps> = ({children, width, onClick,
                                      backgroundColor= '', color,
                                      border, padding = '16px', borderRadius = '12px', className}) => {
    return (
        <button
            className={`${cls.button} ${className}`}
            style={{width: width, backgroundColor: backgroundColor, color: color,
                border: border, padding: padding, borderRadius: borderRadius}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;