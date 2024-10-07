import React from "react";
import type { Metadata } from "next";
import OptimizedBgImg from "@/components/OptimizedBgImg/OptimizedBgImg";
import ParsingBlock from "@/components/NewsPage/ParsingBlock/ParsingBlock";
import { redirect } from "next/navigation";
import { getUrlImg } from "@/service/getUrlImg";
import { JSONContent, JSONToHTML, HTMLParser } from "@/service/htmlConvertor";
import prisma from "@/lib/prisma";

interface IOneNews {
  id: string;
  title: string;
  src: string | null;
  width: number | null;
  height: number | null;
  text: string | JSONContent;
}

const getFromDataBaseNewsById = async (
  id: string
): Promise<IOneNews | null> => {
  const resultBD = await prisma.news.findUnique({
    where: {
      id,
    },
  });
  if (!resultBD) {
    return null;
  }

  const wrappedHtml = `<div>${resultBD.content}</div>`;
  const jsonHtml = await HTMLParser(wrappedHtml);

  const result = {
    id: resultBD.id,
    title: resultBD.title,
    src: resultBD.srcToImage,
    width: resultBD.widthImg,
    height: resultBD.heightImg,
    text: jsonHtml,
  };

  return result;
};

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const id = params.id;

  const data = await getFromDataBaseNewsById(id);
  if (!data) {
    return {
      title: "Страница не найдена",
    };
  }
  const text = `Новости "Аземша и партнеры" - ${data.title}`;
  return {
    title: text,
    description: text,
  };
}

export default async function Page({ params }: IProps) {
  const data = await getFromDataBaseNewsById(params.id);
  if (!data) {
    redirect("/404");
  }

  const { id, title, text, src, ...sizes } = data;
  const trueText = (await JSONToHTML(text)).toString();
  return (
    <main className="pb-24 flex flex-col items-center bg-main-color">
      {src && (
        <section
          className={` bg-blend-overlay relative bg-black bg-opacity-40 flex items-center w-full h-screen bg-center bg-no-repeat bg-cover justify-center`}
        >
          <OptimizedBgImg
            isNeedDark
            imageProps={{
              src: getUrlImg(src),
              ...sizes,
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
        {!data.src && (
          <div className="pt-28">
            <h1 className="heading">{title}</h1>
          </div>
        )}
        <ParsingBlock text={trueText} />
      </section>
    </main>
  );
}
