import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import OptimizedBgImg from "@/components/OptimizedBgImg/OptimizedBgImg";
import { env } from "process";
import ParsingBlock from "@/components/NewsPage/ParsingBlock/ParsingBlock";
import { redirect } from "next/navigation";
import { getUrlImg } from "@/service/getUrlImg";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const id = params.id;

  const response = await fetch(`${env.NEXTAUTH_URL}/api/news/${id}`);
  let title;
  if (!response.ok) {
    title = "Новости";
  }
  const data = await response.json();
  title = data.title;

  return {
    title,
  };
}

interface IOneNews {
  id: string;
  title: string;
  src: string;
  width: number;
  height: number;
  // text: string;
}

export default async function Page({ params }: IProps) {
  const response = await fetch(`${env.NEXTAUTH_URL}/api/news/${params.id}`, {
    cache: "no-store",
  });

  if (response.ok) {
    const newsData: IOneNews = await response.json();
    if (Object.keys(newsData).length == 0) {
      redirect("/404");
    }
    const { title, src, ...forImg } = newsData;

    return (
      <main className="pb-24 flex flex-col items-center bg-main-color">
        {Boolean(src) && (
          <section
            className={` bg-blend-overlay relative bg-black bg-opacity-40 flex items-center w-full h-screen bg-center bg-no-repeat bg-cover justify-center`}
          >
            <OptimizedBgImg
              isNeedDark
              imageProps={{
                src: getUrlImg(src),
                ...forImg,
              }}
            />
            <div className=" text-white px-3 md:w-1/2 md:p-0 z-[1]">
              <h1 className="font-bold text-lg sm:text-3xl uppercase md:text-6xl md:mb-2">
                {title}
              </h1>
            </div>
            <div className="hidden w-1/6 md:block"></div>
          </section>
        )}

        <section className="separator-min px-7 w-full flex flex-col items-center">
          {!Boolean(src) && (
            <div className="pt-28">
              <h1 className="heading">{title}</h1>
            </div>
          )}

          {/* <ParsingBlock text={text} /> */}
        </section>
      </main>
    );
  } else {
    redirect("/404");
  }
}
