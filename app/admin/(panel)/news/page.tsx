


import Link from 'next/link'
import React from 'react'
// TODO: Реализовать добавление и редактирование(мб просто удаление?) новостей
export default function page() {
  return (
    <div className='flex flex-col bg-accent-color rounded-lg p-10 space-y-4'>
      <Link className='bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 text-center' href='/admin/news/add'>Создать новость</Link>
      <Link className='bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 text-center' href='/admin/news/edit'>Редактировать новости</Link>
      <Link className='bg-main-color px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 text-center' href='/admin/'>Назад</Link>
    </div>
  )
}
