const express = require('express')
const app = express() 
const router1 = express.Router()

app.set('view engine', 'ejs');

router1.get('/vegetables', (req,res)=>
res.render = ("vegetables")
)

app.use('/user',router1)

app.listen(8080,()=> console.log('Server running on 8080'));

