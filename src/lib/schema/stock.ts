import {z} from "zod";

export const createSchema=z.object({
     quantity: z.number(),
  manufacturingDate:z.coerce.date(),
  expiryDate: z.coerce.date(),
  productId: z.number(),
})

export type  stockCreate=z.infer<typeof createSchema>

export const updateSchema=z.object({
     quantity: z.number(),
  manufacturingDate:z.coerce.date(),
  expiryDate: z.coerce.date(),
  productId: z.number(),
})

export type  stockUpdate=z.infer<typeof updateSchema>