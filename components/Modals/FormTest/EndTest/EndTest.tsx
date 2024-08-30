"use client";

import React, { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useModalTest } from "@/hooks/modalTest/useModalTest";
import Loading from "@/components/Loading/Loading";

export default function EndTest({
  reset,
  prevSlide,
}: {
  reset: () => void;
  prevSlide: () => void;
}) {
  const [isApplicationSent, setIsApplicationSent] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isApplicationSent || isError ? null : (
        <EndForm
          setIsApplicationSent={() => setIsApplicationSent(true)}
          setIsError={() => setIsError(true)}
          reset={reset}
          prevSlide={prevSlide}
        />
      )}
      {isError && <EndAnswerError reset={reset} />}
      {isApplicationSent && <EndAnswer reset={reset} />}
    </>
  );
}

function EndForm({
  reset,
  prevSlide,
  setIsApplicationSent,
  setIsError,
}: {
  reset: () => void;
  prevSlide: () => void;
  setIsApplicationSent: () => void;
  setIsError: () => void;
}) {
  const [nameValue, setNameValue] = useState("");
  const [INNValue, setINNValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { answers } = useModalTest();

  const fetchData: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await fetch("/api/test", {
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
    setNameValue("");
    setINNValue("");
    setEmailValue("");
    if (result.ok && result) {
      setIsApplicationSent();
    } else {
      setIsError();
    }
  };
  const buttonStyle =
    "bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 active:scale-95";

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loading className="h-[50%] w-[50%]" />
      </div>
    );
  }

  return (
    <form className="flex flex-col items-center h-full" onSubmit={fetchData}>
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

function EndAnswerError({ reset }: { reset: () => void }) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p>
          <MdError className="text-6xl text-red-600" />
        </p>
        <p className="text-xl sm:text-3xl mt-3">Что-то пошло не так</p>
        <p className="text-xl sm:text-2xl mt-4">
          Позвоните нам{" "}
          <a className="text-sub-accent-color" href="tel:+7 (391) 214-93-60">
            +7 (391) 214-93-60
          </a>
        </p>
        <button
          className="mt-5 bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 hover:bg-sub-color active:scale-95"
          onClick={reset}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
function EndAnswer({ reset }: { reset: () => void }) {
  const approximatePrice = useModalTest().approximatePrice;
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p>
          <BsFillCheckSquareFill className="text-6xl text-green-600" />
        </p>
        <p className="text-xl sm:text-3xl mt-1">
          Спасибо! Ваша заявка принята!
        </p>
        <p className="text-xl sm:text-2xl mt-1">
          Приблизительная стоимость{" "}
          <span className="text-sub-accent-color">{approximatePrice}</span>{" "}
          рублей.
        </p>
        <p className="text-lg sm:text-2xl">
          Для уточнения информации с Вами свяжется наш специалист.
        </p>
        <button
          className="mt-5 bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 hover:bg-sub-color active:scale-95"
          onClick={reset}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
