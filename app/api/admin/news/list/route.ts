import { NextResponse } from "next/server";
import {news} from '@/app/api/news/data'



export async function GET(req:Request) {
    const data = news.map((item) => ({
        id: item.id,
        title: item.title   
    }))


    return NextResponse.json(data)
}