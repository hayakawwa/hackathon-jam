'use client'

import {Provider} from "react-redux";
import {setupStore} from "@/store/store";
import React from "react";

const store = setupStore();
export default function ProviderStore({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <Provider store={store}>{children}</Provider>
  )
}