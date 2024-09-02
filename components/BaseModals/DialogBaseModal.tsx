"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./DialogModal.module.css";

const ModalWindow = ({
  children,
  title,
  onClose,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
  }, []);

  const onCloseModal = () => {
    onClose();
    document.documentElement.style.overflowY = "scroll";
  };

  return (
    <div
      onClick={onCloseModal}
      role="dialog"
      className={`w-screen sm:p-5 p-0 overflow-hidden ${styles.h100} fixed top-0 bg-opacity-70 flex items-center justify-center left-0 z-50 bg-black`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white overflow-hidden py-5 rounded-sm px-2 sm:px-10 h-full w-screen sm:h-[95%] sm:w-3/4`}
      >
        <div className="flex justify-between pb-2 space-x-4">
          <h3 className="font-bold text-xl text-sub-color">{title}</h3>
          <button onClick={onCloseModal} className={styles.close}>
            <span></span>
          </button>
        </div>
        <div className="h-full overflow-y-auto pb-5">{children}</div>
      </div>
    </div>
  );
};

const DialogBaseModal = ({
  children,
  title,
  onClose,
}: {
  children: React.ReactNode;
  title: any;
  onClose: () => void;
}) => {
  return (
    <>
      {createPortal(
        <ModalWindow onClose={onClose} title={title}>
          {children}
        </ModalWindow>,
        document.body
      )}
    </>
  );
};

export default DialogBaseModal;
