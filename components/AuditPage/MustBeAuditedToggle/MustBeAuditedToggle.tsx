"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

enum ENormType {
  IDLE,
  /** МСФО */
  IFRS,
  /** РСБУ */
  RAS,
}

export default function MustBeAuditedToggle() {
  const [normType, setNormType] = useState<ENormType>(ENormType.IDLE);
  const [isFirst, setIsFirst] = useState(true);
  switch (normType) {
    case ENormType.IFRS:
      return (
        <Ifrs
          onClick={setNormType}
          styleForButtons="bg-sub-color mt-5 text-white text-start rounded-xl py-2 px-5 sm:px-14 mb-5 shadow-sm duration-300 hover:bg-accent-color active:scale-95"
        />
      );
    case ENormType.RAS:
      return (
        <Ras
          onClick={setNormType}
          styleForButtons="bg-sub-color mt-5 text-white text-start rounded-xl py-2 px-5 sm:px-14 mb-5 shadow-sm duration-300 hover:bg-accent-color active:scale-95"
        />
      );
    default:
      return (
        <NormSelection
          isFirst={isFirst}
          setIsFirst={setIsFirst}
          onClick={setNormType}
          styleForButtons="text-xl font-semibold bg-white text-start rounded-xl py-10 px-5 sm:px-16 mb-5 w-full sm:w-4/5 lg:w-1/2 shadow-lg duration-500 hover:duration-500 active:duration-150 hover:shadow-2xl active:scale-95"
        />
      );
  }
}

function Ifrs({
  onClick,
  styleForButtons,
}: {
  onClick: Dispatch<SetStateAction<ENormType>>;
  styleForButtons: string;
}) {
  useEffect(() => {
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.add("fade-in-div");
    return () => {
      try {
        document
          .querySelector<HTMLElement>("#mustBeAudited")!
          .classList.remove("fade-out-div");
      } catch (error) {}
    };
  }, []);

  const clickHandler = (type: ENormType) => {
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.remove("fade-in-div");
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.add("fade-out-div");
    setTimeout(() => {
      onClick(type);
    }, 300);
  };
  return (
    <section
      id="mustBeAudited"
      className="bg-main-color pt-6 sm:pt-16 px-3 sm:px-28 md:px-3 w-full flex flex-col items-center sm:items-start md:items-center"
    >
      <h2 className="text-lg px-1 text-sub-color font-semibold mb-5">
        Кому обязательно проходить аудит по МСФО?
      </h2>
      <ul className="space-y-7 md:space-y-0 md:flex md:flex-wrap lg:w-2/3">
        <li className="md:w-1/2 p-5">
          Страховые организации (кроме страховщиков, осуществляющих деятельность
          исключительно в сфере омс);
        </li>
        <li className="md:w-1/2 p-5">
          Управляющие компании инвестиционных фондов, паевых инвестиционных
          фондов и негосударственных пенсионных фондов
        </li>
        <li className="md:w-1/2 p-5">
          Негосударственные пенсионные фонды; клиринговые организации
        </li>
        <li className="md:w-1/2 p-5">
          Иные организации, ценные бумаги которых допущены к организованным
          торгам путем их включения в котировальный список.
        </li>
      </ul>
      <button
        className={styleForButtons}
        onClick={() => clickHandler(ENormType.IDLE)}
      >
        К выбору
      </button>
    </section>
  );
}
function Ras({
  onClick,
  styleForButtons,
}: {
  onClick: Dispatch<SetStateAction<ENormType>>;
  styleForButtons: string;
}) {
  useEffect(() => {
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.add("fade-in-div");
    return () => {
      try {
        document
          .querySelector<HTMLElement>("#mustBeAudited")!
          .classList.remove("fade-out-div");
      } catch (error) {}
    };
  }, []);

  const clickHandler = (type: ENormType) => {
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.remove("fade-in-div");
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.add("fade-out-div");
    setTimeout(() => {
      onClick(type);
    }, 300);
  };

  return (
    <section
      id="mustBeAudited"
      className="bg-main-color pt-6 sm:pt-16 w-full flex flex-col items-center sm:items-start md:items-center "
    >
      <h2 className="text-lg px-1 text-sub-color font-semibold mb-5">
        Кому обязательно проходить аудит по РСБУ?
      </h2>
      <ul className="space-y-7 md:space-y-0 md:flex md:flex-wrap lg:w-2/3">
        <li className="md:w-1/2 p-5">
          Организации, ценные бумаги которых допущены к организованным торгам, а
          также эмитенты эмиссионных ценных бумаг
        </li>
        <li className="md:w-1/2 p-5">
          Организации, имеющие организационно-правовую форму фонда, в случае,
          если поступление имущества, превышает 3 млн. Рублей
        </li>
        <li className="md:w-1/2 p-5">
          Любые иные организации, если, доход, более 800 млн.Руб. И (или) сумма
          активов более 400 млн.Руб. За год, непосредственно предшествовавший
          отчетному году
        </li>
        <li className="md:w-1/2 p-5">
          Организации, являющиеся профессиональными участниками рынка ценных
          бумаг, бюро кредитных историй
        </li>
      </ul>
      <a
        className="block text-sm mt-10 text-center uppercase px-1 text-sub-accent-color text-opacity-70 font-semibold duration-150 hover:text-opacity-100 active:scale-95"
        download
        href="/downloadedFiles/mandatoryAudit2023.pdf"
      >
        ПОЛНЫЙ ПЕРЕЧЕНЬ случаев проведения обязательного аудита бухгалтерской
        (финансовой) отчетности за 2023 год (согласно законодательству
        Российской Федерации)
      </a>
      <button
        className={styleForButtons}
        onClick={() => clickHandler(ENormType.IDLE)}
      >
        К выбору
      </button>
    </section>
  );
}
function NormSelection({
  onClick,
  styleForButtons,
  isFirst,
  setIsFirst,
}: {
  onClick: Dispatch<SetStateAction<ENormType>>;
  styleForButtons: string;
  isFirst: boolean;
  setIsFirst: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (!isFirst) {
      document
        .querySelector<HTMLElement>("#mustBeAudited")!
        .classList.add("fade-in-div");
    }
    return () => {
      if (!isFirst) {
        try {
          document
            .querySelector<HTMLElement>("#mustBeAudited")!
            .classList.remove("fade-out-div");
        } catch (error) {}
      }
    };
  }, [isFirst]);

  const clickHandler = (type: ENormType) => {
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.remove("fade-in-div");
    document
      .querySelector<HTMLElement>("#mustBeAudited")!
      .classList.add("fade-out-div");
    setTimeout(() => {
      setIsFirst(false);
      onClick(type);
    }, 300);
  };

  return (
    <section
      id="mustBeAudited"
      className="bg-main-color pt-6 sm:pt-16 w-full flex flex-col items-center sm:items-start md:items-center "
    >
      <h2 className="text-lg px-1 text-sub-color font-semibold mb-5">
        Кому обязательно проходить аудит по...
      </h2>
      <div className="flex space-x-5 sm:space-x-16 py-10">
        <button
          onClick={() => clickHandler(ENormType.RAS)}
          className={styleForButtons}
        >
          РСБУ
        </button>
        <button
          onClick={() => clickHandler(ENormType.IFRS)}
          className={styleForButtons}
        >
          МСФО
        </button>
      </div>
    </section>
  );
}
