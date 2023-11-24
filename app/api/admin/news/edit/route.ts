import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const postId = searchParams.get('postId')
    const answer = {
        id: postId,
        body: '<h2>21321313</h2><p>12323</p><p>21321313</p><p>123133</p><p>2131313</p>'
    }

    return NextResponse.json(answer)
}