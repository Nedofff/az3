import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { parser } from "@/service/jsonToHtml";
import OptimizedBgImg from "@/components/OptimizedBgImg/OptimizedBgImg";
import { env } from "process";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: IProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const response = await fetch(`${env.NEXTAUTH_URL}/api/news/${params.id}`);
  const {title} = await response.json();

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
  text: string;
}


export default async function Page({ params }: IProps) {
  const response = await fetch(`${env.NEXTAUTH_URL}/api/news/${params.id}`, {
    // cache: "no-store",
  });

  if (response.ok) {
  const newsData:IOneNews = await response.json();
  const {title, text, ...forImg} = newsData
    return (
      <main className="pb-24 flex flex-col items-center bg-main-color">
        <section
      className={` bg-blend-overlay relative bg-black bg-opacity-40 flex items-center w-full h-screen bg-center bg-no-repeat bg-cover justify-center`}
    >
      <OptimizedBgImg isNeedDark imageProps={forImg}/>
      <div className=" text-white px-3 md:w-1/2 md:p-0 z-[1]">
        <h1 className="font-bold text-lg sm:text-3xl uppercase md:text-6xl md:mb-2">{title}</h1>
      </div>
        <div className="hidden w-1/6 md:block"></div>
    </section>
    <section className="separator-min flex justify-center">
      <div className="w-3/4">
      {parser(text)}
      </div>
    </section>
      </main>
    );
  } else {
    return (
      <div>
      </div>
    )
  }

  
}
