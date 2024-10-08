import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { HTMLParser } from "@/service/htmlConvertor";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const resultBD = await prisma.news.findUnique({
    where: {
      id: params.id,
    },
  });
  const wrappedHtml = `<div>${resultBD?.content}</div>`;
  const jsonHtml = await HTMLParser(wrappedHtml);

  const result = {
    id: resultBD?.id,
    title: resultBD?.title,
    src: resultBD?.srcToImage,
    width: resultBD?.widthImg,
    height: resultBD?.heightImg,
    text: jsonHtml,
  };

  return NextResponse.json(result);
}
