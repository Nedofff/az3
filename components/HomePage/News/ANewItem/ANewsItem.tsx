"use client";

import React from "react";
import Image from "next/image";
import WaveSvg from "../WaveSvg";


export default function ANewsItem({
  id,
  src,
  title,
  width,
  height,
}: IOneNews) {

  return (
    <article className={`w-full h-1/5 md:h-full cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:w-1/4 md:m-3 duration-500 hover:duration-500 active:duration-150 hover:shadow-2xl active:scale-95`}>
      <div className={`relative h-2/3 overflow-hidden md:h-1/2`}>
        <Image
          src={src}
          width={width}
          height={height}
          alt=""
          className="w-full rounded-lg h-auto object-cover"
        />
        <WaveSvg className="absolute inline bottom-0 fill-white " />
      </div>
      <div className="px-5 pt-5 sm:pb-24 relative ">
      {/* <div className="px-5 pt-5 sm:pb-24 flex flex-col justify-around space-y-10 h-fit"> */}
        <h3 className="font-medium">{title}</h3>
        <p
          className="text-accent-color absolute font-medium bottom-7"
          // className="text-accent-color font-medium "
          onClick={() => alert(`Открыта новость c id: ${id}`)}
        >
          Читать подробнее
        </p>
      </div>
    </article>
  );
}
