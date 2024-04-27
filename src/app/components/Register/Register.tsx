'use client'

import cls from './Register.module.scss';
import React, {useState} from "react";
import RegisterSteps from "@/app/enums/RegisterSteps";
import Step from "@/app/components/Register/Step/Step";
import Button from "@/app/components/ui-kit/Button/Button";
import BackArrow from '../../assets/back-arrow.svg';
import Image from "next/image";

const Register = () => {
    const [currentStep, setCurrentStep] = useState<RegisterSteps>(RegisterSteps.Initial);

    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const goToPreviousStep = () => {
        setCurrentStep(currentStep - 1);
    }

    return (
        <div className={cls.wrapper}>
            <form className={cls.form} action="">
                <Step step={currentStep}/>
                <div className={cls.buttons}>
                    {currentStep !== RegisterSteps.Initial &&
                        <button className={cls.backBtn} onClick={(evt) => {
                            evt.preventDefault();
                            goToPreviousStep();
                        }}>
                            <Image src={BackArrow} alt={''}/>
                        </button>
                    }
                    {currentStep !== RegisterSteps.Avatar &&
                        <Button onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            goToNextStep();
                        }}
                        >
                            Продолжить
                        </Button>}
                    {currentStep === RegisterSteps.Avatar && <Button onClick={goToNextStep}>Создать профиль</Button>}
                </div>
            </form>
            <div className={cls.footer + ''}>
                {currentStep === RegisterSteps.Initial &&
                    <p className={cls.footerText}>
                        Продолжая регистрацию, вы соглашаетесь
                        c <a href="#">Правилами пользования сайтом и обработкой персональных данных</a>
                    </p>
                }
                <p className={cls.footerText}>У вас уже есть аккаунт? <a href="#">Войдите</a></p>
            </div>
        </div>
    );
}

export default Register;