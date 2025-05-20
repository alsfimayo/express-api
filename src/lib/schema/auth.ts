import exp from "constants";
import { number, z } from "zod";

export const logInSchema =z.object({
    email:z.string().email(),
    password:z.string(),
    
})
export type Login = z.infer<typeof logInSchema>

 export const updateInSchema=z.object({
     name:z.string()
 })
 export type Catagory=z.infer<typeof updateInSchema>