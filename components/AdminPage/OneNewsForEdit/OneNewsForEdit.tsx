'use client'

import Link from 'next/link'
import React from 'react'
import {BiSolidTrash} from 'react-icons/bi'

export default function OneNewsForEdit({id, title}:{id:string, title:string}) {
    const clickHadnelr:React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.stopPropagation()
       const answer = confirm('Вы действительно хотите удалить новость?')
       
       if (!answer) return;

       await fetch(`/api/admin/news/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
       })
        
    }

  return (
    <div className='flex '>
        <Link href={`/admin/news/edit/${id}/`} className='word-break block w-5/6 py-3 rounded-s-lg px-5 shadow-lg duration-500 hover:bg-sub-accent-color outline-none hover:text-white bg-white'>{title}</Link>
        <button onClick={clickHadnelr} className='flex border-s-2 h-full text-2xl w-1/6 border-black py-3 rounded-e-lg px-5 pr-6 justify-center duration-500 shadow-lg bg-white hover:bg-red-600 outline-none hover:text-white'><BiSolidTrash/></button>
    </div>
  )
}
