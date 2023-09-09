import React from "react";

export default function FirstScreen() {
  return (
    <section
      className={`bg-[url("/firstScreen.png")] bg-blend-overlay bg-black bg-opacity-40 flex items-center w-full h-screen bg-center bg-no-repeat bg-fixed bg-cover justify-center`}
    >
      <div className=" text-white px-3 md:w-1/2 md:p-0">
        <p className="font-bold text-xl mb-5 md:text-3xl">
          Аудиторская группа
          <br className="block sm:hidden"/>
           {'"Аземша и партнеры"'}
        </p>
        <h2 className="font-bold text-3xl uppercase md:text-6xl md:mb-2">Аудиторские услуги</h2>
        <p className="font-medium text-base mb-7 md:text-xl">
          Приносим реальную пользу своим клиентам!
        </p>
        <button className="bg-white  font-bold uppercase tracking-wider rounded-sm text-black px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">Рассчитать</button>
      </div>
    </section>
  );
}
