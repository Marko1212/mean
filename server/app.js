var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("../public"));

mongoose.connect('mongodb+srv://angulardyma:123123123@cluster0.ycss7.mongodb.net/angulardyma?retryWrites=true&w=majority', {}, (err) => { if (err) { console.log(err); } else { console.log("connexion db ok !"); } });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app;
