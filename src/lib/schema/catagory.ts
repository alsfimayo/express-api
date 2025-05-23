import {z } from "zod"

export const createSchema=z.object({
      name:z.string()
  })
  export type createCatagory=z.infer<typeof createSchema>

  export const updateSchema=z.object({
      name:z.string()
  })
  export type updateCatagory=z.infer<typeof updateSchema>