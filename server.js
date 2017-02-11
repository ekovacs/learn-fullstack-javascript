import config , { nodeEnv } from './config';

import http from 'http';

const server = http.createServer((req, res) => {
    res.write("hello world! \n");
    setTimeout(function() {
        res.write("I can stream!");
        res.end();
    }, 1000);
});

server.listen(9090);
