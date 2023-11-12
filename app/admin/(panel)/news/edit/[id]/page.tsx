'use client'

import TextEditorBox from '@/components/TextEditor/TextEditorBox/TextEditorBox'
import { useTextEditor } from '@/hooks/textEditorSlice/useTextEditor'
import useTextEditorActions from '@/hooks/textEditorSlice/useTextEditorActions'
import React, { useEffect, useState } from 'react'

interface IParams {
    params: {
        id: string
    }
}

export default function Page({params}:IParams) {
  const {clearPreinstalledContent, setPreinstalledContent} = useTextEditorActions()
  const {preinstalledContent} = useTextEditor()
  const [u, setU] = useState(false)
  useEffect(() => {
    if (params.id) {
      // TODO: сделать тут запрос на серв и потом занос в херь ниже
      setPreinstalledContent('<p>kek</p>')  
    } else {
      clearPreinstalledContent()
    }
  }, [])
  return (
    <>
      {/* TODO: сюда вставить провайдер для текстЭдитора и ему заносить инфу, убрать из глобального провайдер */}
    <button onClick={() => {setU(!u); console.log(preinstalledContent)}}>CLICK</button>
    {u && <TextEditorBox/>}
    </>
  )
}
