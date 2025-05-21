import { asyncHandler } from "~/lib/async-handler";
import { Request,Response } from "express";
import PAID_SERVICE from "~/service/paid.service";
import { Paid } from "~/types";
import { update } from "lodash";


const PAID_HANDLER={
    add:asyncHandler<Paid>(async(req,res)=>{
        const addData=await PAID_SERVICE.create(req.body)
        res.status(201).json({message:"paid customer data created",data:addData})
    }),


    update:asyncHandler<Paid,{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const updateData=await PAID_SERVICE.update(req.body,Number(id))
        res.status(200).json({message:"paid customer data update" ,data:updateData})
    }),

    id:asyncHandler<{},{id:string}>(async(req,res)=>{
        const {id}=req.params;
        const getDataById=await PAID_SERVICE.getById(Number(id));
        res.status(200).json({message:"data get using id",data:getDataById})
    })
};


export default PAID_HANDLER;