const router = require("express").Router();

//service router
const usuarioRouter = require("./usuario");

router.use("/", usuarioRouter);

module.exports = router;