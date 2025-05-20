
import { create, update } from "lodash";
import { number } from "zod";
import { PrismaClient } from "~/generated/prisma";
import { Sale } from "src/types/index";
const prisma=new PrismaClient();

const SALE_SERVICE={
    create:async(data:Sale)=>{
        const add=await prisma.sale.create({
            data:{
            customerId:data.customerId,
            total:data.total
            }
            
        })
        return add;
    },
      getById:async(id:number)=>{
        const data=await prisma.sale.findFirst({
             where:{id}
         })
         return data
     },
      update:async(data:Sale,id:number)=>{
         const updateData=await prisma.sale.update({
             where:{id},
             data:{
                 customerId:data.customerId,
                 total:data.total
             }
         });
         return updateData;
     },
     delete:async(id:number)=>{
            const deletaData=await prisma.sale.delete({
             where:{id}
            })
            return deletaData;
    }


        
        
    
};
export default SALE_SERVICE;



