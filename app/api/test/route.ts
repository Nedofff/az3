

import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    
    // TODO: отправка на почту

    return NextResponse.json(true)
}