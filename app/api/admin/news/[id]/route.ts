import { NextResponse } from "next/server"
import prisma from "@/lib/prisma";

export async function DELETE(req:Request, { params }: { params: { id: string } }) {
    const resultBD = await prisma.news.delete({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(resultBD)
}