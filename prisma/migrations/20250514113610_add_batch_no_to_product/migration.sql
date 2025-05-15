/*
  Warnings:

  - Added the required column `batch_no` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "batch_no" TEXT NOT NULL;
