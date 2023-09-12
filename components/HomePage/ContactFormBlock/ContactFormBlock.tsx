'use client'

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function ContactFormBlock() {
  return (
    <section className='bg-sub-color text-white flex flex-col bg-[url("/bgPhoto.png")] bg-center bg-no-repeat bg-fixed bg-cover py-14 lg:py-28 lg:justify-center lg:flex-row lg:px-20'>
      <div className="mb-14 lg:ml-7 flex flex-col items-center lg:w-1/3 lg:items-start lg:px-0 lg:pr-20">
        <h2 className="text-3xl mb-4 font-bol">Свяжитесь с нами</h2>
        <p className="opacity-70 text-center max-w-lg mb-6 lg:w-full lg:text-start">
          Вы можете позвонить нам или написать письмо. Мы всегда рады пообщаться
          и ответить на интересующие вопросы.
        </p>
        <h3 className="text-xl mb-4 font-semibold">Контактная информация</h3>
        <ul>
          <li className="flex mb-5 text-[#B0BDC7] duration-300 hover:text-white">
            <FaMapMarkerAlt className="text-2xl mr-3 text-white" />
            г. Красноярск, пр. Мира д.7г
          </li>
          <li className="flex mb-5 text-[#B0BDC7] duration-300 hover:text-white">
            <AiFillPhone className="text-2xl mr-3 text-white" />
            <a href="tel:+73912149360">+7 (391) 214-93-60</a>
          </li>
          <li className="flex text-[#B0BDC7] duration-300 hover:text-white">
            <MdEmail className="text-2xl mr-3 text-white" />
            <a href="mailto:info@ap-audit.ru">info@ap-audit.ru</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:px-5 md:pt-10 md:pb-20 lg:px-0 lg:py-10 lg:w-2/4 lg:border-[1px] lg:border-white lg:border-opacity-50 ">
        <div className="flex flex-col items-center mb-7 px-2 lg:px-0">
          <h3 className="text-2xl font-semibold mb-1">Обратная связь</h3>
          <p className="text-center w-full max-w-lg opacity-70">
            Поделитесь мнением о нашей работе или задайте нам любой интересующий
            вас вопрос в поле комментарий
          </p>
        </div>
        <form className="flex flex-col sm:w-4/5">
            <input id="name" name="name" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Имя" />
            <input id='surname' name="surname" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Фамилия" />
            <input id='phone' name="phone" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Телефон" />
            <input id='email' name="email" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="E-mail" />
            <input id='comment' name="comment" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Комментарий" />
            
            <label className= "flex items-start mx-10 lg:mx-0">
            <input type="checkbox" className="mt-0.5 mr-1" />
            <p className="inline text-[11px] opacity-70">
              Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
              персональных данных, в соответствии с Федеральным законом от
              27.07.2006 года №152-ФЗ «О персональных данных».
            </p>
          </label>
          <button className="bg-[#34BCF2] mt-10 duration-200 rounded-sm hover:bg-opacity-80 py-2 mx-10 sm:mx-0 sm:py-5">Отправить</button>
        </form>
      </div>
    </section>
  );
}
