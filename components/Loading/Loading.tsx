



import React from 'react'
import styles from './Loading.module.css'

export default function Loading({className}:{className?:string}) {
  return (
    <div className={`${styles.spinner} spinner-1 ${className}`}></div>
  )
}
