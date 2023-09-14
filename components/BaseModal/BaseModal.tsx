import React from "react";
import {createPortal} from "react-dom";
import styles from './Modal.module.css'

const ModalWindow = ({children, title }:{children:React.ReactNode, title:string}) => {
  return (
    <div role="dialog" className="w-screen h-screen fixed top-0 bg-opacity-70 flex items-center justify-center left-0 z-50 bg-black">
      <div className=" bg-white py-5 rounded-sm px-10">
        <div className="flex justify-between">
        <h2>{title}</h2>
        <button className={styles.close}><span></span></button>
        </div>
        <div>
        {children}
        </div>
      </div>
    </div>
  );
};


const BaseModal = ({children, title}:{children:React.ReactNode, title:string}) => {
  return (
    <>
    {createPortal(<ModalWindow title={title}>{children}</ModalWindow>, document.body)}
    </>
  );
};

export default BaseModal;
