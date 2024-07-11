import prisma from "@/lib/prisma";

export const getTopNewsFromDB = async (): Promise<IOneNews[]> => {
  const resultBD = await prisma.news.findMany({
    take: 3,
    select: {
      id: true,
      title: true,
      srcToImage: true,
      widthImg: true,
      heightImg: true,
    },
    where: {
      srcToImage: { not: null },
    },
    orderBy: {
      date: "desc",
    },
  });

  return resultBD;
};
