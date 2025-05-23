import { asyncHandler } from "~/lib/async-handler";
import { Request,Response } from "express";
import {  type Catagory } from "~/types";
import CATAGORY_SERVICE from "~/service/catagory.service";
const CATAGORY_HANDLER={


    add:asyncHandler<Catagory> (async(req,res)=>{
        const result=await CATAGORY_SERVICE.add(req.body)
        res.status(201).json({message:"catagory added Successfully", data:result})
    }),



    delete:asyncHandler<{},{id:number}>(async(req,res)=>{
        const id=req.params.id
        const result=await CATAGORY_SERVICE.delete(Number(id))
        res.status(200).json({message:"catagory deleted",data:result})
    }),



    update:asyncHandler<Catagory,{id:number}>(async(req,res)=>{
        const id=Number(req.params.id)
        const result=await CATAGORY_SERVICE.updateCat(id,req.body)
        res.status(200).json({message:'update catagory using id',data:result})
    }),



    all:asyncHandler(async(req,res)=>{
        const catagoryAllData=await CATAGORY_SERVICE.all()
        res.status(200).json({messga:'got all catagory data',data:catagoryAllData})
    })



}
export default CATAGORY_HANDLER