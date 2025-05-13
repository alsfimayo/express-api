import { Router } from "express";
import AUTH_HANDLER from "./auth.handler";

const AUTH_ROUTER=Router()
AUTH_ROUTER.post('/register',AUTH_HANDLER.register)
AUTH_ROUTER.post('/login', AUTH_HANDLER.login)


export default AUTH_ROUTER