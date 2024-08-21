import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'


dotenv.config();
const PORT = process.env.PORT || 5000 
const app = express();

app.get('/api/',(req,res)=>{
    res.send("hello world!");
})

app.use("/api/auth",authRoutes)

app.listen(PORT,()=> console.log(`server Running on port ${PORT}`))