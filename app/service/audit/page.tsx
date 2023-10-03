import React from "react";
import Image from "next/image";
import Methodic from "@/components/AuditPage/Methodic/Methodic";
import MustBeAuditedToggle from "@/components/AuditPage/MustBeAuditedToggle/MustBeAuditedToggle";
import ContactFormBlock from "@/components/HomePage/ContactFormBlock/ContactFormBlock";

export default function page() {
  return (
    <main className="flex flex-col bg-main-color items-center pt-28">
      <article className="md:w-2/3 px-3 sm:px-28 md:px-3">
        <h1 className="text-4xl text-sub-color mb-5 font-bold">Аудит</h1>
        <p>
        Аудит - независимая проверка бухгалтерской (финансовой) отчетности
        аудируемого лица в целях выражения мнения о достоверности такой
        отчетности.
        <br />
        Существует два варианта аудита: обязательный и инициативный.
        <br />
        Если Ваша компания, не подлежит обязательному аудиту, Вы можете провести
        инициативный.
        </p>
        <div className="mt-5">
        <a className="text-sub-color font-bold hover:text-sub-accent-color duration-150" href="#">ПАМЯТКА ДЛЯ КЛИЕНТОВ</a>
        </div>
      </article>
      <MustBeAuditedToggle/>
      <section className="separator-min md:w-2/3 md:flex md:flex-col md:items-center px-3 sm:px-28 md:px-3">
        <h2 className="text-lg text-sub-color font-semibold">
          Мы проводим аудит, если Вы ведете учет, согласно плану счетов
          утвержденному:
        </h2>
        <ul className="space-y-2 mt-4 md:w-1/2 md:space-y-6">
          <li>
            ПРИКАЗОМ МИНФИНА РФ ОТ 31.10.2000 N 94Н
            <br /> {'"'}Об утверждении Плана счетов бухгалтерского учета
            финансово-хозяйственной деятельности организаций и Инструкции по его
            применению{'"'}{" "}
          </li>
          <li>
            ПОЛОЖЕНИЕМ БАНКА РОССИИ ОТ 02.09.2015 N 486-П <br />
            {'"'}О Плане счетов бухгалтерского учета в некредитных финансовых
            организациях и порядке его применения{'"'}
          </li>
        </ul>
      </section>
      <section className="separator-min px-3 sm:px-28 md:px-3">
        <h2 className="text-lg text-sub-color font-semibold">
          Порядок взаимодействия
        </h2>
        <Image
          className="w-full"
          src={"/orderInteraction__img.png"}
          width={1000}
          height={1000}
          alt="Порядок взаимодействия"
        />
      </section>
      <Methodic />
      <section className="separator-min md:flex md:flex-col md:items-center px-3 sm:px-28 md:px-3">
        <h2 className="text-lg text-sub-color font-semibold mb-5">
          Что вы получаете при заказе аудита?
        </h2>
        <Image src={'/6screen__img.png'} width={700} height={700} alt={''}/>
      </section>
      <ContactFormBlock/>
    </main>
  );
}
