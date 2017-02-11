import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');


server.get("/", (req, resp) => {
    resp.render('index', {
        // this is how to define variables to EJS
        content: 'Hello <b>express</b> and <b>EJS</b>'
    });
})



server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, () => {
    console.log('express is listening on port: ' + config.port);
})