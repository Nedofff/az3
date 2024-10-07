import React from "react";
import { FaHandshake } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import styles from "./tax.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Налоговый консалтинг",
  description:
    "Налоговый консалтинг: профессиональные услуги по оптимизации налогообложения, снижению налоговых рисков и обеспечению соответствия законодательству. Узнайте, как эффективно управлять налоговыми обязательствами.",
};

export default function TaxPage() {
  const heading2Style = "text-xl text-sub-color font-semibold mb-5";
  return (
    <main className="flex flex-col bg-main-color items-center pt-28">
      <h1 className="text-4xl text-center text-sub-color font-bold">
        Налоговый консалтинг
      </h1>
      <section className="separator-min w-4/5 flex flex-col sm:flex-row sm:w-full sm:items-center md:px-28 lg:w-3/5">
        <h2 className={`${heading2Style} text-center sm:text-start`}>
          Определение налоговых рисков компании
        </h2>
        <ul className="space-y-3 sm:ml-8 sm:space-y-6">
          <li className="flex">
            <div>
              <p className={`${styles["marker-for-list"]} px-[1.1rem]`}>1</p>
            </div>
            Оценка налоговых рисков текущей структуры
          </li>
          <li className="flex">
            <div>
              <p className={`${styles["marker-for-list"]} px-4`}>2</p>
            </div>
            Разработка эффективной с точки зрения налогообложения структуры
          </li>
          <li className="flex">
            <div>
              <p className={`${styles["marker-for-list"]} px-4`}>3</p>
            </div>
            Оценка налоговых последствий планируемых сделок (договоров)
          </li>
          <li className="flex">
            <div>
              <p className={`${styles["marker-for-list"]} px-4`}>4</p>
            </div>
            Оценка налоговых последствий различных способов передачи активов и
            финансирования
          </li>
        </ul>
      </section>
      <section className="bg-main-color pt-16 w-full sm:w-auto sm:flex sm:flex-col sm:items-center">
        <h2 className={`${heading2Style} text-center`}>Налоговые споры</h2>
        <div className="hidden lg:grid grid-cols-3 grid-rows-1 w-2/3">
          <div className="px-5">
            <h3 className="text-md text-sub-color font-semibold mb-5">
              Сопровождение налоговых проверок
            </h3>
            <ul className="space-y-2  list-disc">
              <li>Предварительный налоговый аудит</li>
              <li>
                Проверка документов, подготовленных для представления по
                требованиям налоговиков
              </li>
              <li>Анализ законности решения о назначении проверки</li>
              <li>
                Инструктирование сотрудников компании по порядку взаимодействия
                с проверяющими, по порядку представления документов и т.п.
              </li>
              <li>Оценка перспектив разрешения спора и выдача рекомендаций</li>
            </ul>
          </div>
          <div className="px-5">
            <h3 className="text-md text-sub-color font-semibold mb-5">
              Досудебная защита
            </h3>
            <ul className="space-y-2 list-disc">
              <li>Анализ акта налоговой проверки</li>
              <li>Подготовка возражений на акт налоговой проверки</li>
              <li>
                Представительство интересов при рассмотрении материалов проверки
                в инспекции (участие в возражениях)
              </li>
              <li>
                Обжалование решения налогового органа в вышестоящем налоговом
                органе, подготовка и подача жалобы, мониторинг статуса ее
                рассмотрения
              </li>
              <li>
                Предварительный анализ необходимости принятия обеспечительных
                мер
              </li>
            </ul>
          </div>
          <div className="px-5">
            <h3 className="text-md text-sub-color font-semibold mb-5">
              Судебное представительство
            </h3>
            <ul className="space-y-2 list-disc">
              <li>Разработка стратегии ведения дела</li>
              <li>Сбор необходимых доказательств</li>
              <li>Подготовка процессуальных документов</li>
              <li>
                Представительство интересов клиента на стадии исполнительного
                производства
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-2/3 md:w-4/5 lg:hidden">
          <Dropdown
            needHeading
            className=""
            label="Сопровождение налоговых проверок"
          >
            <ul className="space-y-1 px-3 list-disc pl-6">
              <li>Предварительный налоговый аудит</li>
              <li>
                Проверка документов, подготовленных для представления по
                требованиям налоговиков
              </li>

              <li>Анализ законности решения о назначении проверки</li>

              <li>
                Инструктирование сотрудников компании по порядку взаимодействия
                с проверяющими, по порядку представления документов и т.п.
              </li>
              <li>Оценка перспектив разрешения спора и выдача рекомендаций</li>
            </ul>
          </Dropdown>
          <Dropdown needHeading className="" label="Досудебная защита">
            <ul className="space-y-1 px-3 list-disc pl-6">
              <li>Анализ акта налоговой проверки</li>
              <li>Подготовка возражений на акт налоговой проверки</li>
              <li>
                Представительство интересов при рассмотрении материалов проверки
                в инспекции (участие в возражениях)
              </li>
              <li>
                Обжалование решения налогового органа в вышестоящем налоговом
                органе, подготовка и подача жалобы, мониторинг статуса ее
                рассмотрения
              </li>
              <li>
                Предварительный анализ необходимости принятия обеспечительных
                мер
              </li>
            </ul>
          </Dropdown>
          <Dropdown needHeading className="" label="Судебное представительство">
            <ul className="space-y-1 px-3 list-disc pl-6">
              <li>Разработка стратегии ведения дела</li>
              <li>Сбор необходимых доказательств</li>
              <li>Подготовка процессуальных документов</li>
              <li>
                Представительство интересов клиента на стадии исполнительного
                производства
              </li>
            </ul>
          </Dropdown>
        </div>
      </section>
      <section className="separator-min mb-24 sm:w-4/5 md:w-full lg:w-3/4">
        <h2 className={`${heading2Style} text-center md:text-black md:mb-10`}>
          Помощь в выстраивании конструктивного диалога с налоговыми органами
        </h2>
        <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
          <div className="flex items-center md:flex-col md:text-center md:w-1/3">
            <div>
              <FaHandshake className="text-[48px] text-sub-color p-2 mr-4" />
            </div>
            <p>Изучение требований, запросов налоговых органов</p>
          </div>
          <div className="flex items-center md:flex-col md:text-center md:w-1/3">
            <div>
              <GiLightBulb className="text-[48px] text-sub-color p-2 mr-4" />
            </div>
            <p>Подготовка аргументированных ответов</p>
          </div>
          <div className="flex items-center md:flex-col md:text-center md:w-1/3">
            <div>
              <SlNotebook className="text-[48px] text-sub-color p-2 mr-4" />
            </div>
            <p>Зачет / возврат налогов</p>
          </div>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
