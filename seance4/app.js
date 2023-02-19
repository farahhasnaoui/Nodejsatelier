const express = require('express');
const logger =require ('morgan');
const contactsRouter = require('./routes/contacts.js');
const app = express();
const createError = require('http-errors');
const dbConfig = require('./database/mongodb.json');
const mongoose =require('mongoose');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use('/contact',contactsRouter);
app.use((req,res,next )=>{
next(createError(404)); 
})
mongoose.connect(dbConfig.mongo.uri)
module.exports = app;