'use client'

import React from 'react'
import { EditorApi, useEditor } from './useEditor';
import { useTextEditor } from '@/hooks/textEditorSlice/useTextEditor';

const TextEditorContext = React.createContext<EditorApi | undefined>(undefined);

export const useEditorApi = () => {
  const context = React.useContext(TextEditorContext);
  if (context === undefined) {
    throw new Error('useEditorApi must be used within TextEditorProvider');
  }
  
  return context;
}


export default function TextEditorProvider({children, preinstalledContent=''}: {children: React.ReactNode, preinstalledContent?: string}) {
    const editorApi = useEditor(preinstalledContent);
  
    return (
      <TextEditorContext.Provider value={editorApi}>
        {children}
      </TextEditorContext.Provider>
    )
  
}
