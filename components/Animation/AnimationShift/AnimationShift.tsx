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
        const clientWidth = document.documentElement.clientWidth
        setClientWidth(document.documentElement.clientWidth)
        try {
        if (document.querySelector(`#${id}`)!.getBoundingClientRect().y - clientHeight + heightElem * amount <= 0) {
            setTimeout(() => {
                element.style.transform = 'translateX(0)'
                element.style.opacity = '1'
            }, 100)
        }
    } catch (error) {
            
    }
        

        const scrollHandler = () => {
            try {
            if (document.querySelector(`#${id}`)!.getBoundingClientRect().y - clientHeight + heightElem * amount <= 0) {
                element.style.transform = 'translateX(0)'
                element.style.opacity = '1'
                // document.removeEventListener('scroll', scrollHandler)
            }
        } catch (error) {
                
        }
        }

        document.addEventListener('scroll', scrollHandler)

        return () => {
            try {
            document.removeEventListener('scroll', scrollHandler)
                
            } catch (error) {}
        }
    }, [amount, id])

  return (
    <div className={`${className} zindex`} style={{
        transform: `translateX(${side === 'left' ? '-' : '+'}${clientWidth * (clientWidth >= 640 ? 0.6 : 1.1)}px)`,
        transition: `all ${transition.duration}ms ${transition.delay}ms ease-in-out`,
        opacity: .5
    }} id={id}>
        {children}
    </div>
  )
}
