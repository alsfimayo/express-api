import { Router } from "express";
import SUPPLIER_HANDLER from "./supplier.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/supplier";
import { updateSchema } from "~/lib/schema/supplier";
import exp from "constants";


const SUPPLIER_ROUTER=Router();

SUPPLIER_ROUTER.post('/add',schemaParseMiddleWare(createSchema),SUPPLIER_HANDLER.create);

SUPPLIER_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),SUPPLIER_HANDLER.update);

SUPPLIER_ROUTER.get('/all',SUPPLIER_HANDLER.all);


export default SUPPLIER_ROUTER;