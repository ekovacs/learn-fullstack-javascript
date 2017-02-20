import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';


const server = express();

server.set('view engine', 'ejs');

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));


server.get("/", (req, resp) => {

    serverRender()
        .then(content => {
            resp.render('index', {
                content
            });
        })
        .catch(console.error);

});



server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, config.host, () => {
    console.log('express is listening on port: ' + config.port);
});