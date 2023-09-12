'use client'
import React from 'react'

export default function Recall({
    name,
    company,
    text
}:IFeedback) {
  return (
    <div className='h-[110%] md:h-full md:w-1/3 cursor-pointer duration-500 hover:scale-105 active:scale-95 active:duration-150'>
    <article className='px-7 md:px-2 lg:px-7 flex flex-col md:w-full md:h-full md:content-between lg:items-center'>
        <blockquote className='bg-white rounded-md p-4 shadow-sm lg:h-full lg:p-8' >
            {text}...
        </blockquote>
        <div className='ml-2 mt-2'>
            <h3 className='font-medium text-center text-xl'>{name}</h3>
            <p className='opacity-70 text-center'>{company}</p>
        </div>
    </article>
    </div>
  )
}
