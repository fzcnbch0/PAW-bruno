import express from 'express'
import Path from 'path'
import {contactRouter} from "./routes/kontakt.mjs"
import { mainRouter } from './routes/mainPage.mjs';
import { __dirname } from './dirname.mjs';
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/static', express.static(Path.join(__dirname, 'public')))

app.use('/kontakt', contactRouter)
app.use('/', mainRouter)

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})