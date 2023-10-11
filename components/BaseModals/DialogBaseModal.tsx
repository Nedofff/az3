'use client'
import React from "react";
import {createPortal} from "react-dom";
import styles from './DialogModal.module.css'

const ModalWindow = ({children, title, onClose }:{children:React.ReactNode, title:React.ReactNode, onClose:()=>void}) => {

  return (
    <div onClick={onClose} role="dialog" className="w-screen sm:p-5 p-0 h-screen fixed overflow-y-scroll top-0 bg-opacity-70 flex items-center justify-center left-0 z-50 bg-black">
      <div onClick={e => e.stopPropagation()} className="bg-white py-5 rounded-sm px-10 h-screen w-screen sm:h-auto sm:w-3/4">
        <div className="flex justify-between pb-2 space-x-4">
        <h3>{title}</h3>
        <button onClick={onClose} className={styles.close}><span></span></button>
        </div>
        <div>
        {children}
        </div>
      </div>
    </div>
  );
};


const DialogBaseModal = ({children, title, onClose}:{children:React.ReactNode, title:any, onClose:()=>void}) => {
  return (
    <>
    {createPortal(<ModalWindow onClose={onClose} title={title}>{children}</ModalWindow>, document.body)}
    </>
  );
};

export default DialogBaseModal;
