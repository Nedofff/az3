import { NextResponse } from "next/server"
import prisma from "@/lib/prisma";
import { join } from "path";
import { writeFile } from "fs/promises";
import sizeOf from 'image-size'

export async function DELETE(req:Request, { params }: { params: { id: string } }) {
    const resultBD = await prisma.news.delete({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(resultBD)
}
export async function PUT(req:Request, { params }: { params: { id: string } }) {

    const formData = await req.formData()
    const file: File | null = formData.get("file") as unknown as File;

    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const nameFileFromSrc = (formData.get('srcToImage')! as string).split('/')[2]
        const nameFile = nameFileFromSrc ? nameFileFromSrc : `${Date.now()}.${file.type.split("/")[1]}`
        const path = join(process.cwd(), "public/news", nameFile);
        await writeFile(path, buffer);

        const dimensions = sizeOf(path);

        const width = dimensions.width!
        const height = dimensions.height!

        const resultBD = await prisma.news.update({
            where: {
                id: params.id
            },
            data: {
                title: formData.get('header') as string,
                srcToImage: `/news/${nameFile}`,
                widthImg: width,
                heightImg: height,
                content: formData.get('html') as string,
            }
        })
    return NextResponse.json(resultBD)

    } else {
        const resultBD = await prisma.news.update({
            where: {
                id: params.id
            },
            data: {
                title: formData.get('header') as string,
                content: formData.get('html') as string,
            }
        })
    return NextResponse.json(resultBD)
    }
}

