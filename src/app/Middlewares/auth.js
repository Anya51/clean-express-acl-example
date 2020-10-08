const jwt = require ('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');


const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    const { sub, role } = decoded;

    req.user = {
      name: sub,
      role,
    };

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};

module.exports = auth