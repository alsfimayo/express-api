import { Router } from "express";
import SALE_HANDLER from "./sale.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { creatSchema } from "~/lib/schema/sale";
import { updateSchema } from "~/lib/schema/catagory";

const SALE_ROUTER=Router();

SALE_ROUTER.post('/add',schemaParseMiddleWare(creatSchema),SALE_HANDLER.add);

SALE_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),SALE_HANDLER.update);

SALE_ROUTER.get('/:id',SALE_HANDLER.getById);

SALE_ROUTER.delete('/delete/:id',SALE_HANDLER.delete);


export default SALE_ROUTER;