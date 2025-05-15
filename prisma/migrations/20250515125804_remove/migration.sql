/*
  Warnings:

  - You are about to drop the column `amount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `khataId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Khata` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discountAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentmethod` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "paymentMethod" AS ENUM ('CASH', 'CARD', 'BANK_TRANSFER', 'OTHER');

-- DropForeignKey
ALTER TABLE "Khata" DROP CONSTRAINT "Khata_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_khataId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "amount",
DROP COLUMN "khataId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "discountAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "paymentmethod" "paymentMethod" NOT NULL,
ADD COLUMN     "saleId" INTEGER,
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Khata";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
