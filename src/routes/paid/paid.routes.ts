import { Router } from "express";
import PAID_HANDLER from "./paid.handler";


const PAID_ROUTER=Router()


PAID_ROUTER.post("/add",PAID_HANDLER.add);
PAID_ROUTER.put('/update/:id', PAID_HANDLER.update);
PAID_ROUTER.get('/:id',PAID_HANDLER.id)

export default PAID_ROUTER
