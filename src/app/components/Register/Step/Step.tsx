import RegisterSteps from "@/app/enums/RegisterSteps";
import {FC} from "react";
import {stepsData} from "@/app/components/Register/Step/StepsData";
import Title from "@/app/components/ui-kit/Title/Title";
import Input from "@/app/components/ui-kit/Input/Input";

interface IStepProps {
    step: RegisterSteps
}

const Step: FC<IStepProps> = ({step}) => {
    const {
        title,
        description,
        inputs,
        plates,
        textarea
    } = stepsData[step];

    return (
        <>
            <Title value={title}/>
            {inputs && inputs.map(({placeholder, name, value = '', required = false, isPassword = false}) => (
                <Input key={name} placeholder={placeholder} name={name} value={value} required={required} isPassword={isPassword}/>
            ))}
        </>
    )
}

export default Step;