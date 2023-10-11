


import { NextResponse } from "next/server"
import { news } from "../data"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    console.log('params.id')

    const currentOneNews = news.find((oneNews) => (oneNews.id === params.id))
    return NextResponse.json(currentOneNews)
}