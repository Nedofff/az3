"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import TextEditorProvider from "../TextEditor/TextEditorProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <TextEditorProvider>
          {children}
        </TextEditorProvider>
      </Provider>
    </>
  );
}
