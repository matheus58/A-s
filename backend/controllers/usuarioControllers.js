const { Usuario: UsuarioModel } = require("../models/Usuario.js");

const usuariosController = {
    create: async (req, res) => {
        try {
            const usuario = {
                nome: req.body.nome,
                nome_usuario: req.body.nome_usuario,
                data_nacimento: req.body.data_nacimento,
                email: req.body.email,
                senha: req.body.senha,
            };
            const response = await UsuarioModel.create(usuario);

            res.status(201).json({ response, msg: "Usuario criado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao criar o usuário." });
        }
    },
    getAll: async (req, res) => {
        try {

            const usuario = await UsuarioModel.find();
            res.json(usuario);

        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {

            const id = req.params.id;

            const usuario = await UsuarioModel.findById(id);
    
            res.json(usuario);
        } catch (error) {
            console.log(error);
        }
    }
};


module.exports = usuariosController;
