'use client'

import Login from "@/components/Login/Login";

const isServer = () => typeof window === `undefined`;

const RegisterPage = () => {

    return isServer() ? null : (
      <section>
        <Login/>
      </section>
    );
}

export default RegisterPage;