import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";
import prisma from "@/lib/prisma";
import sizeOf from "image-size";
import { exec } from "node:child_process";

export async function POST(req: Request) {
  const formData = await req.formData();

  const file: File | null = formData.get("file") as unknown as File;
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const typeFile = file.name.split(".").splice(-1)[0];
    const newNameFile = `${Date.now()}${typeFile}`;
    const path = join(process.cwd(), "public/news", newNameFile);
    const srcToImage = `/news/${newNameFile}`;
    await writeFile(path, buffer);

    const dimensions = sizeOf(path);

    const width = dimensions.width!;
    const height = dimensions.height!;

    const resultDB = await prisma.news.create({
      data: {
        title: formData.get("header") as string,
        srcToImage,
        widthImg: width,
        heightImg: height,
        content: formData.get("html") as string,
      },
    });
    const restart = () => {
      exec("pm2 restart next");
    };
    exec("cd /root/azmesha-and-partners-v2/ && npm run build", restart);
    return NextResponse.json(resultDB);
  } else {
    const resultDB = await prisma.news.create({
      data: {
        title: formData.get("header") as string,
        content: formData.get("html") as string,
      },
    });
    return NextResponse.json(resultDB);
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const newsId = searchParams.get("newsId");

  if (!newsId) {
    const result = await prisma.news.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    return NextResponse.json(result);
  } else {
    const result = await prisma.news.findUnique({
      where: {
        id: newsId,
      },
    });

    return NextResponse.json(result);
  }
}
