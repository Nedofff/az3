'use client'

import OneNewsForEdit from '@/components/AdminPage/OneNewsForEdit/OneNewsForEdit'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [news, setNews] = useState<{id: string, title:string}[]>()
    
  useEffect(()=>{
    const getNews = async () => {
      const response = await fetch(`/api/admin/news/list/`)
    const news = await response.json() as {id: string, title:string}[]
    setNews(news)
    }
    getNews()
  },[])

  return (
    <div className='bg-accent-color p-10 rounded-lg w-3/4'>
        <div className='flex justify-between mb-5 items-center'>
        <p className='text-white text-lg font-normal text-center'>Нажмите на новость для редактирования</p>
        <Link className='bg-main-color mr-1 px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 text-center' href={'/admin/news'}>Назад</Link>
        </div>
        <div className='space-y-2'>
        {Boolean(news) && news!.map(item => (
            <OneNewsForEdit key={item.id} id={item.id} title={item.title}/>
        ))}
        </div>
    </div>
  )
}
