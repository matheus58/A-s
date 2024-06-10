const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioControllers');

// Defina as rotas
router.post("/usuario", usuariosController.create);

module.exports = router;
