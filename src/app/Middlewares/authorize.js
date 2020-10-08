const acl = require('express-acl');
const {config, responseObject } = require('../../config/acl')

acl.config(config, responseObject);
const authorize = acl.authorize;

module.exports = authorize;