import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Hello, this is my first Node.js server and it's currently running on port ${PORT}</h1>`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});