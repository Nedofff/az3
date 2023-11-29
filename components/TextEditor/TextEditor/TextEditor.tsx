'use client'
import React from "react";
import { Editor } from "draft-js";
import { useEditorApi } from "../TextEditorProvider";
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from "./config";

export type TextEditorProps = {
  className?: string;
};

export default function TextEditor({ className }: TextEditorProps) {
  const { state, onChange, handleKeyCommand } = useEditorApi();

  return (
    <div className="w-4/5 mx-10 my-10 shadow-2xl bg-white py-5 px-10 newsBlock placeholder:text-red-500">
      <Editor
        placeholder="Введите ваш текст ниже:"
        editorState={state}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        customStyleMap={CUSTOM_STYLE_MAP}
        blockRenderMap={BLOCK_RENDER_MAP}
      />
    </div>
  );
}
