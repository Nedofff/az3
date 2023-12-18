-- CreateTable
CREATE TABLE "news" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "src_to_image" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "width_img" INTEGER,
    "height_img" INTEGER,
    "content" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "src_to_report" TEXT NOT NULL,
    "list_organization" TEXT[],
    "money_sso" INTEGER NOT NULL,
    "money_audit" INTEGER NOT NULL,
    "money_all" INTEGER NOT NULL,
    "money_other" INTEGER NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "news_id_key" ON "news"("id");

-- CreateIndex
CREATE UNIQUE INDEX "reports_id_key" ON "reports"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
