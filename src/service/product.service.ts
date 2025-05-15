import { Prisma, PrismaClient } from "~/generated/prisma";
import type { Product } from "src/types/index";
import { number, string } from "zod";
import { update } from "lodash";
const prisma=new PrismaClient();



const PRODUCT_SERVICE={
    addProduct:async(data:Product)=>{
        const addProduct=await prisma.product.create({
            data:{
                name:data.name,
                price:data.price,
                batch_no:data.batch_no,
                catagoryId:data.catagoryId,
                supplierId:data.supplierId

            }
        });
        return addProduct;
    },


    getProductById:async(id:number)=>{
        const getProductById=await prisma.product.findFirst({
            where:{id:Number(id)}
        })
        return getProductById;

    },



    getAllProduct:async()=>{
        const allProducts=await prisma .product.findMany({})
        return allProducts;
    },

    updateProduct:async(id:number,data:Product)=>{
        const updateProductName= await prisma.product.update({
            where:{id:Number(id)},
            data:{name:data.name,
                price:data.price,
                batch_no:data.batch_no,
                catagoryId:data.catagoryId,
                supplierId:data.supplierId
            }
            
        })
        return updateProductName;
    }

};
export default PRODUCT_SERVICE