


import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
       {children} 
    </main>
  )
}
