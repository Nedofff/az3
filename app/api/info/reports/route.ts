import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const resultBD = await prisma.reports.findMany({
    orderBy: {
      year: "desc",
    },
  });
  
  return NextResponse.json(resultBD);
}