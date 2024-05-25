import cls from './Plate.module.scss'
import {FC} from "react";

export interface IPlateProps {
    value: string,
    name: string,
    title: string,
}

const Plate: FC<IPlateProps> = ({value, name, title}) => {
    return (
        <>
            <input className={cls.input} type="radio" id={value} name={name} value={value}/>
            <label className={cls.label} htmlFor={value}>{title}</label>
        </>
    )
};

export default Plate;