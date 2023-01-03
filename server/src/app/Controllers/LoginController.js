const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LoginRepository = require('../Repositories/LoginRepository');

class LoginController {
  async index(req, res) {
    const usuarios = await LoginRepository.findAll();
    res.json(usuarios);
  }

  async store(req, res) {
    const data = req.body;
    data.password = await bcrypt.hash(data.password, 8);
    const { name, email, password } = data;

    if (!(data.name)) {
      return res.status(400).json('Nome é obrigatório');
    }
    const userExists = await LoginRepository.findByEmail(data.email);
    if (userExists) {
      return res.status(400).json('E-mail já cadastrado');
    }
    const user = await LoginRepository.create(
      {
        name,
        email,
        password,
      },
    );

    return (
      res.status(200).json(`${user.name} cadastrado com sucesso!`)
    );
  }

  async show(req, res) {
    const data = req.body;
    const userExists = await LoginRepository.findByEmail(data.email);
    if (!userExists) {
      return res.status(400).json('Usuário ou senha incorreta!');
    }

    if (!(await bcrypt.compare(data.password, userExists.password))) {
      return (
        res.status(400).json('Usuário ou senha incorreta!')
      );
    }
    const token = jwt.sign({ id: userExists.id }, 'IAJISNMDANFKMFEIF232390OPK', {
      expiresIn: '7d',
    });
    res.json({
      name: userExists.name,
      id: userExists.id,
      email: userExists.email,
      token,
    });
  }

  async delete(request, response) {
    const data = request.body;

    await LoginRepository.delete(data.email);
    response.sendStatus(204);
  }
}

module.exports = new LoginController();
