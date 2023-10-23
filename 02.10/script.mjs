import { readFile, writeFile } from 'fs/promises';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const srv = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.statusCode = 200;
        const html = await readFile('./index.html');
        res.setHeader('content-type', 'text/html');
        res.write(html);
        res.end();
    } else if (url === '/kontakt' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString();
            const kontaktMessage = parsedBody.split('=')[1];
            
            try {
                await writeFile(`kontakt/message-${Date.now()}.txt`, kontaktMessage, 'utf-8');
                res.statusCode = 302;
                res.setHeader('Location', '/dziekujemy');
                return res.end();
            } catch (error) {
                console.error('Błąd podczas zapisywania pliku:', error);
                res.statusCode = 500;
                res.setHeader('content-type', 'text/plain');
                res.write('Błąd podczas zapisywania pliku');
                return res.end();
            }
        });
    } else if (url === '/dziekujemy') {
        res.statusCode = 200;
        const html = await readFile('./thankyou.html');
        res.setHeader('content-type', 'text/html');
        res.write(html);
        res.end();
    } else if (url === '/api') {
        res.statusCode = 200;
        const API = [
            {
                id: 1,
                name: 'Bambi',
            },
            {
                id: 2,
                name: 'Young Leosia',
            },
            {
                id: 3,
                name: 'Sarenka',
            },
            {
                id: 4,
                name: 'Młoda Leokadia',
            },
        ];
        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(API));
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('content-type', 'text/plain');
        res.write('Nie ma strony');
        res.end();
    }
});

srv.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
