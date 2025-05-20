import { Router } from "express";
import AUTH_HANDLER from "./auth.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { logInSchema } from "~/lib/schema/auth";

const AUTH_ROUTER=Router()
AUTH_ROUTER.post('/register',AUTH_HANDLER.register)
AUTH_ROUTER.post('/login',schemaParseMiddleWare(logInSchema), AUTH_HANDLER.login)


export default AUTH_ROUTER