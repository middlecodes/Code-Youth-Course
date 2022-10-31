const express = require('express')
const app = express()
const router1 = express.Router()
const router2 = express.Router()

// user
router1.get('/',(req,res)=>  
res.send("Home Page")
)

// user/about
router1.get('/about',(req,res)=>  
res.send("About us user")
)

// admin/about
router2.get('/about',(req,res)=>
res.send("About us admin")
)

app.use('/user',router1)
app.use('/admin',router2)


// Home
app.get('/',(req,res)=>
res.send("Home Page")
)

app.listen(11001,()=>console.log('server running on port 11001'));