'use client'

import React, { useEffect, useState } from 'react'
import { EditorApi } from '../useEditor';
import { BlockType, InlineStyle } from '../TextEditor/config';
import { useEditorApi } from '../TextEditorProvider';
import { usePathname, useRouter } from 'next/navigation';



const INLINE_STYLES_CODES = Object.values(InlineStyle)
const BLOCK_TYPES_CODES = Object.values(BlockType)
const dictToNormal:{
  [key: string]: string
} = {
  "header-two": 'Подзаголовок 1',
  "header-three": 'Подзаголовок 2',
  /* Цитата */
  // blockquote = "blockquote",
  /* Блок с кодом */
  // code = "code-block",
  /* Список */
  "unordered-list-item": 'Список',
  /* Нумерованный список */
  "ordered-list-item": 'Нумерованный список',
  /* Сноска */
  "cite": '',
  /* Простой текст */
  "unstyled": '',
  "BOLD":'Жирный',
  "ITALIC":'Курсив',
  "UNDERLINE":'Подчеркнутый',
}

export default function ToolPanel() {
    const {state, toggleInlineStyle, toggleBlockType,hasInlineStyle, addLink, toHtml, currentBlockType, clearState} = useEditorApi();
    const [header, setHeader] = useState('')
    const [file, setFile] = useState<File>()
    const router = useRouter()
    const path = usePathname()

    const handlerAddLink = () => {
        const url = prompt('URL:');
     
         if (url) {
           addLink(url);
         }
       }
     
       const styleBtns = 'bg-main-color w-full text-center px-5 py-2 whitespace-nowrap text-black hover:bg-opacity-50 duration-200 block'

       const backHandler = () => {

          // if (confirm('Вы действительно хотите выйти? Все несохраненные изменения будут потеряны')) {
            router.push('/admin/news')
          // }
       }
       const saveHandler = async () => {

         if (header === '') {
           alert('Отсутствует заголовок')
           return;
         }
        if (!file) {
          alert('Отсутствует картинка')
          return;
        }
        if (file.type.split('/')[0] !== 'image') {
          alert('Файл должен быть изображением')
          return;
        }

        const formData = new FormData()
        formData.set('file', file)
        formData.set('header', header)
        formData.set('html', toHtml())

        await fetch('/api/admin/news', {
          method: 'POST',
          body: formData
        })

        if (path.split('/')[3] === 'add') {
          setHeader('')
        setFile(undefined)
        clearState()
        }
       }

       const dopHadnler = () => {
        console.log(toHtml())
       }

  return (
    <div className='bg-accent-color w-fit text-white px-10 flex flex-col items-center pt-10'>
      <div className='flex w-full'>
        <button onClick={backHandler} className={styleBtns}>Назад</button>
        <button onClick={saveHandler} className={styleBtns}>Сохранить</button>
        <button onClick={dopHadnler} className={styleBtns}>PRINT</button>
      </div>
      <div className='my-5 flex flex-col'>
        <input value={header} onChange={(e) => setHeader(e.target.value)} className='w-full p-2 outline-none text-black' placeholder='Заголовок'/>
        <label className='mt-2' htmlFor="">Установить картинку</label>
        <input type='file' onChange={(e) => setFile(e.target.files![0])}/>
      </div>
      <div className=' w-full overflow-hidden rounded-md'>
      {BLOCK_TYPES_CODES.filter((type) => {
        return type !== 'cite' && type !== 'unstyled';
      }).map((type) => {
        const onMouseDown:React.MouseEventHandler<HTMLButtonElement> = (e) => {
          e.preventDefault();
          toggleBlockType(type);
        };
    
        return (
          <button
            key={type}
            className={`${styleBtns} ${currentBlockType===type && 'bg-sub-accent-color text-white'}`}
            onMouseDown={onMouseDown}
          >
            {dictToNormal[type]}
          </button>
        );
      })}
      {INLINE_STYLES_CODES.filter((code) => code !== 'ACCENT').map((code) => {
        const onMouseDown:React.MouseEventHandler<HTMLButtonElement> = (e) => {
          e.preventDefault();
          toggleInlineStyle(code);
        };
        return (
          <button
            key={code}
            className={`${styleBtns} ${hasInlineStyle(code) && 'bg-sub-accent-color text-white'}`}
            onMouseDown={onMouseDown}
          >
            {dictToNormal[code]}
          </button>
        );
      })}
      <button className={`${styleBtns}`} onClick={handlerAddLink}>
      Ссылка
    </button>
    </div>
    </div>
  )
}
