



import React from 'react'
import styles from './TeamGradientTitle.module.css'

export default function TeamGradientTitle({children}:{children:React.ReactNode}) {
  return (
    <h2 className={`${styles.gradientTitle} bg-gradient-to-r from-green-400 to-blue-500`}>{children}</h2>
  )
}
