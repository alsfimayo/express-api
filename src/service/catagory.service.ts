import { all } from "axios";
import { add } from "lodash";
import type { catagory } from "src/types/index";
import { number, string } from "zod";
import { PrismaClient } from "~/generated/prisma";
const prisma=new PrismaClient();
const CATAGORY_SERVICE={
    add:async(data:catagory)=>{
        const addCatagory=await prisma.category.create({
            data:{
                name:data.name
            }
            
        })
        return addCatagory;
    },
    delete:async(id:number)=>{
        const delCatagory=await prisma.category.delete({
            where:{id}
            
        })
        return delCatagory
    },
    all:async()=>{
        const getAllCat=await prisma.category.findMany({
            
        })
        return getAllCat

    }
    
}