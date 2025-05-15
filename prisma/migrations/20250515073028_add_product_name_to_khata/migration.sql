/*
  Warnings:

  - Added the required column `productName` to the `Khata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Khata" ADD COLUMN     "productName" TEXT NOT NULL;
