import exp from "constants";
import { Request,Response } from "express";
import { create, result, update } from "lodash";
import { date, number } from "zod";

import { asyncHandler } from "~/lib/async-handler";
import PRODUCT_SERVICE from "~/service/product.service";
import { Product } from "~/types";

const PRODUCT_HANDLER={
    create:asyncHandler<Product>(async(req,res)=>{
        const result=await PRODUCT_SERVICE.addProduct(req.body)
        res.status(201).json({message:'product added successfully', data:result})

    }),
    getById:asyncHandler<{id:number}>(async(req,res)=>{
        //If you don't need to extract multiple properties and you're only dealing with a single property 
        const id= Number(req.params)
        // const{id}=req.params Destructuring 
        const result=await PRODUCT_SERVICE.getProductById(id)
        res.status(200).json({message:'products get by id',data:result})

    }),
    all:asyncHandler(async(req,res)=>{
        const result=await PRODUCT_SERVICE.getAllProduct()
        res.status(200).json({message:"product all data fetch successfully", data:result})

    }),
    update:asyncHandler<Product,{id:number}>(async(req,res)=>{
        const id=req.params.id;
        const result=await PRODUCT_SERVICE.updateProduct(id,req.body)
        res.status(201).json({message:"value update successfully",data:result})

    })
}
export default PRODUCT_HANDLER;