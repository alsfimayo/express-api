import { Router } from "express";
import STOCK_HANDLER from "./stock.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/stock";
import { updateSchema } from "~/lib/schema/stock";

const STOCK_ROUTER=Router();


STOCK_ROUTER.post('/add',schemaParseMiddleWare(createSchema),STOCK_HANDLER.add);

STOCK_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),STOCK_HANDLER.update);

STOCK_ROUTER.delete('/delete/:id', STOCK_HANDLER.delete);

STOCK_ROUTER.get('/:id',STOCK_HANDLER.id);


export default STOCK_ROUTER