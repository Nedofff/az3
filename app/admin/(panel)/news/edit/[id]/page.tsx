import TextEditorBox from "@/components/TextEditor/TextEditorBox/TextEditorBox";
import TextEditorProvider from "@/components/TextEditor/TextEditorProvider";
import React from "react";

interface IParams {
  params: {
    id: string;
  };
}

type News = {
  id: string;
  title: string;
  srcToImage: string | null;
  date: Date;
  widthImg: number | null;
  heightImg: number | null;
  content: string;
  tags: string[];
};

export default async function Page({ params }: IParams) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/news?newsId=${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data = (await response.json()) as News;
  const preinstalledContent = data.content;
  return (
    <>
      <TextEditorProvider preinstalledContent={preinstalledContent}>
        {!!preinstalledContent ? (
          <TextEditorBox
            newsId={params.id}
            title={data.title}
            srcToImage={data.srcToImage}
          />
        ) : (
          <div>Такого элемента не существует</div>
        )}
      </TextEditorProvider>
    </>
  );
}
