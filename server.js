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


server.get(['/', '/contest/:contestId'], (req, resp) => {
  serverRender(req.params.contestId)
        .then(({initialMarkup, initialData}) => {
          resp.render('index', {
            initialMarkup,
            initialData
          });
        })
        .catch(error => {
          console.log(error);
          resp.status(404).send('Bad request ' + error.toString());
        });

});



server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, config.host, () => {
  console.log('express is listening on port: ' + config.port);
});