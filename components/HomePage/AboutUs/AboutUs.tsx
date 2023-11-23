import React from "react";
import Image from "next/image";
import { FaChartLine, FaBusinessTime } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import AnimationShift from "@/components/Animation/AnimationShift/AnimationShift";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div id='AboutUs' className="separator flex flex-col items-center">
      <div className="flex w-full items-center flex-col md:flex-row md:justify-center md:items-start">
      <AnimationShift id="a12" amount={.1} transition={{delay:0, duration: 300}} side="left" className="w-full flex flex-col mb-5 px-5 md:w-1/3 md:mr-10 md:max-w-lg md:p-0">
      {/* <div className=""> */}
        <h2 className="heading">О нас</h2>
        <p className="mb-7 break-word hyphens-auto">
          Наша компания занимается аудиторскими услугами по всей России уже
          более 30 лет! Мы являемся членом саморегулируемой организации
          аудиторов Ассоциация «Содружество» (СРО ААС) с 2016 года. Наши
          специалисты имеют опыт работы более 15 лет с широкой отраслевой
          спецификой и крупными компаниями, а обладая значимым опытом в
          бухгалтерском и налоговом учете, помогут вам найти нужное решение для
          поставленной задачи.
        </p>
        <p className="break-word hyphens-auto">
          Для нас аудиторская проверка не только формализованный процесс, а
          помощь и консультирование по вопросам, касающимся бухгалтерского и
          налогового учета, превращая аудит из обязанности в полезную
          необходимость.
        </p>
        <ul className="mt-10 self-center ">
          <li className="flex items-center mb-5">
            <FaChartLine className="text-3xl mr-3 opacity-70" />
            За время работы мы оказали услуги более 100 компаниям
          </li>
          <li className="flex items-center mb-5">
            <FaBusinessTime className="text-3xl mr-3 opacity-70" />
            30 компаний на постоянном обслуживании
          </li>
          <li className="flex items-center">
            <BsFillPeopleFill className="text-3xl mr-3 opacity-70" />В штате 12
            высококвалифицированных аудиторов
          </li>
        </ul>
      {/* </div> */}
      </AnimationShift>
      <AnimationShift id="a123" amount={.3} transition={{delay:0, duration: 450}} side="right" className="w-full px-2 md:w-1/3 md:max-w-md sm:w-1/2 sm:px-0">
      <figure className="zindex">
        <Image
          className="rounded-sm w-full zindex"
          width={853}
          height={1280}
          src={"/mainFace.jpg"}
          alt="Генерального директора  ООО «Аудиторской группы «Аземша и партнеры» Е.А Аземшы"
        />
        <figcaption className="font-light mt-2 text-center">
          Генеральный директор<br/> ООО «Аудиторская группа «Аземша и партнеры» <br/> Е.А
          Аземша
        </figcaption>
      </figure>
      </AnimationShift>
      </div>
      <div className="mt-7">
      <Link href="/team" className="mt-10 text-white bg-sub-color outline-none font-bold uppercase tracking-wider rounded-sm px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">Наша команда</Link>
      </div>
    </div>
  );
}
