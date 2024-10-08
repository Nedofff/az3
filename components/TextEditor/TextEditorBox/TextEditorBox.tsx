'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicToolPanel = dynamic(() => import('@/components/TextEditor/ToolPanel/ToolPanel').then(mod => mod.default), { ssr: false })
const DynamicTextEditor = dynamic(() => import('@/components/TextEditor/TextEditor/TextEditor').then(mod => mod.default), { ssr: false })

export default function TextEditorBox(props:{newsId?:string, title?:string, srcToImage?:string | null}) {

  return (
    <div className='flex justify-between w-screen h-screen'>
      <DynamicTextEditor />
        <DynamicToolPanel {...props}/>
    </div>
  )
}
