
import OneNewsForEdit from '@/components/AdminPage/OneNewsForEdit/OneNewsForEdit'
import Link from 'next/link'
import React from 'react'



export default async function page() {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/admin/news/list`)
    const news = await response.json() as {id: string, title:string}[]

  return (
    <div className='bg-accent-color p-10 rounded-lg w-3/4'>
        <div className='flex justify-between mb-5 items-center'>
        <p className='text-white text-lg font-normal text-center'>Нажмите на новость для редактирования</p>
        <Link className='bg-main-color mr-1 px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 text-center' href={'/admin/news'}>Назад</Link>
        </div>
        <div className='space-y-2'>
        {news.map(item => (
            <OneNewsForEdit key={item.id} id={item.id} title={item.title}/>
        ))}
        </div>
    </div>
  )
}
