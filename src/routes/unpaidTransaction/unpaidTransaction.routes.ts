import { Router } from "express";
import UNPAIDTRANSACTION_HANDLER from "./unpaidTransaction.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/unpaid";
import { updateSchema } from "~/lib/schema/unpaid";



const UNPAIDTRANSACTION_ROUTER=Router();

UNPAIDTRANSACTION_ROUTER.post("/add",schemaParseMiddleWare(createSchema),UNPAIDTRANSACTION_HANDLER.add);
UNPAIDTRANSACTION_ROUTER.put("/update/:id",schemaParseMiddleWare(updateSchema),UNPAIDTRANSACTION_HANDLER.update);
UNPAIDTRANSACTION_ROUTER.get("/all",UNPAIDTRANSACTION_HANDLER.all);
UNPAIDTRANSACTION_ROUTER.get("/:id",UNPAIDTRANSACTION_HANDLER.id);


export default UNPAIDTRANSACTION_ROUTER;