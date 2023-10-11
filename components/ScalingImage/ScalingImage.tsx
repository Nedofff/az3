'use client'


import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import ImgScaleBaseModal from '../BaseModals/ImgScaleBaseModal'

export default function ScalingImage({src, width, height, alt, className}: {src: string, width: number, height: number, alt: string, className?: string}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpenness = useCallback(
        () => {
            setIsOpen((stateIsOpen) => !stateIsOpen)
        },
      [],
    )
    
  return (
    <>
    <button className={`${className} cursor-zoom-in`} onClick={toggleOpenness}>
    <Image className='w-full h-auto ' src={src} width={width} height={height} alt={alt}/>
    </button>
    {isOpen && (
        <ImgScaleBaseModal src={src} width={width} height={height} alt={alt} onClose={toggleOpenness}/>
    )}
    </>
  )
  
}
