import { Request,Response} from "express";
import { create, update } from "lodash";
import { date, number } from "zod";
import { asyncHandler } from "~/lib/async-handler";
import SUPPLIER_SERVICE from "~/service/supplier.service";
import { Supplier } from "~/types";

const SUPPLIER_HANDLER={



    create:asyncHandler<Supplier>(async(req,res)=>{
        const addSupplier=await SUPPLIER_SERVICE.addSupplier(req.body);
        res.status(201).json({message:"supplier added successfully",data:addSupplier})
        

    }),




    update:asyncHandler<Supplier,{id:number}>(async(req,res)=>{
        const id=req.params.id;
        const updateSupplier=await SUPPLIER_SERVICE.updateSupplier(req.body,Number(id));
        res.status(200).json({message:"value updated successfully",data:updateSupplier})
        
    }),



    all:asyncHandler(async(req,res)=>{
        const getAllSupplier=await SUPPLIER_SERVICE.getAllSupplier();
        res.status(200).json({message:"allSupplier data got",data:getAllSupplier})
        
    })
};

export default SUPPLIER_HANDLER;