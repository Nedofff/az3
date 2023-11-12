import { NextResponse } from "next/server";

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