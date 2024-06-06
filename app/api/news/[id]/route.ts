import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const resultBD = await prisma.news.findUnique({
    where: {
      id: params.id,
    },
  });
  const result = {
    id: resultBD?.id,
    title: resultBD?.title,
    src: resultBD?.srcToImage,
    width: resultBD?.widthImg,
    height: resultBD?.heightImg,
    text: resultBD?.content,
  };

  return NextResponse.json(JSON.stringify(result));
}
