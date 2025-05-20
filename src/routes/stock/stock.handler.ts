import { Request,Response } from "express";
import { result, update } from "lodash";
import { date, number } from "zod";
import { asyncHandler } from "~/lib/async-handler";
import STOCK_SERVICE from "~/service/stock.service";
import { Stock } from "~/types";


const STOCK_HANDLER={
    add:asyncHandler<Stock>(async(req,res)=>{
        const creaedStock=await STOCK_SERVICE.create(req.body)
        res.status(201).json({message:"stock value added successfully", date:creaedStock});
    }),
    

    update:asyncHandler<Stock,{id:number}>(async(req,res)=>{
        const {id}=req.params
        const result=await STOCK_SERVICE.update(id,req.body)
        res.status(200).json({message:"value update using id",data:result})
    }),


    delete:asyncHandler<{},{id:string}>(async(req,res)=>{
        const {id}=req.params ;
        
        const data=await STOCK_SERVICE.delete(Number(id))
        res.status(200).json({message:"deleted desired value", data:data});
    }),
    id:asyncHandler<{id:number}>(async(req,res)=>{
        const id=Number(req.params)
        const result=await STOCK_SERVICE.getById(id)
    })

};
export  default STOCK_HANDLER;