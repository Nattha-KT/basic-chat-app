import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connect.js';


dotenv.config();
const PORT = process.env.PORT || 5000 
const app = express();

app.get('/api/',(req,res)=>{
    res.send("hello world!");
})

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server Running on port ${PORT}`)
})