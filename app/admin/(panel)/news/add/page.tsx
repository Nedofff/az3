import TextEditorBox from '@/components/TextEditor/TextEditorBox/TextEditorBox'
import dynamic from 'next/dynamic'
import React from 'react'

// const DynamicToolPanel = dynamic(() => import('@/components/TextEditor/ToolPanel/ToolPanel').then(mod => mod.default), { ssr: false })
// const DynamicTextEditor = dynamic(() => import('@/components/TextEditor/TextEditor/TextEditor').then(mod => mod.default), { ssr: false })

export default function page() {
    // TODO: СДЕЛАТЬ РЕДАКТОР ТУТ
  return (
    // <div className='w-screen h-screen'>
    //   <DynamicToolPanel />
    //   <DynamicTextEditor />
    // </div>
    <TextEditorBox/>
  )
}

