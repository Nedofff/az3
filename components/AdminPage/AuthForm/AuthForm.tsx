"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();


  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      name: loginValue,
      password: passwordValue,
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/admin");
    } else {
      setIsError(true);
    }
  };
  return (
    <form
      className="flex flex-col bg-accent-color p-5 sm:p-16 rounded-md space-y-12 text-white"
      onSubmit={submitHandler}
    >
        <div className="space-y-3">
      <label className="flex flex-col " htmlFor="login">
        Логин
        <input
        className="text-black outline-none px-3 py-1 rounded-sm"
          onChange={(e) => setLoginValue(e.target.value)}
          type="text"
          id="login"
        />
      </label>
      <label className="flex flex-col" htmlFor="password">
        Пароль
        <input
        className="text-black outline-none px-3 py-1 rounded-sm"
        onChange={(e) => setPasswordValue(e.target.value)}
          type="text"
          id="password"
        />
      </label>
      <p className="text-red-500 text-sm">{isError && "Неверный логин или пароль"}</p>
      </div>
      <button className="bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200" type="submit">Войти</button>
    </form>
  );
}
