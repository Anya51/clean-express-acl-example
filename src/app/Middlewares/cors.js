const cors = (req, res, next) => {
  res.set('access-control-allow-origin', '*');
  res.set('acesss-control-allow-methods', '*');
  res.set('acesss-control-allow-headers', '*');
  next();
}

module.exports = cors;
