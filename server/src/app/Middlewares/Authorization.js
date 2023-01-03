const jwt = require('jsonwebtoken');

const { promisify } = require('util');
// const LoginRepository = require('../Repositories/LoginRepository');

module.exports = {
  async eAdmin(req, res, next) {
    const AuthHeader = req.headers.authorization;
    if (!AuthHeader) {
      return res.status(400).json('Usuário não tem tokem');
    }
    const [bearer, token] = AuthHeader.split(' ');
    if (!token) {
      return res.status(400).json('Usuário não tem tokem');
    }

    try {
      const decode = await promisify(jwt.verify)(token, 'IAJISNMDANFKMFEIF232390OPK');
      req.userId = decode.id;
      return (
        next()
      );
    } catch (err) {
      return (
        res.status(400).json('Token inválido!')
      );
    }
  },
};
