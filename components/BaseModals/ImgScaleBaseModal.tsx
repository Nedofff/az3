"use client";
import React, { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./ImgScaleBaseModal.module.css";
import Image from "next/image";
// TODO: починить скейлинг картинки, лучше всего заметно на странице service/audit/#Порядок взаимодействия
const ModalWindow = ({
  src,
  width,
  height,
  alt,
  onClose,
}: {
  onClose: () => void;
  src: string;
  width: number;
  height: number;
  alt: string;
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const clickHandler = () => {
    ref.current!.classList.add('fade-out-div')
    setTimeout(() => {
      onClose();
    }, 290)
  }

  return (
    <>
      <div
        onClick={clickHandler}
        ref={ref}
        role="dialog"
        className="w-full fade-in-div h-full fixed top-0 bg-opacity-70 left-0 flex items-center justify-center z-50 bg-black"
      >
        <div className='relative w-full h-full flex items-center justify-center'>
          <button onClick={clickHandler} className={styles.close}>
            <span></span>
          </button>
          <Image
            className="w-full h-4/5 cursor-zoom-out"
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

const ImgScaleBaseModal = ({
  src,
  width,
  height,
  alt,
  onClose,
}: {
  onClose: () => void;
  src: string;
  width: number;
  height: number;
  alt: string;
}) => {
  return (
    <>
      {createPortal(
        <ModalWindow
          onClose={onClose}
          src={src}
          width={width}
          height={height}
          alt={alt}
        />,
        document.body
      )}
    </>
  );
};

export default ImgScaleBaseModal;
