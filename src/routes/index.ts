import { Router } from "express";
import AUTH_ROUTER from "./auth/auth.routes";
import CUSTOMER_ROUTER from "./customer/customer.routes";
import { authMiddleware } from "src/middleware/auth.middleware";


const MAIN_ROUTER = Router();
MAIN_ROUTER.use("/auth",AUTH_ROUTER)
MAIN_ROUTER.use("/customer",authMiddleware,CUSTOMER_ROUTER)



export default MAIN_ROUTER;