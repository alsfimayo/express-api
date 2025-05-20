import { Router } from "express";
import SALE_HANDLER from "./sale.handler";
import exp from "constants";

const SALE_ROUTER=Router();

SALE_ROUTER.post('/add',SALE_HANDLER.add);

SALE_ROUTER.get('/:id',SALE_HANDLER.getById);

SALE_ROUTER.put('/update/:id',SALE_HANDLER.update);

SALE_ROUTER.delete('/delete/:id',SALE_HANDLER.delete);


export default SALE_ROUTER;