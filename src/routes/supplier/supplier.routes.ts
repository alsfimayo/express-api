import { Router } from "express";
import SUPPLIER_HANDLER from "./supplier.handler";
import exp from "constants";


const SUPPLIER_ROUTER=Router();

SUPPLIER_ROUTER.post('/add',SUPPLIER_HANDLER.create);

SUPPLIER_ROUTER.put('/update/:id',SUPPLIER_HANDLER.update);

SUPPLIER_ROUTER.get('/all',SUPPLIER_HANDLER.all);


export default SUPPLIER_ROUTER;