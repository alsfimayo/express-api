import exp from "constants";
import { number, z } from "zod";

export const logInSchema =z.object({
    email:z.string().email(),
    password:z.string().min(8),
    
})
export type Login = z.infer<typeof logInSchema>

export const registerInSchema=z.object({
    email:z.string().email(),
    password:z.string(),
    fname:z.string(),
    lname:z.string()
})
export type Register=z.infer<typeof registerInSchema>

 