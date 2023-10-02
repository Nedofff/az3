'use client'

import React from 'react'
import useActionsModalService from '@/hooks/useActionsModalService'
import { useRouter } from 'next/navigation'

export default function AService({linkTo, children, title}: {linkTo:string, children:React.ReactNode, title?: string}) {
  const router = useRouter()
  const onClick = () => {
    router.push(`/service/${linkTo}`)
  }
  const {openModal} = useActionsModalService()
  return (
    <button onClick={onClick} className='bg-white text-start rounded-xl p-7 mb-5 w-full sm:w-4/5 lg:w-1/2 shadow-lg duration-500 hover:duration-500 active:duration-150 hover:shadow-2xl active:scale-95'>
        <h3 className='text-xl text-sub-color font-semibold mb-2'>{title}</h3>
        {children}
    </button>
  )
}
