'use strict';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const winston = require('./config/logger/winston');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const encryptDecryptRouter = require('./routes/encryptDecrypt');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/encryptDecrypt', encryptDecryptRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Page not found.'));
});

// error handler
app.use((err, req, res) => {
  const isDevelopment = req.app.get('env') === 'development';

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: isDevelopment ? err : {},
  });
});

module.exports = app;
