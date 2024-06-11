const router = require("express").Router();


const usuarioController = require("../controllers/usuarioControllers");

router
    .route("/Usuario")
    .post((req ,res) => usuarioController.create(req, res));

router
    .route("/Usuario")
    .get((req,res) => usuarioController.getAll(req, res));

router
    .route("/Usuario/:id")
    .get((req,res) => usuarioController.get(req, res));

router
    .route("/Usuario/:id")
    .delete((req,res) => usuarioController.delete(req, res));

router
    .route("/Usuario/:id")
    .put((req,res) => usuarioController.update(req, res));


module.exports = router;