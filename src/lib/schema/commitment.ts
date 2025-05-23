import {z} from "zod"

export const createSchema=z.object({
    unpaidTransactionId :z.number(),
         commitmentNote :z.string().optional(),
         commitmentDate :z.coerce.date(),
})

export type creteCommitment=z.infer<typeof createSchema>


export const updateSchema=z.object({
    unpaidTransactionId :z.number(),
         commitmentNote :z.string().optional(),
         commitmentDate :z.coerce.date(),
})

export type updateCommitment=z.infer<typeof updateSchema>