import React from "react";
import OptimizedBgImg from "../../OptimizedBgImg/OptimizedBgImg";
import BtnTest from "./BtnTest/BtnTest";
import styles from './FirstScreen.module.css'

export default function FirstScreen() {
  return (
    <section
      className={` bg-blend-overlay relative bg-black bg-opacity-40 lg:bg-[#23241F] lg:bg-opacity-100 z-10 flex items-center w-full h-screen bg-center bg-no-repeat bg-cover justify-center`}
    >
      <OptimizedBgImg addClassName="block lg:hidden" imageProps={{ src: "/firstScreen.png", width: 1920, height: 1920 }}/>
      <video src="/firstScreen.mp4" autoPlay loop muted className={`videoFS absolute hidden w-screen h-screen ${styles.video} lg:block`}></video>
      <div className=" text-white px-3 md:w-1/3 md:p-0 z-[1]">
        <p className="font-bold text-xl mb-5 md:text-2xl">
          Аудиторская группа
          <br className="block sm:hidden"/>
           {'"Аземша и партнеры"'}
        </p>
        <h2 className="font-bold text-3xl uppercase md:text-6xl md:mb-2">Аудиторские услуги</h2>
        <p className="font-medium text-base mb-7 md:text-xl">
          Приносим реальную пользу своим клиентам!
        </p>
        <BtnTest/>
      </div>
        <div className="hidden w-1/6 md:w-1/3 md:block"></div>
    </section>
  );
}
