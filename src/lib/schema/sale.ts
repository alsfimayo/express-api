import {z} from "zod"


export const creatSchema=z.object({
    customerId :z.number(),
  total:z.number(),
});

export type createSale=z.infer<typeof creatSchema>;

export const updateSchema=z.object({
    coustomerId:z.number(),
    total:z.number(),
});
export type updateSale=z.infer<typeof updateSchema>