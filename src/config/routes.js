const { Router } = require('express');
const { sessionRoutes, dashboardRoutes } = require('../routes');

const setRoutes = (app) => {
  const router = Router();
  sessionRoutes(router);
  dashboardRoutes(router);
  app.use(router);
};

module.exports = setRoutes;
