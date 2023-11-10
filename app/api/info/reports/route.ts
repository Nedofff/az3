


const mockData: IReport[] = [
    {
        year: '2022',
        link: '/reports/report2022.pdf'
    },
    {
        year: '2021',
        link: '/reports/report2021.pdf'
    },
]


import { NextResponse } from "next/server"

export async function GET(req: Request) {

    return NextResponse.json(mockData)
}