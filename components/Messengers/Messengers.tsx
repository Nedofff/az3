



import React from 'react'
import {FaViber} from 'react-icons/fa'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'

export default function Messengers({className}:{className?:string}) {
  return (
    <div className={`flex space-x-0 xs:space-x-3 ${Boolean(className) && className}`}>
          <a target="_blank" href="https://t.me/+QTdvAQD03SRmYmJi"><BsTelegram className='duration-300 text-white text-4xl lg:text-4xl hover:text-[#259CD8] xl:text-4xl active:scale-90'/></a>
          {/* Вместо плюса используется %2B */}
          <a target="_blank" href="https://invite.viber.com/?g=e7jww5akoFHCVdxrGklY15Zd_LBrsQfh"><FaViber className='duration-300 bg-white w-9 rounded-full h-9 p-1.5 hover:bg-[#7D5FFB] active:scale-90' color='#242424'/></a>
          <a target="_blank" href="https://chat.whatsapp.com/K0eGmAL5JXN6GeQqx8rBnJ"><BsWhatsapp className='duration-300 bg-white w-9 rounded-full h-9 p-1.5 hover:bg-green-500 active:scale-90' color='#242424'/></a>
      </div>
  )
}
