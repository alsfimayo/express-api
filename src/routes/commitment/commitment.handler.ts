import { Request,Response } from "express";
import { asyncHandler } from "~/lib/async-handler";
import COMMITMENT_SERVICE from "~/service/commitment.service";
import { Commitment } from "~/types";


const COMMITMENT_HANDLER={
    add:asyncHandler<Commitment>(async(req,res)=>{
        const addCommitment=await COMMITMENT_SERVICE.add(req.body);
        res.status(201).json({message:"customer commitment created",data:addCommitment})
    })
}