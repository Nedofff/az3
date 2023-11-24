import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const body = await req.json()
    console.log(body)
    return NextResponse.json({body})
}

const mokUsers = [
    {
        id: '12323231312312312',
        login: 'kek1'
    },
    {
        id: '2',
        login: 'kek2'
    },
]

export async function GET(req: Request) {

    return NextResponse.json(mokUsers)
}

export async function DELETE(req:Request) {
    const id = await req.json()
    console.log(id)

    return NextResponse.json({body: id})
}