'use client'

import NewsCell from '@/components/NewsPage/NewsCell/NewsCell'
import SearchBar from '@/components/NewsPage/SearchBar/SearchBar'
import React, { useLayoutEffect, useState } from 'react'

interface IOneNews {
  id: string;
  src: string;
  title: string;
  width: number;
  height: number;
}

export default function NewsPage() {
  const [dataNews, setDataNews] = useState<IOneNews[]>()

  useLayoutEffect(() => {
    if (!dataNews) {
      onSearch('')
    }
  })

  const onSearch = async (queryParams:string) => {
    let url = 'http://localhost:3000/api/news'

    if (queryParams !== '') {
      url += `?q=${queryParams}`
    }

    const response = await fetch(url)
    const data:IOneNews[] = await response.json()

    setDataNews(data)
  }

  return (
    <main className='pt-28 pb-24 flex flex-col items-center'>
      <h1 className='heading'>Новости</h1>
      <SearchBar onSearch={onSearch}/>
      <div className='flex flex-col sm:flex-row sm:flex-wrap sm:px-5 sm:w-5/6 sm:min-w-min'>
        {Boolean(dataNews) && dataNews!.map(item => (
          <NewsCell key={item.id} {...item}/>
        ))}
      </div>
    </main>
  )
}
