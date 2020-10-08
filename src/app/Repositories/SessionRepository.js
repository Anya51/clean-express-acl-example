const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')

const SessionRepository = {
  sign: (user) => {

  const {name, role} = user;
  const {secret, expiresIn} = auth;

    const token = jwt.sign({ role }, secret, {
      subject: name,
      expiresIn,
    });
    return token;
  }
}

module.exports = SessionRepository;