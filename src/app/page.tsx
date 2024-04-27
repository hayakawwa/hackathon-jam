'use client'

import React from "react";
import Home from "@/app/components/Home/Home";
import {setupStore} from "@/app/store/store";
import {Provider} from "react-redux";
const store = setupStore();

export default function HomePage() {
  return (
    <Provider store={store}>
      <main>
        <Home/>
      </main>
    </Provider>
  );
}
