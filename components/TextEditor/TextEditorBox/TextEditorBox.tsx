'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicToolPanel = dynamic(() => import('@/components/TextEditor/ToolPanel/ToolPanel').then(mod => mod.default), { ssr: false })
const DynamicTextEditor = dynamic(() => import('@/components/TextEditor/TextEditor/TextEditor').then(mod => mod.default), { ssr: false })

export default function TextEditorBox() {

  return (
    <div className='flex justify-between w-screen bg-slate-200 h-screen'>
      <DynamicTextEditor />
        <DynamicToolPanel />
    </div>
  )
}
