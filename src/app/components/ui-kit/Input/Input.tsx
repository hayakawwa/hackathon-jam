import cls from './Input.module.scss'
import {FC} from "react";

export interface IInputProps {
  placeholder: string,
  name?: string,
  borderRadius?: string,
  className?: string,
  value?: string,
  required?: boolean,
  width?: string | number,
  height?: string
  isPassword?: boolean
}

// TODO: добавить отображение обязательных полей

const Input: FC<IInputProps> = ({placeholder, name, className = '', value,
                                  required = false, borderRadius = '20px', width = '100%', isPassword, height}) => {
    return (
            <input
                className={`${cls.input} ${className}`}
                type={isPassword ? 'password' : 'text'}
                placeholder={placeholder}
                name={name}
                id={name}
                required={required}
                style={{height: height, width: width, borderRadius: borderRadius}}
            />
    )
}

export default Input;

