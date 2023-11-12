"use client";

import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function OneUser({ login, id, deleteUser }: { login: string; id: string, deleteUser:(id:string)=>void }) {

  return (
    <div className="flex py-3 rounded-lg px-5 justify-between shadow-lg bg-white">
      <div>{login}</div>
      <button className="text-red-600 duration-200 hover:rotate-90 text-2xl font-bold" onClick={() => deleteUser(id)}>
        <RxCross1 />
      </button>
    </div>
  );
}
