import React from "react";
import OptimizedBgImg from "../../OptimizedBgImg/OptimizedBgImg";

export default function FirstScreen() {
  return (
    <section
      className={` bg-blend-overlay relative bg-black bg-opacity-40 flex items-center w-full h-screen bg-center bg-no-repeat bg-cover justify-center`}
    >
      <OptimizedBgImg imageProps={{ src: "/firstScreen.jpg", width: 1920, height: 1920 }}/>
      <div className=" text-white px-3 md:w-1/2 md:p-0 z-[1]">
        <p className="font-bold text-xl mb-5 md:text-2xl">
          Аудиторская группа
          <br className="block sm:hidden"/>
           {'"Аземша и партнеры"'}
        </p>
        <h2 className="font-bold text-3xl uppercase md:text-6xl md:mb-2">Аудиторские услуги</h2>
        <p className="font-medium text-base mb-7 md:text-xl">
          Приносим реальную пользу своим клиентам!
        </p>
        <button className="bg-white outline-none font-bold uppercase tracking-wider rounded-sm text-black px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">Рассчитать</button>
      </div>
        <div className="hidden w-1/6 md:block"></div>
    </section>
  );
}
