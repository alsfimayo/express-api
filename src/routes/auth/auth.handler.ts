 import {asyncHandler} from '~/lib/async-handler'
 import { Request,response,Response } from 'express'
 import type {Signup,Login} from 'src/types/index'
 import AUTH_SERVICE from '~/service/auth.service'

//  import AUTH_SERVICE from '~/service/auth.service'







 const AUTH_HANDLER={
    register:asyncHandler <Signup>(async(req,res)=>{
       const result= await AUTH_SERVICE.signup(req.body)
       res.status(201).json({message :' user SignUp Successfully',  data:result})
    }),
    login:asyncHandler<Login>(async(req,res)=>{
        const result=await AUTH_SERVICE.login(req.body);
        res.status(200).json({message:"lognin Successfully " , data:result})

    })

        
    
 }
 export  default AUTH_HANDLER 