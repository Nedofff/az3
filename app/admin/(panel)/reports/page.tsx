


import Link from 'next/link'
import React from 'react'
// TODO: реализовать добавление отчетов

export default function page() {
  return (
      <div className='bg-accent-color p-10 space-y-5 rounded-lg'>
        <Link className='bg-main-color text-center px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 block' href={'/admin/reports/add'}>Добавить отчет и остальное</Link>
        <Link className='bg-main-color text-center px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 block' href={'/admin/reports/delete'}>Удалить отчет и остальное</Link>
        <Link className='bg-main-color text-center px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 block' href={'/admin/'}>Назад</Link>
      </div>
  )
}
