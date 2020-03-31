const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
//midleware
app.use(express.json()); //give acess the body data
app.use(routes);
app.use(cors());

module.exports = app;



