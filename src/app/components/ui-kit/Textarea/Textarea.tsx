import cls from './Textarea.module.scss';
import {FC} from "react";

export interface ITextareaProps {
    name: string
    placeholder?: string
    children?: string
}

const Textarea: FC<ITextareaProps> = ({name, children, placeholder}) => {
    return (
        <textarea className={cls.textarea} id={name} name={name} placeholder={placeholder}>{children}</textarea>
    );
}

export default Textarea;