import cls from './Input.module.scss'
import {FC} from "react";

interface IInputProps {
    placeholder: string,
    name: string,
    className?: string,
    value?: string,
    required?: boolean,
    isPassword?: boolean
}

// TODO: добавить отображение обязательных полей

const Input: FC<IInputProps> = ({placeholder, name, className = '', value, required = false, isPassword = false}) => {
    return (
        <input
            className={cls.input + className}
            type={isPassword ? 'password' : 'text'}
            placeholder={placeholder}
            name={name}
            value={value}
            required={required}
        />
    )
}

export default Input;