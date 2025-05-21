import { Router } from "express";
import { authMiddleware } from "src/middleware/auth.middleware";
import AUTH_ROUTER from "./auth/auth.routes";
import CUSTOMER_ROUTER from "./customer/customer.routes";
import CATAGORY_ROUTER from "./catagory/catagory.routes";
import PRODUCT_ROUTER from "./product/product.routes";
import SUPPLIER_ROUTER from "./supplier/supplier.routes";
import STOCK_ROUTER from "./stock/stock.routes";
import SALE_ROUTER from "./sale/sale.routes";
import SALEITEM_ROUTER from "./saleItem/saleItem.routes";
import TRANSACTION_ROUTER from "./transaction/transaction.routes";
import PAID_ROUTER from "./paid/paid.routes";
import UNPAIDTRANSACTION_ROUTER from "./unpaidTransaction/unpaidTransaction.routes";

import UPLOAD_ROUTER from "./upload.routes";


const MAIN_ROUTER = Router();
MAIN_ROUTER.use("/auth",AUTH_ROUTER)
MAIN_ROUTER.use('/customer',authMiddleware,CUSTOMER_ROUTER)
MAIN_ROUTER.use('/catagory',authMiddleware,CATAGORY_ROUTER)
MAIN_ROUTER.use('/product',authMiddleware,PRODUCT_ROUTER)
MAIN_ROUTER.use('/supplier',authMiddleware,SUPPLIER_ROUTER)
MAIN_ROUTER.use('/stock',authMiddleware,STOCK_ROUTER)
MAIN_ROUTER.use('/sale',authMiddleware,SALE_ROUTER)
MAIN_ROUTER.use('/saleItem',authMiddleware,SALEITEM_ROUTER)
MAIN_ROUTER.use('/transaction',authMiddleware,TRANSACTION_ROUTER)
MAIN_ROUTER.use('/upload',UPLOAD_ROUTER)
MAIN_ROUTER.use('/paid',PAID_ROUTER)
MAIN_ROUTER.use('/unpaidTransaction',UNPAIDTRANSACTION_ROUTER)


export default MAIN_ROUTER;