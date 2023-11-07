import express from 'express'
import { createConnection } from 'mysql';
const router = express.Router();

const conn = createConnection({
    host: '172.22.112.1',
    user: 'root',
    password: '',
    database: 'webowe1'
})

router.get('/', async (req, res) => {
    let link1 = "/students - zwraca listę 10 obiektów "
    let link2 = "/students/{id} - zwraca studenta z określonym identyfikatorem jeśli istnieje "
    let link3 = "/subjects - zwraca listę 10 przedmiotów szkolnych "
    let link4 = "/subjects/{id} - zwraca przedmiot z określonym identyfikatorem jeśli istnieje "
    res.json(link1 + link2 + link3 + link4)
})

router.get('/students', (req, res) => {
    conn.connect((err) => {
        if (err) {
            throw err
        }

        conn.query("SELECT * FROM students", (err, result, fields) => {
            if (err) {
                throw err
            }
                res.json(result)
            });
       })
})

router.get('/students/:id', (req, res) => {
    const requestedId = req.params.id
    
    const sql = "SELECT * FROM students WHERE id = ?"
    
    conn.query(sql, [requestedId], (err, result, fields) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.status(404).json({ message: "Nie znaleziono studenta o podanym ID" })
        }
        else {
            res.json(result)
        }
    })
})

router.get('/subjects', (req, res) => {
    conn.connect((err) => {
        if (err) {
            throw err
        }

        conn.query("SELECT * FROM subjects", (err, result, fields) => {
            if (err) {
                throw err
            }
                res.json(result)
            });
       })
})

router.get('/subjects/:id', (req, res) => {
    const requestedId = req.params.id
    
    const sql = "SELECT * FROM subjects WHERE id = ?"
    
    conn.query(sql, [requestedId], (err, result, fields) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.status(404).json({ message: "Nie znaleziono przedmiotu o podanym ID" })
        }
        else {
            res.json(result)
        }
    })
})

export {router as apiRouter}