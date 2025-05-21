import bcrypt from 'bcrypt'
import prisma from '~/lib/prisma'
import { Http } from 'winston/lib/winston/transports'
import {HttpError} from '~/middleware/error-handler'
import type { Customer } from '~/types'
import { string } from 'zod'
// import { PrismaClient } from '~/generated/prisma'
// const prisma=new PrismaClient()

const CUSTOMER_SERVICE={
    add:async(input:Customer)=>{
        const newCustomer=await prisma.customer.create({
            data:{
                name:input.name,
                phone:input.phone,
                address:input.address
                
                
            },
        });
        return newCustomer;

    },
  
    all:async()=>{
        const allCustomer=await prisma.customer.findMany({})
        return allCustomer;
    },
      getCustomerById:async(id:number)=>{
        const customerById=await prisma.customer.findUnique({
            where:{id}
        })
        return customerById;
    }
}
export default CUSTOMER_SERVICE