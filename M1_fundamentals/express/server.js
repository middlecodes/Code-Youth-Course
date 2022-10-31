app.use(express.urlencodeda());
app.post('/save', (req,res)=>){
    const name = req.body.uname;
    const email = req.body.email;
}
