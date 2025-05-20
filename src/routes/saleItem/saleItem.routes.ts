
import { Router } from "express";
import SALEITEM_HANDLER from "./saleItem.handler";
import MAIN_ROUTER from "~/routes";



const SALEITEM_ROUTER=Router()

SALEITEM_ROUTER.post('/add',SALEITEM_HANDLER.add)

SALEITEM_ROUTER.put('/update/:id',SALEITEM_HANDLER.update)

SALEITEM_ROUTER.get('/all',SALEITEM_HANDLER.all)

SALEITEM_ROUTER.get('/:id',SALEITEM_HANDLER.id)


export default SALEITEM_ROUTER;