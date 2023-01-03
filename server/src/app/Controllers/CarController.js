const multer = require('multer');
const CarRepository = require('../Repositories/CarRepository');

const multerConfig = require('../Middlewares/UploadConfig');

const upload = multer(multerConfig).single('image');

class CarController {
  // Exibir todos os carros
  async index(req, res) {
    const cars = await CarRepository.FindAll();
    return (
      res.status(200).json(cars)
    );
  }

  // Deletar
  async delete(req, res) {
    const { id } = req.params;
    await CarRepository.delete(id);
    return (
      res.status(200).json('Carro deletado com sucesso')
    );
  }

  // Criar cadastro
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json(err.code);
      }
      let { filename } = req.file;
      filename = `http://localhost:8080/files/${filename}`;

      const {
        name, brand, model, price,
      } = req.body;
      if (!name) {
        return res.status(400).json('Nome do veículo é obrigatório!');
      }
      if (!brand) {
        return res.status(400).json('Marca do veículo é obrigatório!');
      }
      if (!model) {
        return res.status(400).json('Modelo do veículo é obrigatório!');
      }
      if (!price) {
        return res.status(400).json('Preço do veículo é obrigatório!');
      }
      try {
        const car = await CarRepository.Create({
          name, brand, model, price, filename,
        });
        return (
          res.status(200).json('Cadastro realizado com sucesso!')
        );
      } catch (error) {
        res.status(400).json(error);
      }
    });
  }

  // Editar
  async upDate(req, res) {
    const { id } = req.params;
    const {
      name, brand, model, price, filename,
    } = req.body;
    if (!name) {
      res.status(400).json('Nome do veículo é obrigatório!');
    }
    if (!brand) {
      res.status(400).json('Marca do veículo é obrigatório!');
    }
    if (!model) {
      res.status(400).json('Modelo do veículo é obrigatório!');
    }
    if (!price) {
      res.status(400).json('Preço do veículo é obrigatório!');
    }
    const car = await CarRepository.update(id, {
      name, brand, model, price, category_id,
    });
    return (
      res.status(200).json(car)
    );
  }
}

module.exports = new CarController();
