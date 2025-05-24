
import { date } from "zod";
import prisma from "~/lib/prisma";
import { HttpError } from "~/middleware/error-handler";
import type { Signup,Login } from "~/types";
import bcrypt from "bcrypt"
import { createToken } from "~/utils/jwt";

const AUTH_SERVICE={
    signup:async(data:Signup)=>{
        const isUserExist=await prisma.user.findUnique({
            where:{email:data.email}
        });
        if(isUserExist){
            throw new HttpError ("user already Exist",409);
        }
        const hashedPassword=await bcrypt.hash(data.password,10);
        const createNewUser=await prisma.user.create({
            data:{
                email:data.email,
                password:hashedPassword,
                fname:data.fname,
                lname:data.lname
            }
        })
        return createNewUser;
    },
    login:async(data:Login)=>{
        const existingUser=await prisma.user.findUnique({
            where:{email:data.email},
        });
        if(!existingUser){
            throw new HttpError("user email does not match",401)
        }
        const isMatch=await bcrypt.compare(data.password,existingUser.password);
        if(!isMatch){
            throw new HttpError("password mismatch",401)
        };
        const token=createToken({
            id:existingUser.id,
            email:existingUser.email
        });
        return token;
    }
    
}
export default AUTH_SERVICE;