import { nanoid } from 'nanoid'
import { NextResponse } from 'next/server'
import {rename, writeFile} from "fs/promises";
import { join } from "path";

const mokReports = [
    {
        id: nanoid(),
        year: '2022',
    },
    {
        id: nanoid(),
        year: '2021',
    },
    {
        id: nanoid(),
        year: '2042',
    },
    
]

export async function GET(req:Request) {
    
    
    return NextResponse.json(mokReports)
}


export async function POST(req:Request) {
    const data = await req.formData()
    const other = JSON.parse(data.get('other') as unknown as string) as IFormInputAddReport
    console.log(other['year'])
    console.log(other)
    return NextResponse.json({kek:'kek'})

    // TODO: сделать соединение с БД и занос туда всего
    // TODO: расскоментировать следующие строки

    // const file: File | null = data.get('file') as unknown as File
    // const year = '2042'
    // if (!file) {
    //     return NextResponse.json({ success: false })
    // }
    // const bytes = await file.arrayBuffer()
    // const buffer = Buffer.from(bytes)
    
    // const path = join(process.cwd(), 'public/reports', `report${year}.pdf`)
    // await writeFile(path, buffer)
    // console.log(`open ${path}`)
    // return NextResponse.json({})
}


export async function DELETE(req:Request) {
    const id = await req.json()
    console.log(id)

    return NextResponse.json({id})
}