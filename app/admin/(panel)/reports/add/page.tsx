"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './page.module.css'
import NewsLoading from "@/components/NewsPage/NewsLoading/NewsLoading";
import Loading from "@/components/Loading/Loading";

type TStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormInputAddReport>();
  const input = useRef(null)
  const [file, setFile] = useState<File>()
  const [status, setStatus] = useState<TStatus>('idle')


  const onSubmit: SubmitHandler<IFormInputAddReport> = async (data) => {
    setStatus('loading')
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
      if (!res.ok) {
        setStatus('error')
      } else {
        setStatus('success')
      }
  } catch (error: any) {
    setStatus('error')
  }
  setTimeout(() => setStatus('idle'), 2000)

  };
  const inputStyles = `text-black outline-none px-3 py-1 rounded-sm w-full ${styles.inputNumberWithoutSpin}`
  return (
    <form
      className="flex flex-col bg-accent-color p-5 sm:p-16 rounded-md duration-75 space-y-12 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <label className="flex flex-col" htmlFor="login">
          Год
        </label>
        <input
          className={inputStyles}
          defaultValue={new Date().getFullYear()}
          {...register("year", {required: true})}
          type="number"
        />
        <label className="flex flex-col" htmlFor="login">
          Лист ОЗО <span className="text-sm">(enter - новая организация)</span>
        </label>
        <textarea className="text-black outline-none w-full rounded-sm p-3" {...register("listOrganization", {required: false})}></textarea>
        <label className="flex flex-col" htmlFor="login">
          Выручка от ОЗО
        </label>
        <input
          className={inputStyles}
          defaultValue={'0'}
          {...register("moneySSO", {required: true})}
          type="number"
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка всего
        </label>
        <input
          className={inputStyles}
          {...register("moneyAll", {required: true})}
          type="number"
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка от аудиторских услуг
        </label>
        <input
          className={inputStyles}
          {...register("moneyAudit", {required: true})}
          type="number"
        />
        <label className="flex flex-col" htmlFor="login">
          Выручка от прочих услуг
        </label>
        <input
          className={inputStyles}
          {...register("moneyOther", {required: true})}
          type="number"
        />
        <label className="flex flex-col" htmlFor="login">
          Файл отчета
        </label>
        <input type="file" className=""  onChange={(e) => setFile(e.target.files![0])}/>
        {status==='success' && <p className="text-green-400 text-center mt-5">Успешно добавлен</p>}
        {status==='error' && <p className="text-red-500 text-center mt-5">Не удалось добавить</p>}
      </div>
      <div className="space-y-5">
      <button
        className="bg-main-color w-full px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200"
        type="submit"
      >
        {status==='loading' ? <div className="w-full flex justify-center"><Loading className="h-9 w-9"/></div>: 'Добавить'}
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

