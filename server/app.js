const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));



mongoose.connect('mongodb://angular-attendee:123123@ds117158.mlab.com:17158/angular-formation', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  }, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connexion opened to mongodb!');
    }
});

 app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
 });

module.exports = app;