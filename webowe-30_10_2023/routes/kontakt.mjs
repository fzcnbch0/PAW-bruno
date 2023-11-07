import express from 'express'
const router = express.Router();
import path from 'path'
import { createConnection } from 'mysql';
import { __dirname } from '../dirname.mjs';
import { appendFile } from 'fs';

const conn = createConnection({
    host: '172.22.112.1',
    user: 'root',
    password: '',
    database: 'webowe1'
})

conn.connect((err) => {
    if (err) {
        throw err
    }
    else {
        console.log('Connected to database')
    }
})

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/kontakt.html'));
    res.setHeader('content-type', 'text/html');
})

router.post('/', async (req, res) => {
    const dataToSend = req.body
    const valuesToSend = Object.values(dataToSend)
    const sql = "INSERT INTO formdata (name, mail, wybor, message) VALUES (?)"

    conn.query(sql, [valuesToSend], (err, result) => {
        if (err) {
            throw err
        }

        console.log("1 record inserted")

        res.redirect("/")
    });
})

export { router as contactRouter} 