// const express = require("express")
// const req = require("express/lib/request")
// const res = require("express/lib/response")
import express from "express";
import { engine } from 'express-handlebars';

const app = express(); 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("home",{ 
      username: 'Arthur',
      today: new Date().toLocaleDateString()
});
})
app.get("/about", (req, res) =>{
  res.render("about")
})
app.get("/contact", (req, res) =>{
  res.render("contact")
})

app.listen(3000, () =>{
  console.log("server is now listening on port: " + 3000)
});