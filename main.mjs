import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getTopNewsFromDB = async () => {
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
getTopNewsFromDB().then(console.log);
