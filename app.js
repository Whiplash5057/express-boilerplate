const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

routes(app);

app.use((err, req, res, next) => {
    res.status(422)
    .send({
      status: 'failure',
      message: 'Something went wrong',
      response: {
        authToken: '',
        err,
      },
    });
  });
  
  module.exports = app;