const express = require('express')
const app = express ()
const router1 = express.Router()


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/about',(req,res)=>
res.render("about"));

app.get('/contact',(req,res)=>
res.render("contact"));

router1.get('/error',(req,res)=>
res.send("Oh no we encountered an error"));

app.use('/user',router1)


app.listen(1100,()=>console.log('error'));


