import { NextResponse } from "next/server"



export async function POST(req:Request) {
    const data = await req.formData()
    data.get('file' )
    data.get('header' )
    data.get('html')

    return NextResponse.json({success:true})
}
