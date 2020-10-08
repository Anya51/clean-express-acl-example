const {auth, authorize} = require('../app/Middlewares')

const dashboardRoutes = (router) => {
  router.get('/dashboard', auth, authorize, (req, res) => {
    return res.json({ message: "Admin dashboard" });
  });
}

module.exports = dashboardRoutes;
