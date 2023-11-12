'use client'

import React, { useEffect } from 'react'

interface ITransition{
    delay?: number
    duration?: number
}
interface IProps {
    id: string
    children: React.ReactNode
    className?: string
    amount?: number
    transition?: ITransition
}

export default function AnimationOpacity({id, transition={delay:0, duration: 0},amount=0,  children, className}:IProps) {

    useEffect(() => {
        const element = document.querySelector<HTMLDivElement>(`#${id}`)!
        const heightElem = element.clientHeight
        const clientHeight = document.documentElement.clientHeight
        const scrollHandler = () => {
            if (document.querySelector(`#${id}`)!.getBoundingClientRect().y - clientHeight + heightElem * amount <= 0) {
                element.style.opacity = '1'
                document.removeEventListener('scroll', scrollHandler)
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
        transition: `all ${transition.duration}ms ${transition.delay}ms ease-in-out`,
        opacity: 0
    }} id={id}>
        {children}
    </div>
  )
}
