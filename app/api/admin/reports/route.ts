import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import prisma from "@/lib/prisma";


export async function GET(req: Request) {

  const resultBD = await prisma.reports.findMany({
    orderBy: {
      year: "desc",
    },
  });

  return NextResponse.json(resultBD);
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const other = JSON.parse(
    formData.get("other") as unknown as string
  ) as IFormInputAddReport;
  const { year, listOrganization, moneySSO, moneyAll, moneyAudit, moneyOther } =
    other;

  const file: File | null = formData.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join(process.cwd(), "public/reports", `report${year}.pdf`);
  const srcToReport = `/reports/report${year}.pdf`;
  await writeFile(path, buffer);

  const createReport = await prisma.reports.create({
    data: {
      year: +year,
      srcToReport,
      listOrganization: listOrganization.split('\n').filter((x) => x !== '').map((x) => x.trim()),
      moneySSO: Number(moneySSO.replace(',', '.')),
      moneyAll: Number(moneyAll.replace(',', '.')),
      moneyAudit: Number(moneyAudit.replace(',', '.')),
      moneyOther: Number(moneyOther.replace(',', '.')),
    },
  });

  return NextResponse.json(createReport);
}
