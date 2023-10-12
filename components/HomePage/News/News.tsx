import React from "react";
import ANewsItem from "./ANewItem/ANewsItem";
import Link from "next/link";

export default async function News() {
  const response = await fetch('http://localhost:3000/api/news/top3', {cache: 'no-store'});
  const news: IOneNews[] = await response.json();
  console.log(news)
  const newss: IOneNews[] = [
    {
      id: "1",
      title: "Изменения в законодательстве этой осенью",
      width: 564,
      height: 564,
      src: "/news/1.jpg",
    },
    {
      id: "2",
      title: "Минфин утвердил ФСБУ «Инвентаризация» (ФСБУ 28/2023)",
      width: 870,
      height: 1280,
      src: "/news/2.jpg",
    },
    {
      id: "3",
      title: "Изменения в выдаче справок о сальдо по ЕНС",
      width: 920,
      height: 1280,
      src: "/news/3.jpg",
    },
  ];
  return (
    <section id="News" className="separator flex flex-col items-center">
      <h2 className="heading">Новости</h2>
      <div className="flex justify-center mt-10">
        <div className="flex px-2 h-fit md:h-auto md:max-h-96 flex-col sm:px-10 md:px-0 md:flex-row lg:w-5/6 md:justify-center">
          {news.map(oneNews => (
            <ANewsItem
            key={oneNews.id}
            id={oneNews.id}
            src={oneNews.src}
            width={oneNews.width}
          height={oneNews.height}
            title={oneNews.title}
            />
          ))}
        </div>
      </div>
      <Link href="/news" className="mt-10 text-white bg-sub-color outline-none font-bold uppercase tracking-wider rounded-sm px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">больше новостей</Link>
    </section>
  );
}
