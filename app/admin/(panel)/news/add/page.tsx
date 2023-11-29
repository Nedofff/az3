import TextEditorBox from '@/components/TextEditor/TextEditorBox/TextEditorBox'
import TextEditorProvider from '@/components/TextEditor/TextEditorProvider'
import React from 'react'

export default function page() {
  return (
    <TextEditorProvider>
      <TextEditorBox/>
    </TextEditorProvider>

  )
}

