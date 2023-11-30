

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: Request) {

    const {searchParams} = new URL(req.url)
    const q = searchParams.get('q')
    const page = searchParams.get('page')
    
    if (!!q) {
      const containsParam = String(q).split(' ').join(' & ')
      const resultBD = await prisma.news.findMany({
        select:{
          id: true,
          title: true,
          srcToImage: true,
          widthImg: true,
          heightImg: true,
        },
          where: {
              OR: [
                {
                  title: {
                    search: containsParam,
                  },
                },
                {
                  content: {
                    search: containsParam,
                  },
                },
                {
                tags: {
                  hasSome: containsParam.split(' & '),
              },}
              ],
          },
          orderBy: {
            date: "desc",
          },
        });
        const result = resultBD.map(item => ({
          id: item.id,
          title: item.title,
          src: item.srcToImage,
          width: item.widthImg,
          height: item.heightImg,
        }))
  
      return NextResponse.json(result)
    } else {
      const resultBD = await prisma.news.findMany({
        skip: Number(page) === 1 ? 0 : (Number(page) - 1) * 24,
        take: 24
      })
      const result = resultBD.map(item => ({
        id: item.id,
        title: item.title,
        src: item.srcToImage,
        width: item.widthImg,
        height: item.heightImg,
      }))
      return NextResponse.json(result)
    }
    
}