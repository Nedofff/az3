"use client";

import React from "react";
import Image from "next/image";
import WaveSvg from "../WaveSvg";

export default function ANewsItem({
  id,
  src,
  width,
  height,
  title,
}: IOneNews) {
  return (
    <article className="w-full cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:w-1/4 md:m-3 duration-500 hover:duration-500 active:duration-150 hover:shadow-2xl active:scale-95">
      <div className="relative h-1/2 overflow-hidden">
        <Image
          src={src}
          width={width}
          height={height}
          alt=""
          className="w-full rounded-lg h-auto"
        />
        <WaveSvg className="absolute inline bottom-0 h-2/4 fill-white sm:h-2/3" />
      </div>
      <div className="px-5 pt-5 pb-24 relative">
        <h3 className="font-medium">{title}</h3>
        <p
          className="text-accent-color absolute font-medium bottom-7"
          onClick={() => alert(`Открыта новость c id: ${id}`)}
        >
          Читать подробнее
        </p>
      </div>
    </article>
  );
}
