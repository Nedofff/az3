"use client";

import React, { useState } from "react";

export default function FormAddUser() {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isNotNull, setIsNotNull] = useState(false);
  const [isAllGood, setIsAllGood] = useState(false);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsError(false)


    if (!loginValue || !passwordValue) {
      setIsNotNull(true);
      return;
    } else {
      setIsNotNull(false)
    }

    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginValue,
        passwordValue
      }),
    });
    if (!res.ok) setIsError(true)
    if (res.ok) {
      setIsAllGood(true)
      setLoginValue('')
      setPasswordValue('')
    }
  };
  return (
    <form
      className="flex flex-col bg-accent-color rounded-md space-y-12 text-white"
      onSubmit={submitHandler}
    >
      <div className="space-y-3">
        <label className="flex flex-col " htmlFor="login">
          Логин
          <input
          value={loginValue}
            className="text-black outline-none px-3 py-1 rounded-sm"
            onChange={(e) => setLoginValue(e.target.value)}
            onFocus={() => setIsAllGood(false)}
            type="text"
            id="login"
          />
        </label>
        <label className="flex flex-col" htmlFor="password">
          Пароль
          <input
          value={passwordValue}
            className="text-black outline-none px-3 py-1 rounded-sm"
            onChange={(e) => setPasswordValue(e.target.value)}
            onFocus={() => setIsAllGood(false)}
            type="text"
            id="password"
          />
        </label>
        <p className="text-red-500 text-sm">{isError && "Пользователь с таким именем уже существует"}</p>
      <p className="text-red-500 text-sm">{isNotNull && "Поля не должны быть пустыми"}</p>
      <p className="text-green-500 text-sm">{isAllGood && "Пользователь создан"}</p>
      </div>
      <button
        className="bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200"
        type="submit"
      >
        Создать
      </button>
    </form>
  );
}
