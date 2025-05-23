// import "@utils/env";


import express from "express";
import cors from "cors";
// import helmet from "helmet";
import morgan from "morgan";
import errorHandle from "src/middleware/error-handler";
import logger from "~/lib/logger";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { socketHandler } from "~/lib/socket";
import MAIN_ROUTER from "./routes";
import env from "./env";
import path from "path";

// import {multer_doc, multer_img_doc, multer_img} from "~/middleware/multer";
// import { Router } from "express";
// import { Express } from "express";
// import multer from "multer";
// const upload=multer({dest: 'uploads'});
// const UPLOAD_ROUTER=Router();
// UPLOAD_ROUTER.post("/file",multer_img_doc.array('file'),(req,res)=>{
//     res.status(201).json({message:"files uploaded successfully",file:req.files})
// })

// export default UPLOAD_ROUTER;
 



const app = express();

app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Socket.io handler

socketHandler(io);

// Database connection


// Middleware

// app.use(
//   helmet({
//     crossOriginResourcePolicy: {
//       policy: "cross-origin",
//     },
//   }),
// );
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// API routes
app.use("/api/v1", MAIN_ROUTER);

// Swagger docs

// Error handler middleware
app.use(errorHandle);

// Start the server
server.listen(env.PORT_NO, () => {
  logger.info(`Server started on port :${process.env.PORT_NO}`);
});
