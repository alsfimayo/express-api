import type { Commitment } from "~/types";
import prisma from "~/lib/prisma";
// import { update } from "lodash";


const COMMITMENT_SERVICE={
    add:async(input:Commitment)=>{
        const addCommitment=await prisma.commitment.create({
            data:{
                unpaidTransactionId:input.unpaidTransactionId,
                commitmentNote:input.commitmentNote,
                commitmentDate:input.commitmentDate
            }
        });
        return addCommitment
    },

    update:async(input:Commitment,id:number)=>{
        const updateCommitment=await prisma.commitment.update({
            where:{id},
            data:{
                unpaidTransactionId:input.unpaidTransactionId,
                commitmentNote:input.commitmentNote,
                commitmentDate:input.commitmentDate,

            }
        });
        return updateCommitment
    },
    all:async()=>{
        const alldata=await prisma.commitment.findMany({});
        
        return alldata
    },

    id:async(id:number)=>{
        const idCommitment=await prisma.commitment.findUnique({
            where:{id},
        });
        return idCommitment
    }

};

export default COMMITMENT_SERVICE;