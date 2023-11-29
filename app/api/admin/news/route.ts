import { NextResponse } from "next/server"
import {news} from '@/app/api/news/data'
import { join } from "path"
import { writeFile } from "fs/promises";
import prisma from "@/lib/prisma";
import sizeOf from 'image-size'
import { nanoid } from "@reduxjs/toolkit";

export async function POST(req:Request) {
    const formData = await req.formData()

    const file: File | null = formData.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const newNameFile = `${Date.now()}.${file.type.split('/')[1]}`
  const path = join(process.cwd(), "public/news", newNameFile);
  const srcToImage = `/news/${newNameFile}`;
  await writeFile(path, buffer);

  const dimensions = sizeOf(path);

  const width = dimensions.width!
  const height = dimensions.height!

  const createReport = await prisma.news.create({
    data: {
      title: formData.get('header') as string,
      srcToImage,
      widthImg: width,
      heightImg: height,
      content: formData.get('html') as string,
    },
  });

    return NextResponse.json(createReport)
}

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const newsId = searchParams.get('newsId')

    if (!newsId) {
        const result = await prisma.news.findMany({
            select: {
                id: true,
                title: true
            }
        })

        return NextResponse.json(result)
    } else {
      const result = await prisma.news.findUnique({
        where: {
            id: newsId
        }
    })

        return NextResponse.json(result)
    }
}
