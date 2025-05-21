import { asyncHandler } from "~/lib/async-handler";
import { Response,Request } from "express";
import UNPAIDTRANSACTION_SERVICE from "~/service/unpaidTransaction.service";
import type { unPaidTransaction } from "~/types";
import { update } from "lodash";



const UNPAIDTRANSACTION_HANDLER={
    add:asyncHandler<unPaidTransaction>(async(req,res)=>{
        const addData=await UNPAIDTRANSACTION_SERVICE.add(req.body);
        res.status(201).json({message:"unpaid data created",data:addData})

    }),

    update:asyncHandler<unPaidTransaction,{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const dataUpdate= await UNPAIDTRANSACTION_SERVICE.update(req.body,Number(id));
        res.status(200).json({message:"unpaidTrans data update successfully",data:dataUpdate});
    }),


    id:asyncHandler<{},{id:string}>(async(req,res)=>{
        const {id}=req.params;
        const dataByid=await UNPAIDTRANSACTION_SERVICE.getById(Number(id));
        res.status(200).json({message:"unpaid data got using id",data:dataByid});
    }),


    all:asyncHandler(async(req,res)=>{
        const alldata=await UNPAIDTRANSACTION_SERVICE.all();
        res.status(200).json({message:"alldata from unpaidTransaction got",data:alldata})
    }),


};
export default UNPAIDTRANSACTION_HANDLER;