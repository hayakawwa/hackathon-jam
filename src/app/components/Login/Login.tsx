import cls from './Login.module.scss';
import Image from "next/image";
import logo from "@/app/assets/logo-tmp.svg";
import React, {useState} from "react";
import Input from "@/app/components/ui-kit/Input/Input";
import Title from "@/app/components/ui-kit/Title/Title";
import Button from "@/app/components/ui-kit/Button/Button";
import RegisterSteps from "@/app/enums/RegisterSteps";
import {useLoginMutation} from "@/app/api/authApi";

const Login = () => {
    const [login] = useLoginMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>
            <Image src={logo} alt={'logo'} className={cls.logo}/>
            <div className={cls.layout}>
                <div className={cls.wrapper}>
                    <form className={cls.form}
                          onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                              evt.preventDefault();
                              login({email, password})
                          }}
                    >
                        <header className={cls.header}>
                            <Title>Вход</Title>
                        </header>
                        <div className={cls.input}>
                            <p>Почта</p>
                            <Input borderRadius={'12px'} name={'email'} required onChange={(evt) => {
                                setEmail(evt.target.value)
                            }}/>
                        </div>
                        <div className={cls.input}>
                            <p>Пароль</p>
                            <Input borderRadius={'12px'} name={'password'} required isPassword onChange={(evt) => {
                                setPassword(evt.target.value)
                            }}/>
                        </div>

                        {/* TODO: чекбокс по дизайну*/}
                        <div className={cls.rememberMe}>
                            <input type="checkbox" id={'rememberMe'}/>
                            <label htmlFor="rememberMe">Запомнить меня</label>
                        </div>

                        <Button backgroundColor={'#E7FF43'} color={'#1D1D1D'} width={'100%'} isSubmit>Войти</Button>

                        <div className={cls.footer + ''}>
                            <p className={cls.footerText}>
                                Забыли пароль? Восстановите его <a href="#">здесь</a>
                            </p>
                            <p className={cls.footerText}>Нет аккаунта? <a href="#">Зарегистрируйтесь</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;