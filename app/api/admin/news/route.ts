import { NextResponse } from "next/server"
import {news} from '@/app/api/news/data'

export async function POST(req:Request) {
    const data = await req.formData()
    data.get('file' )
    data.get('header' )
    data.get('html')

    return NextResponse.json({success:true})
}
export async function DELETE(req:Request) {
    const body = await req.json()
    console.log(body)

    return NextResponse.json({body})
}
export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const postId = searchParams.get('newsId')

    if (!postId) {
        const data = news.map((item) => ({
            id: item.id,
            title: item.title   
        }))

        return NextResponse.json(data)
    } else {
        const answer = {
            id: postId,
            body: '<h2>21321313</h2><p>12323</p><p>21321313</p><p>123133</p><p>2131313</p>'
        }

        return NextResponse.json(answer)
    }
}
