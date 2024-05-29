/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import WaveSvg from "@/components/WaveSvg/WaveSvg";
import { useRouter } from "next/navigation";
import { getUrlImg } from "@/service/getUrlImg";

export default function ANewsItem({
  id,
  srcToImage: src,
  title,
  widthImg: width,
  heightImg: height,
}: IOneNews) {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/news/${id}`);
  };

  return (
    <article
      onClick={clickHandler}
      className={`w-full h-1/5 md:h-full cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:w-1/4 md:m-3 duration-500 hover:duration-500 active:duration-150 hover:shadow-2xl active:scale-95`}
    >
      {!!src && (
        <div className={`relative w-full h-2/3 overflow-hidden md:h-1/2`}>
          <img
            src={getUrlImg(src)}
            alt={title}
            className="w-full rounded-lg h-auto object-cover object-center"
          />
          <WaveSvg className="absolute inline bottom-0 fill-white " />
        </div>
      )}
      <div className="px-5 pt-5 sm:pb-24 relative">
        {/* <div className="px-5 pt-5 sm:pb-24 flex flex-col justify-around space-y-10 h-fit"> */}
        <h3 className="font-medium pb-10 sm:pb-0">{title}</h3>
        {/* <Link
          className="text-accent-color hidden absolute font-medium bottom-7 sm:inline"
          // className="text-accent-color font-medium "
          href={`/news/${id}`}
        >
          Читать подробнее
        </Link> */}
      </div>
    </article>
  );
}
