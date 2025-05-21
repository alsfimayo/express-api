/*
  Warnings:

  - You are about to drop the column `unpaidId` on the `Commitment` table. All the data in the column will be lost.
  - Added the required column `unpaidTransactionId` to the `Commitment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commitment" DROP CONSTRAINT "Commitment_unpaidId_fkey";

-- AlterTable
ALTER TABLE "Commitment" DROP COLUMN "unpaidId",
ADD COLUMN     "unpaidTransactionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Commitment" ADD CONSTRAINT "Commitment_unpaidTransactionId_fkey" FOREIGN KEY ("unpaidTransactionId") REFERENCES "unPaidTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
