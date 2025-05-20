import { update} from "lodash";
import { number } from "zod";
import prisma from "~/lib/prisma";

import { saleItem } from "src/types/index";



const SALEITEM_SERVICE={
    add:async(data:saleItem)=>{
        const addsaleItem=await prisma.saleItem.create({
            data:{
                saleId:data.saleId,
                productId:data.productId,
                quantity:data.quantity,
                unitPrice:data.unitPrice

            }
        });
        return addsaleItem
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
            where:{id}
        })
    return getDataById    
    }

};


export default SALEITEM_SERVICE