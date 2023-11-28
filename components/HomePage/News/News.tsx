import React from "react";
import ANewsItem from "./ANewItem/ANewsItem";
import Link from "next/link";
import AnimationOpacity from "@/components/Animation/AnimationOpacity/AnimationOpacity";

export default async function News() {
  const response = await fetch('http://localhost:3000/api/top', {cache: 'no-store'});
  const news: IOneNews[]= await response.json()
  // console.log(news[0].src)
  const newss: IOneNews[] = [
    {
      id: "1",
      title: "Изменения в законодательстве этой осенью",
      widthImg: 564,
      heightImg: 564,
      srcToImage: "/news/1.jpg",
    },
    {
      id: "2",
      title: "Минфин утвердил ФСБУ «Инвентаризация» (ФСБУ 28/2023)",
      widthImg: 870,
      heightImg: 1280,
      srcToImage: "/news/2.jpg",
    },
    {
      id: "3",
      title: "Изменения в выдаче справок о сальдо по ЕНС",
      widthImg: 920,
      heightImg: 1280,
      srcToImage: "/news/3.jpg",
    },
  ];
  return (
    <section id="News" className="separator">
      <AnimationOpacity id="newsOpacity" transition={{delay:0, duration: 450}} className="w-full h-full flex flex-col items-center">
      <h2 className="heading">Новости</h2>
      <div className="flex justify-center mt-10 w-full">
        <div className="flex w-full px-2 h-fit md:h-auto md:max-h-96 flex-col sm:px-10 md:px-0 md:flex-row lg:w-5/6 md:justify-center">
          {news!.map(oneNews => (
            <ANewsItem
            key={oneNews.id}
            id={oneNews.id}
            srcToImage={oneNews.srcToImage}
            widthImg={oneNews.widthImg}
          heightImg={oneNews.heightImg}
            title={oneNews.title}
            />
          ))}
        </div>
      </div>
      <Link href="/news" className="mt-10 text-white bg-sub-color outline-none font-bold uppercase tracking-wider rounded-sm px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">больше новостей</Link>
      </AnimationOpacity>
    </section>
  )
}
