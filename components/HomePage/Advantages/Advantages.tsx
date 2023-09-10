import React from "react";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { TbChartHistogram } from "react-icons/tb";
import { FaAward, FaComments } from "react-icons/fa6";

export default function Advantages() {
  return (
    <section className="separator">
      <h2 className="heading">ВЫбирайте нас</h2>
      <div className="flex mt-10 flex-col-reverse px-5 md:flex-row md:justify-center lg:w-3/4 lg:mx-auto">
        <Image
          src="/secondFace.png"
          width={445}
          height={593}
          alt="Человек, работающий"
          className="w-11/12 mt-16 self-center rounded-sm md:w-1/2 md:mt-0"
        ></Image>
        <ul className="w-full md:ml-5 lg:w-1/2">
          <li className="mb-7 flex flex-col text-center break-words hyphens-auto md:flex-row md:text-start md:items-center">
            <div className="self-center">
              <BsFillPersonFill className="mb-2 bloc text-3xl text-sub-color border-2 border-accent-color rounded-full w-12 h-12 p-2 md:mb-0 md:mr-5" />
            </div>
            Опыт работы аудиторов с широкой отраслевой спецификой составляет
            более 15 лет
          </li>
          <li className="mb-7 flex flex-col text-center break-words hyphens-auto md:flex-row md:text-start md:items-center">
            <div className="self-center">
              <TbChartHistogram className="mb-2 text-3xl text-sub-color border-2 border-accent-color rounded-full w-12 h-12 p-2 md:mb-0 md:mr-5" />
            </div>
            Мы умеем работать с крупными компаниями. Для нас привычна работа с
            выручкой и активами компании, исчисляемыми в миллиардах
          </li>
          <li className="mb-7 flex flex-col text-center break-words hyphens-auto md:flex-row md:text-start md:items-center">
            <div className="self-center">
              <FaAward className="mb-2 text-3xl text-sub-color border-2 border-accent-color rounded-full w-12 h-12 min-h-[3rem] p-3 md:mb-0 md:mr-5" />
            </div>
            Обладая значимым опытом в бухгалтерском и налоговом учете, мы можем
            найти гибкие варианты учета для решения поставленных задач
          </li>
          <li className="flex flex-col text-center break-words hyphens-auto md:flex-row md:text-start md:items-center">
            <div className="self-center">
              <FaComments className="mb-2 text-3xl text-sub-color border-2 border-accent-color rounded-full w-12 h-12 p-2 md:mb-0 md:mr-5" />
            </div>
            Полное сопровождение аудитора на этапах проверки
          </li>
        </ul>
      </div>
    </section>
  );
}
