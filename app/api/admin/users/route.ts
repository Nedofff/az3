import prisma from "@/lib/prisma"
import hashingFunc from "@/service/hashingFunc"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const body = await req.json()
    body.passwordValue = hashingFunc(body.passwordValue)

    const user = await prisma.user.create({
        data: {
            name: body.loginValue,
            password: body.passwordValue,
            role: 'moderator'
        }
    })
    
    return NextResponse.json({
        name: user.name,
        role: user.role
    })
}
export async function GET(req: Request) {
    const resultBD = await prisma.user.findMany({
        select: {
            id: true,
            name: true
        },
        where: {
            role: 'moderator'
        }
    })
    const users = resultBD.map((item) => ({
        id: item.id,
        login: item.name
    }))

    return NextResponse.json(users)
}