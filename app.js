'use strict';
require('dotenv').config();
const express = require('express')
const { connect } = require('./models/db_connection');
const errorMW = require('./middlewares/error');
const server = express();
const campaign = require('./routes/campaigns');
const teams = require('./routes/teams');
const fundRaisers = require('./routes/fundRaisers');

const hostname = process.env.HOSTNAME | '127.0.0.1'
const port = process.env.PORT | 8080;

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>nodeJS project</h1>')
})
server.get('/maching', (req, res) => {
    res.send('<br/><h2> M a c h i n g </h2><br/><h3>👩‍💻✨🤗<h3><br/><h4>by: Brachi Shkolnik & Yehudit Shraga<h4>')
})
server.use('/maching/campaign', campaign);
server.use('/maching/teams', teams);
server.use('/maching/fundRaiser', fundRaisers);
server.use(errorMW);

server.listen(port, hostname, () => {
    console.log(' M a c h i n g  \n 👩‍💻 ✨ 🤗 \nby: Brachi Shkolnik & Yehudit Shraga');
    console.log('maching server is up and running');
    connect();
})