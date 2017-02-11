import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();


server.get("/", (req, resp) => {
    resp.send('Hello express');
})

// server.get("public/about.html", (req, resp) => {
//     fs.readFile('./about.html', (err, data) => {
//         resp.send(data.toString());
//     })
// })

server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, () => {
    console.log('express is listening on port: ' + config.port);
})