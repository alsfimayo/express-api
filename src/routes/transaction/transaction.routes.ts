import { Router } from "express";
import TRANSACTION_HANDLER from "./transaction.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/transaction";
import { updateSchema } from "~/lib/schema/transaction";

const TRANSACTION_ROUTER=Router();


TRANSACTION_ROUTER.post('/create',schemaParseMiddleWare(createSchema),TRANSACTION_HANDLER.create)
TRANSACTION_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),TRANSACTION_HANDLER.update)
TRANSACTION_ROUTER.get('/all',TRANSACTION_HANDLER.all)
TRANSACTION_ROUTER.delete('/delete/:id',TRANSACTION_HANDLER.delete);
TRANSACTION_ROUTER.get('/:id',TRANSACTION_HANDLER.id)

export default TRANSACTION_ROUTER;