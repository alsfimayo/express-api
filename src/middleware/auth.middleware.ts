import { asyncHandler } from "~/lib/async-handler";
import { verifyToken } from "~/utils/jwt";
import { HttpError } from "./error-handler";

export const authMiddleware = asyncHandler(async(req,res,next)=>{
    ///Authroization:Bearer 
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        throw new HttpError("No Token is found",401)
    }
    const isTokenVerified = verifyToken(token)
    req.user = isTokenVerified
    next();
    
    

})