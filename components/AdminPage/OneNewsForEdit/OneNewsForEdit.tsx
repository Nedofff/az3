'use client'

import Link from 'next/link'
import React from 'react'
import {BiSolidTrash} from 'react-icons/bi'

export default function OneNewsForEdit({id, title, onClick}:{id:string, title:string, onClick:()=>void}) {
    const clickHandler:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation()
      onClick()
    }
  return (
    <div className='flex '>
        <Link href={`/admin/news/edit/${id}/`} className='word-break block w-5/6 py-3 rounded-s-lg px-5 shadow-lg duration-500 hover:bg-sub-accent-color outline-none hover:text-white bg-white'>{title}</Link>
        <button onClick={clickHandler} className='flex border-s-2 h-full text-2xl w-1/6 border-black py-3 rounded-e-lg sm:px-5 sm:pr-6 justify-center duration-500 shadow-lg bg-white hover:bg-red-600 outline-none hover:text-white'><BiSolidTrash/></button>
    </div>
  )
}
