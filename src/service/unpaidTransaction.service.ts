import { update } from "lodash";
import prisma from "~/lib/prisma";
import type { unPaidTransaction } from "~/types";

const UNPAIDTRANSACTION_SERVICE={
    add:async(data:unPaidTransaction)=>{
        const addData=await prisma.unPaidTransaction.create({
            data:{
                transactionId:data.transactionId
            },
        });
        return addData
    },


    update:async(data:unPaidTransaction,id:number)=>{
        const updateData=await prisma.unPaidTransaction.update({
            where:{id},
            data:{transactionId:data.transactionId}
        });
        return updateData;
    },
    


    all:async()=>{
        const allData=await prisma.unPaidTransaction.findMany({
            
        })
        return allData
    },

    getById:async(id:number)=>{
        const dataById=await prisma.unPaidTransaction.findUnique({
            where:{id}
        });
        return dataById
    }
};


export default UNPAIDTRANSACTION_SERVICE;