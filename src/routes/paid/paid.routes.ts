import { Router } from "express";
import PAID_HANDLER from "./paid.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { creatSchema } from "~/lib/schema/paid";
import { updateSchema } from "~/lib/schema/paid";


const PAID_ROUTER=Router()


PAID_ROUTER.post("/add",schemaParseMiddleWare(creatSchema),PAID_HANDLER.add);
PAID_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema), PAID_HANDLER.update);
PAID_ROUTER.get('/:id',PAID_HANDLER.id)

export default PAID_ROUTER
