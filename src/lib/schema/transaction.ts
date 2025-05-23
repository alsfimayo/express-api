import {z } from "zod";

export const createSchema=z.object({
      totalAmount:z.number(),
       discountAmount:z.number(),
       type:z.enum(["CREDIT", "PAYMENT"]),
       paymentmethod:z.enum(["CASH", "CARD", "BANK_TRANSFER", "OTHER"]),
       customerId:z.number(),
       saleId:z.number().optional(),
       date:z.coerce.date(),
    })
export type createTransaction=z.infer<typeof createSchema>



export const updateSchema=z.object({
       totalAmount:z.number(), 
       discountAmount:z.number(),
       type:z.enum(["CREDIT", "PAYMENT"]),
       paymentmethod:z.enum(["CASH", "CARD", "BANK_TRANSFER", "OTHER"]),
       customerId:z.number(),
       saleId:z.number().optional(),
       date:z.coerce.date(),
    });

export type updateTransaction=z.infer<typeof updateSchema>
