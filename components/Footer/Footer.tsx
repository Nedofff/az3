import React from "react";
import {FaViber} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="px-2 pt-16 pb-28 text-white w-full bg-[#242424] lg:px-20 ">
      <div className="flex mx-auto text-sm justify-between sm:justify-center sm:text-base">
        <address className="not-italic px-2">
          <span className="text-base font-semibold block mb-2">Контакты</span>
          <p className="mb-1">
            <a className="hover:text-accent-color duration-300" href="tel:+7 (391) 214-93-60">+7 (391) 214-93-60</a>
          </p>
          <p>
            <a className="hover:text-accent-color duration-300" href="mailto:info@ap-audit.ru">info@ap-audit.ru</a>
          </p>
        </address>
        <div className="hidden px-2 mx-40 sm:block">
          <span className="text-base font-semibold block mb-2">Услуги</span>
            link link link
        </div>
        <address className="not-italic px-2">
          <span className="text-base font-semibold block mb-2">Адрес</span>
          г. Красноярск, пр. Мира д.7г
          <div className="flex mt-5 w-full sm:flex">
          <a href="tg://resolve?domain=Kondraschov"><BsTelegram className='mr-3 duration-300 text-4xl hover:text-accent-color active:scale-90' title='Иконка Telegram'/></a>
          {/* Вместо плюса используется %2B */}
          <a href="viber://chat?number=%2B4957777777"><FaViber className='duration-300 bg-white w-9 rounded-full h-9 p-1.5 hover:bg-accent-color active:scale-90' color='#242424' title='Иконка Viber'/></a>
          </div>
        </address>
      </div>
    </footer>
  );
}
