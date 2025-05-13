import bcrypt from "bcrypt"
export function encryptedPassword(password:string){
    const hashedPassword  = bcrypt.hashSync(password,10)
    return hashedPassword;

}

export function comparePassword(password:string,hashedPassword:string){
    const isCompared  = bcrypt.compareSync(hashedPassword,password)
    return isCompared
}