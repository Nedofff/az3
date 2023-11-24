import TextEditorBox from '@/components/TextEditor/TextEditorBox/TextEditorBox'
import TextEditorProvider from '@/components/TextEditor/TextEditorProvider'
import React from 'react'

interface IParams {
    params: {
        id: string
    }
}
export default async function Page({params}:IParams) {
  const response = await fetch(`http://localhost:3000/api/admin/news/edit?postId=${params.id}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const preinstalledContent = (await response.json()).body
  return (
    <>
    {/* TODO: Сделать возможность смены заголовка и картинки */}
    <TextEditorProvider preinstalledContent={preinstalledContent}>
    {!!preinstalledContent ? <TextEditorBox/> : <div>Такого элемента не существует</div>}
    </TextEditorProvider>
    </>
  )
}
