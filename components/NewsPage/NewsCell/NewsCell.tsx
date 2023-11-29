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
  src: string;
  title: string;
  width: number;
  height: number;
}) {
  return (
    <Link href={`/news/${id}`} className='block mx-5 sm:grow max-w-sm w-min-[450px]  shadow-black cursor-pointer mb-7 bg-white shadow-lg rounded-lg md:m-3 duration-500 hover:duration-500 hover:shadow-2xl hover:shadow-black'>
      <div className='relative h-2/3 overflow-hidden'>
        <Image
          src={src}
          width={width}
          height={height}
          alt=""
          className="w-full rounded-lg h-auto object-cover"
        />
        <WaveSvg className="absolute inline bottom-0 fill-white " />
      </div>
      <div className="relative px-5">
        <h3 className="font-medium break-all mb-5">{title}</h3>
        {/* <Link
          className="text-accent-color font-medium"
          href={`/news/${id}`}
        >
          Читать подробнее
        </Link> */}
      </div>
    </Link>
  );
}
