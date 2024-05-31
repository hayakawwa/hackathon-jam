'use client'

import cls from './Register.module.scss';
import React, {useState} from "react";
import RegisterSteps from "@/enums/RegisterSteps";
import Step from "@/components/Register/Step/Step";
import Button from "@/components/ui-kit/Button/Button";
import BackArrow from '../../assets/back-arrow.svg';
import Image from "next/image";
import {useRegisterMutation} from "@/api/authApi";
import {useRouter} from "next/navigation";

const currentRegFields = ['username', 'password', 'first_name', 'last_name', 'email', 'is_organisator']

const Register = () => {
    const [register] = useRegisterMutation();
    const [currentStep, setCurrentStep] = useState<RegisterSteps>(RegisterSteps.Initial);
    const [userData, setUserData] = useState({});
    const router = useRouter();

    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const goToPreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const getInputs = (evt: React.FormEvent<HTMLFormElement>) => {
        // @ts-ignore
        const elements = evt.target.elements;
        const inputs = [];
        for (let i = 0; i < elements.length; i++) {
            const input = elements[i];
            if (input.nodeName === 'INPUT') {
                inputs.push(input);
            }
        }
        return inputs;
    };

    const formOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const inputs = getInputs(evt);
        inputs.forEach((i) => {
            if (!currentRegFields.includes(i.name)) {
                return
            }
            setUserData(prevState => {
                if (i.name === 'is_organisator') {
                    return {...prevState, ...{[i.name]: i.checked && i.value === 'organisator'}}
                }
                return {...prevState, ...{[i.name]: i.value}}
            });
        })
        if (currentStep === RegisterSteps.Avatar) {
            // @ts-ignore
            const result = register(userData);
            result.then((result) => {
                // @ts-ignore
                if (result.error) {
                    return
                }
                router.push('/home');
            });
        } else {
            goToNextStep();
        }
    }

    return (
        <>
            <div className={cls.layout}>
                <div className={cls.wrapper}>
                    <form className={cls.form}
                          onSubmit={formOnSubmit}
                    >
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
                            <Button
                                className={cls.btn}
                                isSubmit={true}
                            >
                                Продолжить
                            </Button>
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
            </div>
        </>
    );
}

export default Register;