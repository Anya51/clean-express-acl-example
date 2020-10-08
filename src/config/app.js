
const express = require('express');
const setMiddlewares  = require('./middlewares');
const setRoutes  = require('./routes');

const setApp = () => {
  const app = express();
  setMiddlewares(app);
  setRoutes(app);
  return app
};

module.exports = setApp;
