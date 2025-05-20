import {schemaParseMiddleWare} from '~/middleware/zodValidator';
import { updateInSchema } from '~/lib/schema/auth';
import { Router } from "express";
import CATAGORY_HANDLER from "./catagory.handler";
 const CATAGORY_ROUTER=Router();
 
CATAGORY_ROUTER.post('/add',schemaParseMiddleWare(updateInSchema), CATAGORY_HANDLER.add)

CATAGORY_ROUTER.delete('/delete/:id', CATAGORY_HANDLER.delete)

CATAGORY_ROUTER.get('/all', CATAGORY_HANDLER.all)

CATAGORY_ROUTER.put('/update/:id',CATAGORY_HANDLER.update)

export default CATAGORY_ROUTER;