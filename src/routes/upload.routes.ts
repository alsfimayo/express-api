 import {multer_doc, multer_img_doc, multer_img} from "~/middleware/multer";
import { Router } from "express";
import { Express } from "express";
import { Customer } from "~/types";
import path from "node:path";
import multer from "multer";
const UPLOAD_ROUTER=Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,'../../uploads'))
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })



UPLOAD_ROUTER.post("/file",upload.single('file'),(req,res)=>{
    res.status(201).json({message:"file uploaded successfully",file:req.file})
})

export default UPLOAD_ROUTER;