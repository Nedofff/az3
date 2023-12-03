'use cleint'
import WaveSvg from "@/components/WaveSvg/WaveSvg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsCell({
  id,
  src,
  title,
  width,
  height,
}: {
  id: string;
  src?: string;
  title: string;
  width?: number;
  height?: number;
}) {

  if (!src) {
    return (
      <div className="h-full">
      <Link href={`/news/${id}`} className='flex flex-col h-full p-3 justify-center items-center mx-5 max-w-sm w-min-[450px] shadow-black cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:m-3 duration-500 hover:duration-500 hover:shadow-2xl hover:shadow-black'>
        <h3 className="font-medium break-all">{title}</h3>
        <div className="h-1/5"></div>
    </Link>
    </div>
    )
  }

  return (
    <div className="h-full">
    <Link href={`/news/${id}`} className='flex flex-col h-full mx-5 max-w-sm w-min-[450px] shadow-black cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:m-3 duration-500 hover:duration-500 hover:shadow-2xl hover:shadow-black'>
      {Boolean(src) ? <div className='relative w-full h-2/3 overflow-hidden'>
        <Image
          src={src!}
          width={width!}
          height={height!}
          alt=""
          className="w-full rounded-lg h-full object-center object-cover"
        />
        <WaveSvg className="absolute inline bottom-0 fill-white " />
      </div> : <div></div>}
      <div className="relative px-5">
        <h3 className="font-medium break-all mb-5">{title}</h3>
      </div>
    </Link>
    </div>
  );
}
