

import { NextResponse } from "next/server"
import { news } from "./data"

export async function GET(req: Request) {

    const {searchParams} = new URL(req.url)
    const q = searchParams.get('q')
    console.log(q)

    const curretnNews = news

    return NextResponse.json(curretnNews)
}