import { create, get, update } from "lodash";
import { number } from "zod";
import { PrismaClient } from "~/generated/prisma";
import type { Stock } from "~/types";

const prisma=new PrismaClient();

const STOCK_SERVICE={
    create:async(data:Stock)=>{
        const createStock=await prisma.stock.create({
            data:{
                quantity :data.quantity,
                manufacturingDate:data.manufacturingDate,
                expiryDate :data.expiryDate,
                productId :data.productId,
            }
        });
        return createStock
    },
    update:async(data:Stock,id:number)=>{
        const updateStock=await prisma.stock.update({

            where:{id},
            data:{quantity:data.quantity,
                  manufacturingDate:data.manufacturingDate,
                  expiryDate:data.expiryDate,
                  productId:data.productId
            }
        })
        return updateStock
    },
    delete:async(id:number)=>{
        
        const deleteStock=await prisma.stock.delete({
            where:{id}
        })
        return deleteStock;
    },
    getById:async(id:number)=>{
        const getStockById=await prisma.stock.findUnique({
            where:{id}
        });
        return getStockById;
    }
};
export default STOCK_SERVICE;