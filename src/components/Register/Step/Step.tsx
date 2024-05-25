import RegisterSteps from "@/enums/RegisterSteps";
import {FC} from "react";
import {stepsData} from "@/components/Register/Step/StepsData";
import Title from "@/components/ui-kit/Title/Title";
import Input from "@/components/ui-kit/Input/Input";
import cls from './Step.module.scss'
import Plate from "@/components/ui-kit/Plate/Plate";
import Textarea from "@/components/ui-kit/Textarea/Textarea";
import Multiselect from "@/components/ui-kit/Multiselect/Multiselect";

interface IStepProps {
    step: RegisterSteps
}

const Step: FC<IStepProps> = ({step}) => {
    const {
        title,
        descriptions,
        inputs,
        plates,
        textarea,
        multiselect
    } = stepsData[step];

    return (
        <>
            <header className={`${cls.header} ${plates && cls.wideHeader}`}>
                <Title>{title}</Title>
            </header>

            {descriptions && descriptions.map((description) => (
                <div className={cls.descriptions}>
                    <p>{description}</p>
                </div>
            ))}
            {inputs &&
                inputs.map(({placeholder, name, value = '', required = false, isPassword = false}) => (
                <div className={cls.inputs}>
                    <p>{placeholder}</p>
                    <Input borderRadius={'12px'} key={name} name={name} value={value} required={required} isPassword={isPassword}/>
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
            {multiselect &&
                <div className={cls.multiselect}>
                    <Multiselect
                        options={multiselect.options}
                        placeholder={multiselect.placeholder}
                        name={multiselect.name}
                        maxOptionsSelected={multiselect.maxOptionsSelected}
                    />
                </div>
            }
        </>
    )
}

export default Step;