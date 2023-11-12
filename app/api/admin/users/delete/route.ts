import {  NextResponse } from "next/server"


export async function DELETE(req:Request) {
    const id = await req.json()
    console.log(id)

    return NextResponse.json({body: id})
}