"use client";

import React, { useState } from "react";
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { useModalTest } from "@/hooks/modalTest/useModalTest";


export default function EndTest({
  reset,
  prevSlide,
}: {
  reset: () => void;
  prevSlide: () => void;
}) {
  const [isApplicationSent, setIsApplicationSent] = useState(false)

  return (
    <>
    {isApplicationSent ? (<EndAnswer reset={reset}/>) : <EndForm setIsApplicationSent={() => setIsApplicationSent(true)} reset={reset} prevSlide={prevSlide}/>}
    </>
  )
}


function EndForm({
  reset,
  prevSlide,
  setIsApplicationSent,
}: {
  reset: () => void;
  prevSlide: () => void;
  setIsApplicationSent: ()=>void;
}) {
  const [nameValue, setNameValue] = useState("");
  const [INNValue, setINNValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const { answers } = useModalTest();

  const fetchData: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch("/api/test", {
      body: JSON.stringify({
        name: nameValue,
        INN: INNValue,
        email: emailValue,
        answers: answers,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setNameValue('')
    setINNValue('')
    setEmailValue('')
    setIsApplicationSent()
  };
  const buttonStyle =
    "bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 active:scale-95";

  return (
    <form
      className="flex flex-col items-center justify-between h-full"
      onSubmit={fetchData}
    >
      <label htmlFor="name">Имя</label>
      <input
        className="w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color"
        onChange={(e) => setNameValue(e.currentTarget.value)}
        value={nameValue}
        type="text"
        id="name"
        required
      />
      <br />
      <label htmlFor="INN">ИНН компании</label>
      <input
        className="w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color"
        onChange={(e) => setINNValue(e.currentTarget.value)}
        value={INNValue}
        type="text"
        id="INN"
        required
      />
      <br />
      <label htmlFor="Email">Электронная почта</label>
      <input
        className="w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color"
        onChange={(e) => setEmailValue(e.currentTarget.value)}
        value={emailValue}
        type="text"
        id="email"
        required
      />
      <br />
      <div className="mb-5">
        <input type="checkbox" name="" id="check" required />
        <label htmlFor="check" className="ml-2">
          Я даю согласие на обработку своих персональных данных
        </label>
      </div>
      <div className="mb-5 w-full mx-2 sm:mx-0 sm:w-2/3 flex justify-around sm:justify-between">
        <button
          className={`${buttonStyle} hover:bg-sub-color`}
          onClick={prevSlide}
        >
          Назад
        </button>
        <button
          className={`${buttonStyle} hover:bg-red-600 mx-1`}
          onClick={reset}
        >
          Закрыть
        </button>
        <button className={`${buttonStyle} hover:bg-green-600`} type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
}

function EndAnswer({reset}:{reset:()=>void}) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className=" flex flex-col items-center">
        <p>
      <BsFillCheckSquareFill className="text-6xl text-green-600"/>
      </p>
      <p className="text-xl sm:text-3xl mt-1">Спасибо! Ваша заявка принята!</p>
      <p className="text-lg sm:text-2xl">В ближайшее время с Вами свяжутся.</p>
      <button className="mt-5 bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 hover:bg-sub-color active:scale-95" onClick={reset}>Закрыть</button>
      </div>
    </div>
  )
}
