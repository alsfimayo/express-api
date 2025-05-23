import {schemaParseMiddleWare} from '~/middleware/zodValidator';
import { createSchema } from '~/lib/schema/catagory';
import { updateSchema } from '~/lib/schema/catagory';
import { Router } from "express";
import CATAGORY_HANDLER from "./catagory.handler";
 const CATAGORY_ROUTER=Router();
 
CATAGORY_ROUTER.post('/add',schemaParseMiddleWare(createSchema), CATAGORY_HANDLER.add)

CATAGORY_ROUTER.put('/update/:id',schemaParseMiddleWare(updateSchema),CATAGORY_HANDLER.update)

CATAGORY_ROUTER.get('/all', CATAGORY_HANDLER.all)

CATAGORY_ROUTER.delete('/delete/:id', CATAGORY_HANDLER.delete)

export default CATAGORY_ROUTER;