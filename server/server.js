// const express = require('express')

import dotenv from 'dotenv'
import express from 'express'
import DbConfig from './db/DbConfig.js';
import EmployeeRouter from './routes/Employee.routes.js';
dotenv.config();
const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({
        message : "welcome to MERN stack new"
    })
})
app.use("/employee",EmployeeRouter)
const port  = process.env.PORT
app.listen(port,()=>{
    DbConfig()
    console.log(`server created successfully : ${port}`);
    
})