import * as http from 'http'
import {readFile} from 'fs/promises'

const  port = 3000
const host = '127.0.0.1'
const server = http.createServer(async(req,res)=> {
    const url = req.url;

    if(url == '/') {
        const html = await readFile('index.html')

        res.setHeader('content-type','text/html')

        res.write(html)
        res.end()
    }

})

