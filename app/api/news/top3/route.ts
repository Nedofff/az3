


import { NextResponse } from "next/server"
import { news } from "../data"

export async function GET(req: Request, { params }: { params: { id: string } }) {

    
    return NextResponse.json(news.splice(0, 3))
}