import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(deleteUser);
}
