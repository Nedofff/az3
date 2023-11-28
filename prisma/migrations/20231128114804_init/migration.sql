/*
  Warnings:

  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `newsId` on the `news` table. All the data in the column will be lost.
  - The primary key for the `reports` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `organizations_sso` on the `reports` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `news` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `reports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "news_newsId_key";

-- AlterTable
ALTER TABLE "news" DROP CONSTRAINT "news_pkey",
DROP COLUMN "newsId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "news_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "news_id_seq";

-- AlterTable
ALTER TABLE "reports" DROP CONSTRAINT "reports_pkey",
DROP COLUMN "organizations_sso",
ADD COLUMN     "list_organization" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "reports_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "reports_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "news_id_key" ON "news"("id");

-- CreateIndex
CREATE UNIQUE INDEX "reports_id_key" ON "reports"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
