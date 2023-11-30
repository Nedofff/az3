



import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: Request) {

  const {searchParams} = new URL(req.url)
    const q = searchParams.get('q')

    if (!!q) {
      
    const containsParam = String(q).split(' ').join(' & ')

      const resultBD = await prisma.news.aggregate({
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
        _count: {
          _all: true
        }
      })
      return NextResponse.json(resultBD._count._all)
    } else {
      const resultBD = await prisma.news.aggregate({
        _count: {
          _all: true
        }
      })
      return NextResponse.json(resultBD._count._all)

    }

    
}