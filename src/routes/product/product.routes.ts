import { Router } from "express";
import PRODUCT_HANDLER from "./produts.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/porduct";
import { updateSchema } from "~/lib/schema/porduct";
const PRODUCT_ROUTER=Router();

PRODUCT_ROUTER.post('/get',schemaParseMiddleWare(createSchema),PRODUCT_HANDLER.create)

PRODUCT_ROUTER.put('/update/:id', schemaParseMiddleWare(updateSchema),PRODUCT_HANDLER.update)

PRODUCT_ROUTER.get('/all',PRODUCT_HANDLER.all)
PRODUCT_ROUTER.get('/:id',PRODUCT_HANDLER.getById)


export default PRODUCT_ROUTER