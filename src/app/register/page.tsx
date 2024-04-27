'use client'

import Register from "@/app/components/Register/Register";
import {Provider} from "react-redux";
import {setupStore} from "@/app/store/store";

const store = setupStore();

const RegisterPage = () => {
    return (
        <Provider store={store}>
            <section>
                <Register/>
            </section>
        </Provider>
    );
}

export default RegisterPage;