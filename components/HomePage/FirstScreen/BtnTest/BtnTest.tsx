'use client'

import useModalTestActions from '@/hooks/modalTest/useModalTestActions'
import React from 'react'

export default function BtnTest() {
    const {openModal} = useModalTestActions()

  return (
    <button onClick={() => openModal()} className="bg-white outline-none font-bold uppercase tracking-wider rounded-sm text-black px-8 py-2 hover:bg-accent-color duration-300 active:scale-95">Рассчитать</button>
  )
}
