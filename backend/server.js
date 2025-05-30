// const express = require('express')  common js

// import express from 'express'  module

import express from "express";

const app = express();
app.use(express.json())

app.get("", (req, res) => {
  res.json({
    data: "Welcome to Home Page and learn express and MERN",
  });
});
app.get("/products", (req, res) => {
  return res.json({
    data: [
      
    ],
  });
});
app.listen("3000", () => {
  console.log("server is running successfully");
});
