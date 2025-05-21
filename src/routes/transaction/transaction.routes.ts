import { Router } from "express";
import TRANSACTION_HANDLER from "./transaction.handler";

const TRANSACTION_ROUTER=Router();


TRANSACTION_ROUTER.post('/create',TRANSACTION_HANDLER.create)
TRANSACTION_ROUTER.put('/update/:id',TRANSACTION_HANDLER.update)
TRANSACTION_ROUTER.get('/all',TRANSACTION_HANDLER.all)
TRANSACTION_ROUTER.delete('/delete/:id',TRANSACTION_HANDLER.delete);
TRANSACTION_ROUTER.get('/:id',TRANSACTION_HANDLER.id)

export default TRANSACTION_ROUTER;