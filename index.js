const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileupload= require('express-fileupload');
const_= require('lodash');

const app = express()


app.use(fileupload({
    createParentPath: true
}))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));


const port = process.env.PORT ||3000;

