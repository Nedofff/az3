



import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function InfoSection({label, children}:{label:string, children:React.ReactNode}) {
  return (
    // pt-16
    <section className='bg-main-color px-1 sm:px-28 md:px-3'>
        <Dropdown needHeading={true} mobileBoard={false} label={label}>
            {children}
        </Dropdown>
    </section>
  )
}
