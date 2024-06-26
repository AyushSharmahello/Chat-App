import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const PORT=5000;
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

import cookieParser from "cookie-parser";
import {app,server} from './socket/socket.js'

import cors from 'cors'

app.use(cors())
 
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)

 

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})