import { update } from "lodash";
import prisma from "~/lib/prisma";
import type { Paid } from "~/types";


const PAID_SERVICE={
    create:async(data:Paid)=>{
        const createData=await prisma.paid.create({
            data:{
                transactionId:data.transactionId,
                recipientName:data.recipientName
            }
        });
        return createData
    },
    update:async(data:Paid,id:number)=>{
        const updateData=await prisma.paid.update({
            where:{id},
            data:{
                  transactionId:data.transactionId,
                recipientName:data.recipientName
            },
        });
        return updateData;
    },
    getById:async(id:number)=>{
        const dataGetById=await prisma.paid.findUnique({
            where:{id}
        });
        return dataGetById
    }
}
export default PAID_SERVICE