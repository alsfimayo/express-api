import {z} from "zod"




export const createSchema=z.object({
    name:z.string(),
  phone:z.string(),
  address:z.string()
})

export type createCustomer=z.infer<typeof createSchema>