import z from "zod";

export const createSchema=z.object({
    name:z.string(),
  phone:z.string(),
});

export type createSupplier=z.infer<typeof createSchema>

export const updateSchema=z.object({
    name:z.string(),
  phone:z.string(),
});

export type updateSupplier=z.infer<typeof updateSchema>
