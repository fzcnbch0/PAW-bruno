const express  = require("express")
const test = require("./router.js")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const app = express()
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/kontakt',async(req,res) =>{
    const body = req.body
    console.log(body.imie)
    const user = {
        name:   body.imie,
        email: body.email,
        topic: body.szefy,
        content: body.tresc
      }

    await prisma.messages.create({data: user});
      res.redirect(302, '/')
})

app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) =>{
    res.sendFile(`${__dirname}/form.html`)
})

app.use('/api',test)
app.listen(PORT, ()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})
