/*
  Warnings:

  - Changed the type of `token` on the `OnRampTrasactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "OnRampTrasactions" DROP COLUMN "token",
ADD COLUMN     "token" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTrasactions_token_key" ON "OnRampTrasactions"("token");
