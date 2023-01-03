const { Router } = require('express');
const CarController = require('../app/Controllers/CarController');
const LoginController = require('../app/Controllers/LoginController');

const { eAdmin } = require('../app/Middlewares/Authorization');

const router = Router();

router.get('/listar', LoginController.index);
router.post('/login', LoginController.show);

router.post('/cadastro', LoginController.store);
router.delete('/cadastro', LoginController.delete);

router.post('/registros', CarController.store);
router.get('/registros', eAdmin);
router.put('/registros/:id', CarController.upDate);

router.delete('/:id', CarController.delete);

router.get('/', CarController.index);

module.exports = router;

