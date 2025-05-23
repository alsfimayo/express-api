import { Request,Response } from "express";
// import { update } from "lodash";
import { asyncHandler } from "~/lib/async-handler";
import COMMITMENT_SERVICE from "~/service/commitment.service";
import { Commitment } from "~/types";


const COMMITMENT_HANDLER={
    add:asyncHandler<Commitment>(async(req,res)=>{
        const addCommitment=await COMMITMENT_SERVICE.add(req.body);
        res.status(201).json({message:"customer commitment created",data:addCommitment})
    }),
    

    update:asyncHandler<Commitment,{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const updateCommitment=await COMMITMENT_SERVICE.update(req.body,Number(id));
        res.status(200).json({message:"custmor commitment updated succefully",data:updateCommitment})
    }),


    all:asyncHandler(async(req,res)=>{
        const allCommitmentData=await COMMITMENT_SERVICE.all();
        res.status(200).json({message:"Customer commitment all data fetch successfully",data:allCommitmentData})
    }),

    id:asyncHandler<{},{id:string}>(async(req,res)=>{
        const id=req.params.id;
        const commitmentDataById=await COMMITMENT_SERVICE.id(Number(id));
        res.status(200).json({message:"customer commitment data fetch using id" ,data:commitmentDataById})
    }),
};


export default COMMITMENT_HANDLER;