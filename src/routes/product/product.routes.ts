import { Router } from "express";
import PRODUCT_HANDLER from "./produts.handler";

const PRODUCT_ROUTER=Router();

PRODUCT_ROUTER.post('/get',PRODUCT_HANDLER.create)

PRODUCT_ROUTER.get('/getById/:id',PRODUCT_HANDLER.getById)

PRODUCT_ROUTER.get('/all',PRODUCT_HANDLER.all)

PRODUCT_ROUTER.put('/update/:id',PRODUCT_HANDLER.update)

export default PRODUCT_ROUTER