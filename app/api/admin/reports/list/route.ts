import { nanoid } from 'nanoid'
import { NextResponse } from 'next/server'


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