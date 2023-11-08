
import React from 'react'
import { GrCheckmark } from "react-icons/gr";

export default function ManagmentPage() {
  return (
    <main className='pt-32 pb-20 md:flex md:justify-center md:flex-col md:items-center'>
      <h1 className="text-4xl text-sub-color mb-8 font-bold text-center px-2 break-words">Управленческий консалтинг</h1>
      <div className='space-y-4 px-2 sm:space-y-0 md:w-2/3 sm:grid sm:grid-rows-2 sm:justify-center sm:grid-cols-2 gap-10'>
        <OneItem header='Выстраивание модели учёта групп компаний' text='Для получения общей финансовой картины'/>
        <OneItem header='Проверка финансовых показателей компаний' text='Подтверждение финансовых показателей управленческого учета'/>
        <OneItem header='Выстраивание управленческого учета в 1C' text='Разработка системы субконто под конкретные задачи Вашей компании'/>
        <OneItem header='Оптимизация финансовых потоков' text='Построение бюджета компании с учетом плановых налоговых и прочих платежей'/>
        
      </div>
    </main>
  )
}



function OneItem({header, text}: {header: string, text: string}) {
  return (
    <div className='flex'>
      <div className='mr-2 pt-1 sm:mr-0 sm:pt-0'>
      <GrCheckmark className="w-5 h-5 sm:hidden" />
      </div>
      <div>
      <h2 className='text-lg text-sub-color font-semibold'>{header}</h2>
      <p>{text}</p>
      </div>
    </div>
  )
}

