'use client'

import React, { useEffect, useState } from 'react'
import styles from './CircleAnimation.module.css'

export default function CircleAnimation() {
    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    // console.log(document.body.getBoundingClientRect())
    //     })
    // })

    useEffect(() => {
        const circle = document.querySelector<HTMLDivElement>('.circle')
        const windowsClientHeight = document.documentElement.clientHeight
        const windowsclientWidth = document.documentElement.clientWidth
        circle!.style.left = '73.1053%'

        // clientWidth/clientHeight
        let count = 0
        let side = 'left'
        let deg = 0
        let prevTopStep = 0
        let coeffDeg = 0

        const eventHandler = () => {
                if((-529.7999877929688) > document.body.getBoundingClientRect().y && -4571.2001953125 < document.body.getBoundingClientRect().y) {
                    const topStep = (-1 * document.body.getBoundingClientRect().y) + windowsClientHeight/2 - 162.4000244140625
                    circle!.style.top = `${topStep}px`
                    const percent = ((-1 * document.body.getBoundingClientRect().y / windowsClientHeight) * 100) % 100 - 0.00001
        
                    if (side === 'left') {
                        if (percent <= 82) {
                            circle!.style.right = 'unset'
                            circle!.style.left = `${percent}%`
                            count += 1
                            const diffDeg = (prevTopStep - topStep)  * -1
                            circle!.style.transform = `rotate(${deg+=diffDeg}deg)`
                        }
                        if (percent >= 98.7 && count >= 15) {
                            side = 'right'
                            count = 0
                        }
        
                    }
                    if (side === 'right') {
                        if (percent <= 82) {
                            circle!.style.left = 'unset'
                            circle!.style.right = `${percent}%`
                            count += 1
                            const diffDeg = (prevTopStep - topStep)
                            circle!.style.transform = `rotate(${deg+=diffDeg * 3}deg)`
                        }
                        if (percent >= 98.7 && count >= 15) {
                            side = 'left'
                            count = 0
                        }
                    }
        
                    prevTopStep = topStep
                }
        }
        document.addEventListener('scroll', eventHandler)

        return () => {
            document.removeEventListener('scroll', eventHandler)
        }
    }, [])


  return (
    <div className='circle absolute right-0 -m-[5px] w-[205px] h-[205px] z-[3] rounded-full duration-75'>
        {/* <Image className='absolute shadow-md shadow-black rounded-full -m-[5px] w-full h-full' src={"/circle.png"} width={200} height={200} alt=''/> */}
        <div className={`w-full ${styles['shadow-black']} bg-accent-color flex h-full overflow-hidden  absolute rounded-full`}>
            <div className={`w-full h-full ${styles['shadow-white']} rounded-full shadow-white`}>
            </div>
        </div>
    </div>
  )
}
