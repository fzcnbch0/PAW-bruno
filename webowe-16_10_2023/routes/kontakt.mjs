import express from 'express'
const router = express.Router();
import path from 'path'
import { __dirname } from '../dirname.mjs';

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/kontakt.html'));
    res.setHeader('content-type', 'text/html');

   })

export { router as contactRouter} 