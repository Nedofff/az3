'use client'


import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function page() {

  const btnStyle = 'block bg-main-color py-2 px-3 rounded-lg w-full sm:w-auto duration-150 hover:scale-95 active:bg-accent-color'
  return (
      <div className='bg-accent-color flex flex-col py-10 px-1 sm:p-16 space-y-6 rounded-lg'>
          <Link href={'/admin/news'} className={btnStyle}>Управление новостями</Link>
          <Link href={'/admin/reports'} className={`${btnStyle} break-words max-w-xl`}>Добавить отчеты, информацию об аудируемых лицах и величину выручки от оказанных аудиторской организацией услуг</Link>
          {/* <Link href={'/admin/users'} className={btnStyle}>Управление пользователями</Link> */}
          <button onClick={() => signOut()} className={btnStyle}>Выйти</button>
      </div>
  )
}
