-- CreateTable
CREATE TABLE "Paid" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Paid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unPaidTransaction" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,

    CONSTRAINT "unPaidTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commitment" (
    "id" SERIAL NOT NULL,
    "unpaidId" INTEGER NOT NULL,
    "commitmentNote" TEXT,
    "commitmentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commitment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paid_transactionId_key" ON "Paid"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "unPaidTransaction_transactionId_key" ON "unPaidTransaction"("transactionId");

-- AddForeignKey
ALTER TABLE "Paid" ADD CONSTRAINT "Paid_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unPaidTransaction" ADD CONSTRAINT "unPaidTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commitment" ADD CONSTRAINT "Commitment_unpaidId_fkey" FOREIGN KEY ("unpaidId") REFERENCES "unPaidTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
