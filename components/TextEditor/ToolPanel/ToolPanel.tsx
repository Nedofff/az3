"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "@/components/RenderLightzom/RenderLightzom";
import "yet-another-react-lightbox/styles.css";
import { BlockType, InlineStyle } from "../TextEditor/config";
import { useEditorApi } from "../TextEditorProvider";
import { useRouter } from "next/navigation";


const INLINE_STYLES_CODES = Object.values(InlineStyle);
const BLOCK_TYPES_CODES = Object.values(BlockType);
const dictToNormal: {
  [key: string]: string;
} = {
  "header-two": "Подзаголовок 1",
  "header-three": "Подзаголовок 2",
  /* Цитата */
  // blockquote = "blockquote",
  /* Блок с кодом */
  // code = "code-block",
  /* Список */
  "unordered-list-item": "Список",
  /* Нумерованный список */
  "ordered-list-item": "Нумерованный список",
  /* Сноска */
  cite: "",
  /* Простой текст */
  unstyled: "",
  BOLD: "Жирный",
  ITALIC: "Курсив",
  UNDERLINE: "Подчеркнутый",
};

export default function ToolPanel({
  newsId,
  title = "",
  srcToImage,
}: {
  newsId?: string;
  title?: string;
  srcToImage?: string | null;
}) {
  const {
    state,
    toggleInlineStyle,
    toggleBlockType,
    hasInlineStyle,
    addLink,
    toHtml,
    currentBlockType,
    clearState,
  } = useEditorApi();
  const [header, setHeader] = useState(title);
  const [file, setFile] = useState<File>();
  const [statusUpdate, setStatusUpdate] = useState<
    "success" | "error" | "idle"
  >("idle");
  const router = useRouter();

  const handlerAddLink = () => {
    const url = prompt("URL:");

    if (url) {
      addLink(url);
    }
  };

  const styleBtns =
    "bg-main-color w-full text-center px-5 py-2 whitespace-nowrap text-black hover:bg-opacity-50 duration-200 block";

  const backHandler = () => {
    router.back();
  };

  const saveHandler = async () => {
    setStatusUpdate("idle");

    if (!newsId) {
      if (header === "") {
        alert("Отсутствует заголовок");
        return;
      }
      const formData = new FormData();
      if (file) formData.set("file", file);
      formData.set("header", header);
      formData.set("html", toHtml());

      await fetch("/api/admin/news", {
        method: "POST",
        body: formData,
      });
      setHeader("");
      setFile(undefined);
      clearState();
      document.querySelector<HTMLFormElement>("#editorForm")?.reset();
    } else {
      const formData = new FormData();
      if (file) formData.set("file", file);

      formData.set("header", header);
      formData.set("html", toHtml());
      formData.set("srcToImage", srcToImage!);

      const res = await fetch(`/api/admin/news/${newsId}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setStatusUpdate("success");
        setTimeout(() => setStatusUpdate("idle"), 2000);
      } else {
        setStatusUpdate("error");
        setTimeout(() => setStatusUpdate("idle"), 2000);
      }
    }
  };
  
  return (
    <div className="bg-accent-color w-fit min-w-fit h-screen fixed right-0 text-white px-10 flex flex-col items-center pt-10">
      <div className="flex w-full">
        <button onClick={backHandler} className={styleBtns}>
          Назад
        </button>
        <button onClick={saveHandler} className={styleBtns}>
          Сохранить
        </button>
      </div>
      <div>
        {statusUpdate === "success" && (
          <div className="text-green-500">Успешно сохранено</div>
        )}
        {statusUpdate === "error" && (
          <div className="text-red-500">Произошла ошибка</div>
        )}
      </div>
      <form id="editorForm" className="my-5 flex flex-col">
        <input
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          className="w-full p-2 outline-none text-black"
          placeholder="Заголовок"
        />
        <label className="mt-2" htmlFor="file23gs">
          {!!srcToImage ? "Изменить" : "Установить"} картинку
        </label>
        <input
          id="file23gs"
          accept="image/*"
          type="file"
          onChange={(e) => setFile(e.target.files![0])}
        />
        {!!srcToImage && <ForViewImg styleBtns={styleBtns} src={srcToImage}/>
        }
      </form>
      <div className=" w-full overflow-hidden rounded-md">
        {BLOCK_TYPES_CODES.filter((type) => {
          return type !== "cite" && type !== "unstyled";
        }).map((type) => {
          const onMouseDown: React.MouseEventHandler<HTMLButtonElement> = (
            e
          ) => {
            e.preventDefault();
            toggleBlockType(type);
          };

          return (
            <button
              key={type}
              className={`${styleBtns} ${
                currentBlockType === type && "bg-sub-accent-color text-white"
              }`}
              onMouseDown={onMouseDown}
            >
              {dictToNormal[type]}
            </button>
          );
        })}
        {INLINE_STYLES_CODES.filter((code) => code !== "ACCENT").map((code) => {
          const onMouseDown: React.MouseEventHandler<HTMLButtonElement> = (
            e
          ) => {
            e.preventDefault();
            toggleInlineStyle(code);
          };
          return (
            <button
              key={code}
              className={`${styleBtns} ${
                hasInlineStyle(code) && "bg-sub-accent-color text-white"
              }`}
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
  );
}

function ForViewImg({styleBtns, src}:{styleBtns:string, src:string}) {
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setIsOpen(true)
    console.log(src)
  }

  return (
    <>
    <button
        className = {`${styleBtns} mt-3`}
          onClick={clickHandler}
        >
          Посмотреть предыдущую картинку
        </button>
        <Lightbox
    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
    controller={{closeOnBackdropClick: true}}
    carousel={{
        finite:true
    }}
    open={isOpen}
    plugins={[Zoom]}
    close={() => setIsOpen(false)}
    slides={[{ src }]}
    render={{ slide: NextJsImage,
        buttonPrev: () => null,
        buttonNext: () => null, }}
  />
    </>
  )
}
