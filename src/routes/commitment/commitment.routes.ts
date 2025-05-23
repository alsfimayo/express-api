import { Router } from "express";
import COMMITMENT_HANDLER from "./commitment.handler";
import { schemaParseMiddleWare } from "~/middleware/zodValidator";
import { createSchema } from "~/lib/schema/commitment";
import { updateSchema } from "~/lib/schema/commitment";


const COMMITMENT_ROUTER=Router();

COMMITMENT_ROUTER.post("/add",schemaParseMiddleWare(createSchema), COMMITMENT_HANDLER.add);
COMMITMENT_ROUTER.put("/update/:id",schemaParseMiddleWare(updateSchema),COMMITMENT_HANDLER.update);
COMMITMENT_ROUTER.get("/all",COMMITMENT_HANDLER.all);
COMMITMENT_ROUTER.get("/:id",COMMITMENT_HANDLER.id);

export default COMMITMENT_ROUTER;