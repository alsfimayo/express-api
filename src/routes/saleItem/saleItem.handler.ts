import { Request,Response } from "express";
import { update } from "lodash";
import { asyncHandler } from "~/lib/async-handler";
import SALEITEM_SERVICE from "~/service/saleItem.service";
import { saleItem } from "~/types";

const SALEITEM_HANDLER={
    add:asyncHandler<saleItem>(async(req,res)=>{
        const addsaleItem=await SALEITEM_SERVICE.add(req.body)
        res.status(201).json({message:"saleItems created successfully",data:addsaleItem})
    }),
       
  

        
        
    
    update:asyncHandler<saleItem,{id:string}>(async(req,res)=>{
        const {id}=req.params;
        const updateItem=await SALEITEM_SERVICE.update(req.body,Number(id));
        res.status(200).json({message:"saleItem updated successfully",data:updateItem})
    }),
    all:asyncHandler(async(req,res)=>{
        const allItem=await SALEITEM_SERVICE.allItem();
        res.status(200).json({message:"all data of saleItems got successfully", data:allItem})
    }),
    id:asyncHandler<{},{id:string}>(async(req,res)=>{
        const {id}=req.params
        const saleItemById=await SALEITEM_SERVICE.getById(Number(id))
        res.status(200).json({message:"saleItem get by id",data:saleItemById})
    })
}
export default SALEITEM_HANDLER