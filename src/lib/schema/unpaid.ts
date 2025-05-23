import {z}from "zod";

export const createSchema=z.object({
transactionId: z.number(),
})

export type createUnPaid=z.infer<typeof createSchema>

export const updateSchema=z.object({
transactionId: z.number(),
})

export type updateUnpaid=z.infer<typeof updateSchema>