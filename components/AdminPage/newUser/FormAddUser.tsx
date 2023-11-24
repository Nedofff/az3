"use client";

import React, { useState } from "react";

export default function FormAddUser() {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    fetch("/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginValue,
        passwordValue
      }),
    });
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
