const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("<h1>Strona główna</h1>")
})
app.get('/kontakt',(req,res)=>{
    res.sendfile("index.html")
})
app.listen(port,()=>{
    console.log('Example app listening on port'+ port)
})