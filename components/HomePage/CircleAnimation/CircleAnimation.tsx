'use client'

import React, { useEffect, useState } from 'react'
import styles from './CircleAnimation.module.css'

export default function CircleAnimation() {

    useEffect(() => {
        const circle = document.querySelector<HTMLDivElement>('.circle')
        const windowsClientHeight = document.documentElement.clientHeight
        let windowsclientWidth = document.documentElement.clientWidth
        // circle!.style.left = '73.1053%'

        // clientWidth/clientHeight
        let count = 0
        let side = 'left'
        let deg = 0
        let prevTopStep = 0
        const controlValue = 87
        const scrollEventHandler = () => {
            const topStep = (-1 * document.body.getBoundingClientRect().y) + windowsClientHeight/3

            let coefPercent = 10
            if (windowsclientWidth < 640) {
                coefPercent = 0
            }
                    circle!.style.top = `${topStep}px`
                    const percent = ((-1 * document.body.getBoundingClientRect().y / windowsClientHeight) * 100) % 100 + coefPercent
        
                    if (side === 'left') {
                        if (percent <= controlValue) {
                            circle!.style.right = 'unset'
                            circle!.style.left = `${percent}%`
                            count += 1
                            const diffDeg = (prevTopStep - topStep)  * -1
                            circle!.style.transform = `rotate(${deg+=diffDeg}deg)`
                        }
                        if (percent >= controlValue && count >= 15) {
                            side = 'right'
                            count = 0
                        }
        
                    }
                    if (side === 'right') {
                        if (percent <= controlValue) {
                            circle!.style.left = 'unset'
                            circle!.style.right = `${percent}%`
                            count += 1
                            const diffDeg = (prevTopStep - topStep)
                            circle!.style.transform = `rotate(${deg+=diffDeg * 3}deg)`
                        }
                        if (percent >= controlValue && count >= 15) {
                            side = 'left'
                            count = 0
                        }
                    }
        
                    prevTopStep = topStep
                // }
        }
        const resizeScrollHandler = () => {
            windowsclientWidth = document.body.clientWidth
        }
        // document.querySelector('body')!.addEventListener('resize', resizeScrollHandler)
        document.addEventListener('scroll', scrollEventHandler)
        window!.addEventListener('resize', resizeScrollHandler)

        

        return () => {
            document.removeEventListener('scroll', scrollEventHandler)
            document.removeEventListener('resize', resizeScrollHandler)
        }
    }, [])

    // -m-[5px] w-[100px] h-[100px]
  return (
    <div className='circle absolute right-0 w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] z-[3] rounded-full duration-75'>
        {/* <Image className='absolute shadow-md shadow-black rounded-full -m-[5px] w-full h-full' src={"/circle.png"} width={200} height={200} alt=''/> */}
        <div className={`w-full ${styles['shadow-black']} bg-[#64615c] bg-opacity-20 flex h-full overflow-hidden absolute rounded-full`}>
            <div className={`w-full h-full ${styles['gradien-inner']} ${styles['shadow-white']} rounded-full shadow-white flex items-center justify-center`}>
            </div>
        </div>
    </div>
  )
}
