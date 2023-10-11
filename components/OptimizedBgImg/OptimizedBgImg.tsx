import React from "react";
import Image from "next/image";

interface IImageProps {
  src: string;
  width: number;
  height: number;
}

export default function OptimizedBgImg({
  imageProps,
}: {
  imageProps: IImageProps;
}) {
  return (
    <div
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
        <div className="w-screen bg-black bg-opacity-40 h-screen fixed top-0 left-0 z-[1]"></div>
        <Image
          className="w-screen h-screen object-cover"
          {...imageProps}
          sizes="100vw"
          priority
          alt="Задний фон главной страницы - рабочий стол адуторов"
        />
      </div>
    </div>
  );
}
