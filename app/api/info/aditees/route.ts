
const mockData: IAuditeesAndRevenue[] = [
    {
        year: '2022',
  moneyOZO: '0',
  moneyAll: '2992,8',
  moneyAudit: '1972,80',
  moneyOther: '1020,00',
    },
    {
        year: '2021',
  moneyOZO: '0',
  moneyAll: '602',
  moneyAudit: '602 ',
  moneyOther: '0',
    },
    {
        year: '2042',
  listOrganization: [{
    id: '1',
    name: '000000'
  }, {
    id: '2',
    name: '000000'
  }, {
    id: '3',
    name: '000000'
  }],
  moneyOZO: '000000',
  moneyAll: '000000',
  moneyAudit: '000000',
  moneyOther: '000000',
    },
]


import { NextResponse } from "next/server"

export async function GET(req: Request) {

    return NextResponse.json(mockData)
}