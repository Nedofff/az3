'use client'

import React, { useEffect, useState } from 'react'

interface ITransition{
    delay?: number
    duration?: number
}
interface IProps {
    id: string
    children: React.ReactNode
    className?: string
    side: 'left' | 'right'
    amount?: number
    transition?: ITransition
}

export default function AnimationShift({id, side, transition={delay:0, duration: 0},amount=0,  children, className}:IProps) {
    const [clientWidth, setClientWidth] = useState(1980)

    useEffect(() => {
        const element = document.querySelector<HTMLDivElement>(`#${id}`)!
        const heightElem = element.clientHeight
        const clientHeight = document.documentElement.clientHeight
        setClientWidth(document.documentElement.clientWidth)
        const scrollHandler = () => {
            if (document.querySelector(`#${id}`)!.getBoundingClientRect().y - clientHeight + heightElem * amount <= 0) {
                element.style.transform = 'translateX(0)'
                element.style.opacity = '1'
                // document.removeEventListener('scroll', scrollHandler)
            }
        }

        document.addEventListener('scroll', scrollHandler)

        return () => {
            try {
            document.removeEventListener('scroll', scrollHandler)
                
            } catch (error) {}
        }
    }, [])

  return (
    <div className={`${className}`} style={{
        transform: `translateX(${side === 'left' ? '-' : '+'}${clientWidth * 0.6}px)`,
        transition: `all ${transition.duration}ms ${transition.delay}ms ease-in-out`,
        opacity: .5
    }} id={id}>
        {children}
    </div>
  )
}
