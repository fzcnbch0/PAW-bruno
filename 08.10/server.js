const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const messagesDirectory = path.join(__dirname, 'contact');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save-message', (req, res) => {
    const message = req.body.message;
    const timestamp = Date.now();
    const formattedDate = new Date(timestamp).toLocaleString().replace(/[ ,:]/g, '_');
    const fileName = `message_${formattedDate}.txt`;
    const filePath = path.join(messagesDirectory, fileName);

    
    fs.writeFile(filePath, message, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving message.');
        }
        console.log(`Message saved to ${fileName}`);
        res.redirect('/dziekujemy');
    });
});

app.get('/dziekujemy', (req, res) => {
    res.sendFile(path.join(__dirname, 'thankyou.html'));
});

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
