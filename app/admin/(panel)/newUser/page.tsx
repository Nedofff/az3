import FormAddUser from "@/components/AdminPage/newUser/FormAddUser";
import UsersBlock from "@/components/AdminPage/newUser/UsersBlock";
import Link from "next/link";
import React from "react";

export default function page() {
  const btnStyle =
    "block bg-main-color py-2 px-3 rounded-lg w-full sm:w-auto duration-150 hover:scale-95 active:bg-accent-color";

  return (
      <div className="flex flex-col items-center justify-start bg-accent-color rounded-lg">
        <div className="flex flex-col sm:flex-row space-x-8">
        <div className="bg-accent-color flex flex-col p-5 pb-0 rounded-lg sm:pt-10 sm:pl-10 space-y-3 sm:space-y-3 rounded-s-lg">
          <h2 className="text-white text-xl font-bold">
            Добавить пользователя
          </h2>
          <FormAddUser />
        </div>
        <div className=" bg-accent-color py-5 pb-0 sm:pt-10 pr-5 sm:pr-10  rounded-e-lg">
          <h2 className="text-white text-xl font-bold">Удалить пользователя</h2>
          <UsersBlock />
        </div>
        </div>
      <Link href={"/admin"} className="mb-8 bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200">Назад</Link>
      </div>
  );
}
