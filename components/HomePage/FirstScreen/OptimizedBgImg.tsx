


import React from 'react'
import Image from 'next/image'

export default function OptimizedBgImg() {
  return (
    <div
  style={{
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    clipPath: 'inset(0 0 0 0)',
  }}
>
  <div
    style={{
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
    }}
  >
    <div className='w-screen bg-black bg-opacity-40 h-screen fixed top-0 left-0 z-[1]'></div>
    <Image
      src="/firstScreen.jpg"
      className='w-screen h-screen object-cover'
      width={1920}
      height={1920}
      sizes="100vw"
      priority
      alt='Задний фон главной страницы - рабочий стол адуторов'
    />
  </div>
</div>
  )
}
