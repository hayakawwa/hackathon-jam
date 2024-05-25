'use client'

import cls from './Register.module.scss';
import React, {useState} from "react";
import RegisterSteps from "@/enums/RegisterSteps";
import Step from "@/components/Register/Step/Step";
import Button from "@/components/ui-kit/Button/Button";
import BackArrow from '../../assets/back-arrow.svg';
import Image from "next/image";
import {useRegisterMutation} from "@/api/registerApi";

const currentRegFields = ['username', 'password', 'first_name', 'last_name', 'email']

const Register = () => {
    const [register] = useRegisterMutation();
    const [currentStep, setCurrentStep] = useState<RegisterSteps>(RegisterSteps.Initial);
    const [userData, setUserData] = useState({})

    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const goToPreviousStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const getInputs = (evt: React.FormEvent<HTMLFormElement>) => {
        // @ts-ignore
        const elements = evt.target.elements;
        const inputs = [];
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].nodeName === 'INPUT') {
                inputs.push(elements[i]);
            }
        }
        return inputs;
    }

    return (
        <>
            <div className={cls.layout}>
                <div className={cls.wrapper}>
                    <form className={cls.form}
                          onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                              evt.preventDefault();
                              const inputs = getInputs(evt);
                              inputs.forEach((i) => {
                                  if (!currentRegFields.includes(i.name)) {
                                      return
                                  }
                                  setUserData(prevState => {
                                      return {...prevState, ...{[i.name]: i.value}}
                                  });
                              })
                              if (currentStep === RegisterSteps.Avatar) {
                                  register(userData);
                              } else {
                                  goToNextStep();
                              }
                          }}
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
                                color={'#1d1d1d'}
                                width={'100%'}
                                backgroundColor={'#E7FF43'}
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