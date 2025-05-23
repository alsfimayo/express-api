import {z} from "zod";

export const createSchema=z.object({
     name:z.string(),
  price:z.number(),
  catagoryId:z.number(),
  supplierId: z.number(),
  batch_no:z.string(),
});

export type createProduct=z.infer<typeof  createSchema>

export const updateSchema=z.object({
     name:z.string(),
  price:z.number(),
  catagoryId:z.number(),
  supplierId: z.number(),
  batch_no:z.string(),
});

export type updateProduct=z.infer<typeof  updateSchema>