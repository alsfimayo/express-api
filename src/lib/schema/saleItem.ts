import exp from "constants";
import {z} from "zod";


export const createSchema=z.object({
     saleId:z.number(),
    productId:z.number(),
    quantity:z.number(),
    unitPrice:z.number(),
});

export type createSaleItem=z.infer<typeof createSchema>



export const updateSchema=z.object({
     saleId:z.number(),
    productId:z.number(),
    quantity:z.number(),
    unitPrice:z.number(),
    
});

export type updateSaleItem=z.infer<typeof updateSchema>