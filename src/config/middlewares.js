const { bodyParser, contentType, cors} = require('../app/Middlewares');

const setMiddlewares = (app) => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};

module.exports = setMiddlewares;