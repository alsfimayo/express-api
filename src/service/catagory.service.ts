import { all } from "axios";
import { add } from "lodash";
import type { Catagory } from "src/types/index";
import { number, string } from "zod";
import { PrismaClient } from "~/generated/prisma";
const prisma=new PrismaClient();
const CATAGORY_SERVICE={
    add:async(data:Catagory)=>{
        const addCatagory=await prisma.category.create({
            data:{
                name:data.name
            }
            
        })
        return addCatagory;
    },
    delete:async(id:number)=>{
        const delCatagory=await prisma.category.delete({
            where:{id:Number(id)}
            
        })
        return delCatagory
    },
    updateCat:async(id:number,data:Catagory)=>{
        const updatedCatagory=await prisma.category.update({
            where:{id:Number(id)},
            data:{name:data.name,
                
            }
        })
        return updatedCatagory
         
    },
    all:async()=>{
        const getAllCat=await prisma.category.findMany({
            
        })
        return getAllCat

    }
    
}
export default CATAGORY_SERVICE