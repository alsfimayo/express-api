import { asyncHandler } from "~/lib/async-handler";
import { Request,Response } from "express";
import TRANSACTION_SERVICE from "~/service/transaction.service";
import { Transaction } from "~/types";
import { string } from "zod";



const TRANSACTION_HANDLER={
    create:asyncHandler<Transaction>(async(req,res)=>{
        const add=await TRANSACTION_SERVICE.create(req.body)
        res.status(201).json({message:"Transaction created",data:add})
    }),

    update:asyncHandler<Transaction,{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const updateVal=await TRANSACTION_SERVICE.update(req.body,Number(id))
        res.status(200).json({message:"Transaction Update",data:updateVal})
    }),

    id:asyncHandler<{},{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const transactionById=await TRANSACTION_SERVICE.getById(Number(id))
        res.status(200).json({message:" transaction data getById",data:transactionById})
    }),


    all:asyncHandler(async(req,res)=>{
      const allTransaction=await TRANSACTION_SERVICE.getAll();
      res.status(200).json({message:"all transaction data get",data:allTransaction})
    }),

    delete:asyncHandler<{},{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const deletedData=await TRANSACTION_SERVICE.delete(Number(id));
        res.status(200).json({mesage:"transtion delete using id",data:deletedData})
    })
    
};


export default TRANSACTION_HANDLER;