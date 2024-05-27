import cls from './Login.module.scss';
import React, {useState} from "react";
import Input from "@/components/ui-kit/Input/Input";
import Title from "@/components/ui-kit/Title/Title";
import Button from "@/components/ui-kit/Button/Button";
import {useLoginMutation} from "@/api/authApi";

const Login = () => {
    const [login] = useLoginMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const formOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        login({email, password});
    }

    return (
        <>
            <div className={cls.layout}>
                <div className={cls.wrapper}>
                    <form className={cls.form}
                          onSubmit={formOnSubmit}
                    >
                        <header className={cls.header}>
                            <Title>Вход</Title>
                        </header>
                        <div className={cls.inputWrapper}>
                            <p>Почта</p>
                            <Input className={cls.input} name={'email'} required onChange={(evt) => {
                                setEmail(evt.target.value)
                            }}/>
                        </div>
                        <div className={cls.inputWrapper}>
                            <p>Пароль</p>
                            <Input className={cls.input} name={'password'} required isPassword onChange={(evt) => {
                                setPassword(evt.target.value)
                            }}/>
                        </div>

                        {/* TODO: чекбокс по дизайну*/}
                        <div className={cls.rememberMe}>
                            <input type="checkbox" id={'rememberMe'}/>
                            <label htmlFor="rememberMe">Запомнить меня</label>
                        </div>

                        <Button className={cls.btn} isSubmit>Войти</Button>

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