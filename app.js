var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebaseInit = require('./firebase');

var indexRouter = require('./routes/index');
var emailRouter = require('./routes/email');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/email', emailRouter);

const port = parseInt(process.env.PORT || 3000);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

firebaseInit();

server.on('listening', () => console.log('App started'));

module.exports = app;
