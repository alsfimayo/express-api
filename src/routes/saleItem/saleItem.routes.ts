
import { Router } from "express";
import SALEITEM_HANDLER from "./saleItem.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/saleItem";
import { updateSchema } from "~/lib/schema/saleItem";
import MAIN_ROUTER from "~/routes";



const SALEITEM_ROUTER=Router()

SALEITEM_ROUTER.post('/add',schemaParseMiddleWare(createSchema),SALEITEM_HANDLER.add)

SALEITEM_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),SALEITEM_HANDLER.update)

SALEITEM_ROUTER.get('/all',SALEITEM_HANDLER.all)

SALEITEM_ROUTER.get('/:id',SALEITEM_HANDLER.id)


export default SALEITEM_ROUTER;