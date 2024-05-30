import cls from './Textarea.module.scss';
import {ChangeEvent, FC} from "react";

export interface ITextareaProps {
    name: string
    placeholder?: string
    children?: string
    className?: string
    onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void,
}

const Textarea: FC<ITextareaProps> = ({name, children, placeholder, className, onChange}) => {
    return (
        <textarea onChange={onChange} className={`${cls.textarea} ${className}`} id={name} name={name} placeholder={placeholder}>{children}</textarea>
    );
}

export default Textarea;