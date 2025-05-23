import {z} from "zod";



export const creatSchema=z.object({
     transactionId: z.number(),
  recipientName: z.string(),
})

export type createPaid=z.infer<typeof creatSchema>;

export const updateSchema=z.object({
     transactionId: z.number(),
  recipientName: z.string(),
})

export type updatePaid=z.infer<typeof updateSchema>;