import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';


const server = express();

server.set('view engine', 'ejs');

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.get("/", (req, resp) => {
    resp.render('index', {
        // this is how to define variables to EJS
        content: 'Hello <b>express</b> and <b>EJS</b>'
    });
});



server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, () => {
    console.log('express is listening on port: ' + config.port);
});