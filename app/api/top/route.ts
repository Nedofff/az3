


import { NextResponse } from "next/server"
import { news } from "../news/data"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const newsTop3 = news.splice(0, 3)
    
    return NextResponse.json(newsTop3)
}