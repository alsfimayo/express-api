/*
  Warnings:

  - You are about to drop the column `first` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "first",
DROP COLUMN "lname";
