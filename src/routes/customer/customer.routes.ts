import { Router } from "express"
import CUSTOMER_HANDLER from 'src/routes/customer/customer.handler'
import { schemaParseMiddleWare } from "~/middleware/zodValidator"
import { createSchema } from "~/lib/schema/customer"



const CUSTOMER_ROUTER=Router()
CUSTOMER_ROUTER.post('/add',schemaParseMiddleWare(createSchema),CUSTOMER_HANDLER.add)
CUSTOMER_ROUTER.get('/all',CUSTOMER_HANDLER.all)
CUSTOMER_ROUTER.get('/:id', CUSTOMER_HANDLER.getCustomerById);

// CUSTOMER_ROUTER.get('/getCustomerById/:id', CUSTOMER_HANDLER.getCustomerById)


export default CUSTOMER_ROUTER