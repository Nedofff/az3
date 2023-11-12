'use client'

import React from 'react'
import { ContentState } from 'draft-js';
import { useEditorApi } from '../../TextEditorProvider';

type TLinkProps = {
    children: React.ReactNode;
    contentState: ContentState;
    entityKey: string;
  }

export default function Link({ contentState, entityKey, children }: TLinkProps) {
    /* Получаем url с помощью уникального ключа Entity */
    const { setEntityData } = useEditorApi();
  const { url } = contentState.getEntity(entityKey).getData();
  const handlerClick = () => {
    const newUrl = prompt('URL:', url);
    if (newUrl) {
      setEntityData(entityKey, { url: newUrl });
    }
  }


  return (
     <a href={url} onClick={handlerClick}>
      {children}
    </a>
  )
}
