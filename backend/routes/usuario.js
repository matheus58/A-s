const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioControllers'); // Verifique se o caminho está correto

// Defina as rotas
router.get('/', (req, res) => usuariosController.getAll(req, res));
router.post('/', (req, res) => usuariosController.create(req, res));
router.route("/user/:id").get((req,res) => usuariosController.get(req, res));

module.exports = router;