import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connect.js";
import cookieParser from "cookie-parser";
import userRouters from "./routes/user.routes.js";
import { app,server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouters);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server Running on port ${PORT}`);
});
