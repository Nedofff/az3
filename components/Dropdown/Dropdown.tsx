"use client";

import React, { useState, useCallback, useRef } from "react";
interface IProps {
  label: string;
  children: React.ReactNode;
  className?: string
}

export default function Dropdown({ children, label, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const refCollapsed = useRef<HTMLDivElement>(null);
  const toggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
    if (isOpen) {
      refCollapsed.current!.style.maxHeight = "0";
    } else {
      refCollapsed.current!.style.maxHeight = refCollapsed.current!.scrollHeight + 12 + "px";
    }
  }, [isOpen]);

  return (
      <div className={className}>
        <button className=" text-white outline-none duration-150 w-full py-2 bg-sub-color hover:bg-accent-color" onClick={toggle}>{label}</button>
        <div className='duration-300 overflow-hidden max-h-0' ref={refCollapsed}>
          <div className='py-3 border-sub-color border-r-2 border-l-2 mb-2'> {children} </div>
        </div>
      </div>
  );
}
