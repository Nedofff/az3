/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface IImageProps {
  src: string;
  width?: number | null;
  height?: number | null;
}

export default function OptimizedBgImg({
  isNeedDark,
  imageProps,
  addClassName,
}: {
  isNeedDark?: boolean;
  imageProps: IImageProps;
  addClassName?: string;
}) {
  return (
    <div
      className={addClassName}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          left: "0",
          top: "0",
        }}
      >
        {/* bg-black */}
        <div
          className={`w-screen bg-opacity-40 h-screen fixed top-0 left-0 z-[1] ${
            isNeedDark && "bg-black"
          }`}
        ></div>
        <Image
          className="w-screen h-screen object-cover"
          src={imageProps.src}
          width={imageProps.width ?? undefined}
          height={imageProps.height ?? undefined}
          alt=""
        />
        {/* <Image
          className="w-screen h-screen object-cover"
          {...imageProps}
          src=
          sizes="100vw"
          priority
          alt="Задний фон главной страницы - рабочий стол адуторов"
        /> */}
      </div>
    </div>
  );
}
