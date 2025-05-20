import { update } from "lodash";
import { PrismaClient } from "~/generated/prisma";
import type { Supplier} from "~/types";
const prisma=new PrismaClient();
const SUPPLIER_SERVICE={
    addSupplier:async(data:Supplier)=>{
        const supplier=await prisma.supplier.create({
            data:{
                name:data.name,
                phone:data.phone
            }
        })
        return supplier;
    },
    updateSupplier:async(data:Supplier,id:number)=>{
        const update=await prisma.supplier.update({
            where:{id:Number(id)},
            data:{name:data.name,
                  phone:data.phone

            }
        });
        return update
    },
    getAllSupplier:async()=>{
        const all=await prisma.supplier.findMany({

        })
        return all;
    }
};
export default SUPPLIER_SERVICE