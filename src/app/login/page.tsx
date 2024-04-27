'use client'

import {Provider} from "react-redux";
import {setupStore} from "@/app/store/store";
import Login from "@/app/components/Login/Login";

const store = setupStore();

const RegisterPage = () => {
    return (
        <Provider store={store}>
            <section>
                <Login/>
            </section>
        </Provider>
    );
}

export default RegisterPage;