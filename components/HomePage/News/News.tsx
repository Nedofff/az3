import React from "react";
import ANewsItem from "./ANewItem/ANewsItem";

export default function News() {
  // const news = fetch('url', {next: {revalidate: seconds}})
  const news: IOneNews[] = [
    {
      id: "1",
      title: "Изменения в законодательстве этой осенью",
      src: "/news/1.png",
    },
    {
      id: "2",
      title: "Минфин утвердил ФСБУ «Инвентаризация» (ФСБУ 28/2023)",
      src: "/news/2.png",
    },
    {
      id: "3",
      title: "Изменения в выдаче справок о сальдо по ЕНС",
      src: "/news/3.png",
    },
  ];

  return (
    <section id="News" className="separator flex flex-col items-center">
      <h2 className="heading">Новости</h2>
      <div className="flex justify-center mt-10">
        <div className="flex px-2 flex-col sm:px-10 md:px-0 md:flex-row lg:w-5/6 md:justify-center">
          {news.map(oneNews => (
            <ANewsItem
            key={oneNews.id}
            id={oneNews.id}
            src={oneNews.src}
            title={oneNews.title}
            />
          ))}
        </div>
      </div>
      <button className="mt-10 text-white bg-sub-color outline-none font-bold uppercase tracking-wider rounded-sm px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">больше новостей</button>
    </section>
  );
}
