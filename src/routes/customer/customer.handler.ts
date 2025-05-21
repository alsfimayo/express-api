import { asyncHandler } from "~/lib/async-handler";
import type {Customer} from "src/types/index"
import { Request,Response } from "express";

 import CUSTOMER_SERVICE from  "src/service/customer.service"
import { number, string } from "zod";


 const CUSTOMER_HANDLER={
    add:asyncHandler<Customer>(async (req,res)=>{
        const result=await CUSTOMER_SERVICE.add(req.body)
        res.status(201).json({Message:"customer added successfully", date:result})

    }),

    getCustomerById:asyncHandler<{},{id:string}>(async(req,res)=>{
         const id=req.params.id;
        
        const result=await CUSTOMER_SERVICE.getCustomerById(Number(id))
         res.status(200).json({message:'cutomer get by id', data:result})
    }),
    
    all:asyncHandler (async (req,res)=>{
        const result=await CUSTOMER_SERVICE.all()
        return res.status(200).json({
            success: true,
            message: "All Customers Fetch Successfully",
            date: result
        })
    })

 }
 export default CUSTOMER_HANDLER