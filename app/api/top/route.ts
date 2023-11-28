import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {

  const resultBD = await prisma.news.findMany({
    take: 3,
    select: {
      id: true,
      title: true,
      srcToImage: true,
      widthImg: true,
      heightImg: true,
    },
    orderBy: {
      date: "desc",
    },
  });
  return NextResponse.json(resultBD);
}
