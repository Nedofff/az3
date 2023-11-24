"use client";

import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function OneReport({ id, year }: { id: string; year: string }) {
    const clickHandler = async () => {
        await fetch('/api/admin/reports', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        })
    }
    
  return (
    <div className="flex py-3 rounded-lg px-5 justify-between shadow-lg bg-white">
      <div className="mr-5">{year}</div>
      <button
        className="text-red-600 duration-200 hover:rotate-90 text-2xl font-bold"
        onClick={clickHandler}
      >
        <RxCross1 />
      </button>
    </div>
  );
}
