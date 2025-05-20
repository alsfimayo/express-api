import { Request,Response } from "express";
import { update } from "lodash";
import { date } from "zod";
import { asyncHandler } from "~/lib/async-handler";
import SALE_SERVICE from "~/service/sale.service";
import { Sale } from "~/types";


const SALE_HANDLER={
    add:asyncHandler<Sale>(async(req,res)=>{
        const result=await SALE_SERVICE.create(req.body)
        res.status(201).json({message:"sale data added successfully",data:result})
    }),

    getById:asyncHandler<{},{id:string}>(async(req,res)=>{
        // const id=req.params.id,
        const {id}=req.params;
        const result=await SALE_SERVICE.getById(Number(id))
        res.status(200).json({message:"all data get byId",data:result});
    }),

    update:asyncHandler<Sale,{id:string}>(async(req,res)=>{
        const {id}=req.params;
        const result=await SALE_SERVICE.update(req.body,Number(id))
        res.status(200).json({message:"sale value updated",data:result})
    }),
    delete:asyncHandler<{},{id:string}>(async(req,res)=>{
        const {id}=req.params;
        const result=await SALE_SERVICE.delete(Number(id))
        res.status(200).json({message:"all value deleted successfully"})
    })
}
export default SALE_HANDLER;