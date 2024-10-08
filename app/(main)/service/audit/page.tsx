import React from "react";
import Methodic from "@/components/AuditPage/Methodic/Methodic";
import MustBeAuditedToggle from "@/components/AuditPage/MustBeAuditedToggle/MustBeAuditedToggle";
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import LiWithMark from "@/components/LiWithMark/LiWithMark";
import ScalingImage from "@/components/ScallingImage/ScallingImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аудит",
  description:
    "Что такое аудит: определение, цели и этапы аудиторской проверки. Узнайте, как аудит помогает оценивать финансовую деятельность организаций и обеспечивать их прозрачность.",
};

export default function AuditPage() {
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
          Если Ваша компания, не подлежит обязательному аудиту, Вы можете
          провести инициативный.
        </p>
        <div className="mt-5">
          <a
            download
            className="text-sub-color px-1 font-bold hover:text-sub-accent-color duration-150"
            href="/downloadedFiles/memo.pdf"
          >
            ПАМЯТКА ДЛЯ КЛИЕНТОВ
          </a>
        </div>
      </article>
      <MustBeAuditedToggle />
      <section className="separator-min md:w-2/3 md:flex md:flex-col md:items-center">
        <h2 className="text-lg text-sub-color font-semibold">
          Мы проводим аудит, если Вы ведете учет, согласно плану счетов
          утвержденному:
        </h2>
        <ul className="space-y-2 mt-4 md:w-1/2 md:space-y-6">
          <LiWithMark>
            ПРИКАЗОМ МИНФИНА РФ ОТ 31.10.2000 N 94Н
            <br /> {'"'}Об утверждении Плана счетов бухгалтерского учета
            финансово-хозяйственной деятельности организаций и Инструкции по его
            применению{'"'}{" "}
          </LiWithMark>
          <LiWithMark>
            ПОЛОЖЕНИЕМ БАНКА РОССИИ ОТ 02.09.2015 N 486-П <br />
            {'"'}О Плане счетов бухгалтерского учета в некредитных финансовых
            организациях и порядке его применения{'"'}
          </LiWithMark>
        </ul>
      </section>
      <section className="separator-min">
        <h2 className="text-lg text-sub-color font-semibold">
          Порядок взаимодействия
        </h2>
        <ScalingImage
          img={{
            src: "/orderInteraction__img.png",
            width: 1000,
            height: 1000,
            alt: "Порядок взаимодействия",
          }}
        />
      </section>
      <Methodic />
      <section className="separator-min mb-10 md:flex md:flex-col md:items-center">
        <h2 className="text-lg text-sub-color font-semibold mb-5">
          Что вы получаете при заказе аудита?
        </h2>
        <ScalingImage
          img={{ src: "/6screen__img.png", width: 700, height: 700, alt: "" }}
        />
      </section>
      <ContactBlock />
    </main>
  );
}
