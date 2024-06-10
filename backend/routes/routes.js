const express = require('express');
const router = express.Router();

const usuarioRouter = require('./usuario');

router.use('/', usuarioRouter);

module.exports = router;