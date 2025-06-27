// const express = require('express')

import express from 'express'
import DbConfig from './db/DbConfig.js';
import CreateEmployee from './controllers/createEmployee.js';
import GetEmployee from './controllers/getEmployee.js';

const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({
        message : "welcome to MERN stack new"
    })
})
app.post("/employee",CreateEmployee)
app.get("/employee",GetEmployee)
app.listen(3000,()=>{
    DbConfig()
    console.log("server created successfully");
    
})