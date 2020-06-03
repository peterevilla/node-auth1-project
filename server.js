const express = require('express');
const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send("<h2>Welcome to API</h2>")
})


module.exports = server;
