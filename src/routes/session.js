const { SessionController } = require('../app/Controllers');

const sessionRoutes = (router) => {
  router.post('/session', SessionController.handle);
}

module.exports = sessionRoutes;
