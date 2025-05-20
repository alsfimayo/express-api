/*
  Warnings:

  - You are about to drop the column `purchaseDate` on the `Stock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "purchaseDate",
ADD COLUMN     "manufacturingDate" TIMESTAMP(3);
