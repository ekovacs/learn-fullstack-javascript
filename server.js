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

import serverRender from './serverRender';
server.get("/", (req, resp) => {
    resp.render('index', {
        // this is how to define variables to EJS
        content: '...'
    });
});



server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, config.host, () => {
    console.log('express is listening on port: ' + config.port);
});