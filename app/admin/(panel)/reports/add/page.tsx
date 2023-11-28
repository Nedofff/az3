"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler, UseControllerProps, useController } from "react-hook-form";



export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormInputAddReport>();
  const input = useRef(null)
  const [file, setFile] = useState<File>()

  const onSubmit: SubmitHandler<IFormInputAddReport> = async (data) => {
    
    if (!file) {
      alert('Загрузите файл отчета')
      return
    }
    try {
      const formData = new FormData()
      formData.set('file', file)
      formData.set('other', JSON.stringify(data))
    reset()
      const res = await fetch('/api/admin/reports', {
          method: 'POST',
          body: formData
      })

      if (!res.ok) throw new Error(await res.text())

  } catch (error: any) {
      console.error(error)
  }

  };
  // const clickHandler = () => {
  //   console.log(watch('reportFile').name)
  // }

  return (
    <form
      className="flex flex-col bg-accent-color p-5 sm:p-16 rounded-md space-y-12 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <label className="flex flex-col" htmlFor="login">
          Год
        </label>
        <input
          className="text-black outline-none px-3 py-1 rounded-sm w-full"
          defaultValue={new Date().getFullYear()}
          {...register("year", {required: true})}
        />
        <label className="flex flex-col" htmlFor="login">
          Лист ОЗО <span className="text-sm">(enter - новая организация)</span>
        </label>
        {/* <input
          className="text-black outline-none px-3 py-1 rounded-sm"
          {...register("listSSO", {required: true})}
        /> */}
        <textarea className="text-black outline-none w-full rounded-sm p-3" {...register("listOrganization", {required: false})}></textarea>
        <label className="flex flex-col" htmlFor="login">
          Выручка от ОЗО
        </label>
        <input
          className="text-black outline-none px-3 py-1 rounded-sm w-full"
          defaultValue={'0'}
          {...register("moneySSO", {required: true})}
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка всего
        </label>
        <input
          className="text-black outline-none px-3 py-1 rounded-sm w-full"
          {...register("moneyAll", {required: true})}
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка от аудиторских услуг
        </label>
        <input
          className="text-black outline-none px-3 py-1 rounded-sm w-full"
          {...register("moneyAudit", {required: true})}
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка от прочих услуг
        </label>
        <input
          className="text-black outline-none px-3 py-1 rounded-sm w-full"
          {...register("moneyOther", {required: true})}
        />
        <label className="flex flex-col" htmlFor="login">
          Файл отчета
        </label>
        <input type="file" className=""  onChange={(e) => setFile(e.target.files![0])}/>

        
      </div>
      <div className="space-y-5">
      <button
        className="bg-main-color w-full px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200"
        type="submit"
      >
        Добавить
      </button>
      <Link
      href={"/admin/reports"}
        className="block text-center bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200"
        type="submit"
      >
        Назад
      </Link>
      </div>
    </form>
  );
}

