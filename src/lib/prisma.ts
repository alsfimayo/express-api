

import { Prisma, PrismaClient } from "~/generated/prisma";
const prisma =new PrismaClient();
export default prisma;
export const UserPrisma={
    findByEmail:async (email:string)=>{
        return prisma.user.findUnique({
            where:{email}});
    },
    createUser: (data:{
        email:string,
        password:string,
        fname:string,
        lname:string,

    })=>{
        return prisma.user.create({data});
    },

};

