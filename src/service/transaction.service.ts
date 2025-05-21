import type { Transaction } from "~/types";
import prisma from "~/lib/prisma";

const TRANSACTION_SERVICE={
    create:async(data:Transaction)=>{
        const createTransaction=await prisma.transaction.create({
            data:{
                totalAmount:data.totalAmount,
                discountAmount:data.discountAmount,
                type:data.type,
                paymentmethod:data.paymentmethod,
                customerId:data.customerId,
                saleId:data.saleId,
                date:data.date

            }
        });
        return createTransaction;
    },
    update:async(data:Transaction,id:number)=>{
        const updateTransactionHistory=await prisma.transaction.update({
            where:{id},
            data:{
                 totalAmount:data.totalAmount,
                discountAmount:data.discountAmount,
                type:data.type,
                paymentmethod:data.paymentmethod,
                customerId:data.customerId,
                saleId:data.saleId,
                date:data.date

            }
        });
        return updateTransactionHistory
    },
    getById:async(id:number)=>{
        const getTransactionById=await prisma.transaction.findUnique({
            where:{id}
        })
        return getTransactionById
    },
    getAll:async()=>{
        const getAllTransactionHistory=await prisma.transaction.findMany({

        });
        return getAllTransactionHistory
    },
    delete:async(id:number)=>{
        const allTransactionDeleted=await prisma .transaction.delete({
            where:{id}
        })
        return allTransactionDeleted
    }
};
export default TRANSACTION_SERVICE;