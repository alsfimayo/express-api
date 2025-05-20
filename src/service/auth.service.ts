import bcrypt from 'bcrypt'
import { date, string } from 'zod'
import { PrismaClient } from '~/generated/prisma'
import type {Signup,Login,TokenPayload} from 'src/types/index'
 import {UserPrisma} from 'src/lib/prisma'

import { HttpError } from '~/middleware/error-handler'
import { createToken } from '~/utils/jwt'

 const prisma=new PrismaClient();
const AUTH_SERVICE={
    register:async(data:Signup)=>{
        const isUserExist=await UserPrisma.findByEmail(data.email);
        if(isUserExist){
            throw new HttpError('user already exist',409);
        }
        const hashedPassword=await bcrypt.hash(data.password,10)
        const newUser= await UserPrisma.createUser({
            email:data.email,
            password:hashedPassword,
            fname:data.fname,
            lname:data.lname,
        });
      return newUser;
      //{
    //      message:'signup successful',
    //      data:{
    //          id:newUser.id,
    //          email:newUser.email,
    //         fname:newUser.fname,
    //          lname:newUser.lname
    // }
    //    }
        
    },
    login:async(user:Login)=>{
        const existingUser=await UserPrisma.findByEmail(user.email);
        if(!existingUser){
            throw new HttpError('email mismatch', 401);
        }
        const isMatch=await bcrypt.compare(user.password,existingUser.password);
        if(!isMatch){
            throw new HttpError("password mismatch",401);
        }
        const token=createToken({
            id:existingUser.id,
            email:existingUser.email

        })
        return token;
    },
        //  {
        //      message:'login succeful',
        //      user:{
        //          id: existingUser.id,
        //          email:existingUser.email,
        //          fname:existingUser.fname,
        //         lname:existingUser.lname

        //     },
         
    

}
export default AUTH_SERVICE;