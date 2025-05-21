/*
  Warnings:

  - You are about to drop the column `name` on the `Paid` table. All the data in the column will be lost.
  - Added the required column `recipientName` to the `Paid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paid" DROP COLUMN "name",
ADD COLUMN     "recipientName" TEXT NOT NULL;
