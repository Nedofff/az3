import React from "react";
import Messengers from "../Messengers/Messengers";

export default function Footer() {
  return (
    <footer className="px-2 zindex pt-16 pb-28 z-10 relative text-white w-screen bg-[#242424] lg:px-20 ">
      <div className="flex flex-col xs:flex-row mx-auto text-sm justify-between p-0 sm:px-10 sm:text-base">
        <address className="not-italic px-2">
          <span className="text-base font-semibold block mb-2">Контакты</span>
          <p className="mb-1">
            <a className="hover:text-accent-color duration-300" href="tel:+7 (391) 214-93-60">+7 (391) 214-93-60</a>
          </p>
          <p>
            <a className="hover:text-accent-color duration-300" href="mailto:info@ap-audit.ru">info@ap-audit.ru</a>
          </p>
        </address>
        <address className="not-italic px-2 mr-2">
          <span className="text-base font-semibold block mb-2">Адрес</span>
          г. Красноярск, пр. Мира 7Г, офис 68
          <Messengers className="mt-5 w-full"/>
        </address>
      </div>
    </footer>
  );
}
