import { update} from "lodash";
import { number } from "zod";
import prisma from "~/lib/prisma";
import { saleItem } from "~/types";


const SALEITEM_SERVICE={
    add:async(data:saleItem)=>{
        const add=await prisma.saleItem.create({
            data:{
                saleId:data.saleId,
                productId:data.productId,
                quantity:data.quantity,
                unitPrice:data.unitPrice
            },
        });
        return add;
    },
    update:async(data:saleItem,id:number)=>{
        const update=await prisma.saleItem.update({
            
            where:{id},
            data:{
                saleId:data.saleId,
                productId:data.productId,
                quantity:data.quantity,
                unitPrice:data.unitPrice
            }
            
        });
        return update;
    },
    allItem:async()=>{
        const allData=await prisma.saleItem.findMany({

        })
        return allData;
    },
    getById:async(id:number)=>{
        const getDataById=await prisma.saleItem.findFirst({
            where:{id:Number(id)}
        })
    return getDataById    
    }

};


export default SALEITEM_SERVICE