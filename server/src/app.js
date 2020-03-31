const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
//midleware
app.use(express.json()); //give acess the body data
app.use(cors());
app.use(routes); //cors before routes to work


module.exports = app;



