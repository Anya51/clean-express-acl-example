const bodyParser  = require('./body-parser');
const cors  = require('./cors');
const contentType  = require ('./content-type');
const auth = require('./auth')
const authorize = require('./authorize')


module.exports = {
  bodyParser,
  cors,
  contentType,
  auth,
  authorize
};