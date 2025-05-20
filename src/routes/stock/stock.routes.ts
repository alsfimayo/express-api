import { Router } from "express";
import STOCK_HANDLER from "./stock.handler";

const STOCK_ROUTER=Router();


STOCK_ROUTER.post('/add',STOCK_HANDLER.add);

STOCK_ROUTER.put('/update/:id',STOCK_HANDLER.update);

STOCK_ROUTER.delete('/delete/:id', STOCK_HANDLER.delete);

STOCK_ROUTER.get('/id',STOCK_HANDLER.id);


export default STOCK_ROUTER