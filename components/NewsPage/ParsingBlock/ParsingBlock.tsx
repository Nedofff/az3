import WrapperForText from '@/components/WrapperForText/WrapperForText'
import React, { useEffect } from 'react'

export default function ParsingBlock({text}:{text:string}) {

   
  return (
    <WrapperForText dangerouslySetInnerHTML={text} className="w-3/4 newsBlock">
    </WrapperForText>
  )
}
