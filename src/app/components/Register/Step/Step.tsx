import RegisterSteps from "@/app/enums/RegisterSteps";
import {FC} from "react";
import {stepsData} from "@/app/components/Register/Step/StepsData";
import Title from "@/app/components/ui-kit/Title/Title";
import Input from "@/app/components/ui-kit/Input/Input";
import cls from './Step.module.scss'
import Plate from "@/app/components/ui-kit/Plate/Plate";
import Textarea from "@/app/components/ui-kit/Textarea/Textarea";

interface IStepProps {
    step: RegisterSteps
}

const Step: FC<IStepProps> = ({step}) => {
    const {
        title,
        descriptions,
        inputs,
        plates,
        textarea
    } = stepsData[step];

    return (
        <>
            <header className={cls.header}>
                <Title value={title}/>
            </header>

            {descriptions && descriptions.map((description) => (
                <div className={cls.descriptions}>
                    <p>{description}</p>
                </div>
            ))}
            {inputs &&
                inputs.map(({placeholder, name, value = '', required = false, isPassword = false, subText}) => (
                <div className={cls.inputs}>
                    <Input key={name} placeholder={placeholder} name={name} value={value} required={required} isPassword={isPassword} subText={subText}/>
                </div>
            ))}
            {plates &&
                <div className={cls.plates}>
                    {plates.map(({value, name, title}) => (
                        <Plate key={value} value={value} name={name} title={title}/>
                    ))}
                </div>
            }
            {textarea &&
                <div className={cls.textarea}>
                    <Textarea name={textarea.name} placeholder={textarea.placeholder}>{textarea.children}</Textarea>
                </div>
            }
        </>
    )
}

export default Step;