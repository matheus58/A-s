const { Usuario: UsuarioModel } = require("../models/Usuario");

const  usuarioController = {
    create: async(req,res) => {
        try {
            const usuario = {
                nome:req.body.nome,
                nome_usuario: req.body.nome_usuario,
                data_nacimento:req.body.data_nacimento,
                email: req.body.email,
                senha: req.body.senha,
            };
            const response = await UsuarioModel.create(usuario);

            res.status(201).json({response, msg:"Usuario criado com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const  usuario = await UsuarioModel.find()
            res.json(usuario);
        } catch (error) {
            console.log(error);
        }
    },
    get: async(req ,res) => {
        try {

            const id = req.params.id
            const usuario = await UsuarioModel.findById(id)

            if(!usuario){
                res.status(404).json({msg:"Usuario não encontrado"});
                return;
            }

            res.json(usuario)

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req,res) => {
        try {

            const id = req.params.id

            const usuario = await UsuarioModel.findById(id)

            if(!usuario){
                res.status(404).json({msg:"Usuario não encontrado"});
                return;
            }

            const deleteUsuario = await UsuarioModel.findByIdAndDelete(id);

            res.status(200).json({deleteUsuario , msg:"Usuario deletado com sucesso"});

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {

        const id = req.params.id

        const usuario = {
            nome:req.body.nome,
            nome_usuario: req.body.nome_usuario,
            data_nacimento:req.body.data_nacimento,
            email: req.body.email,
            senha: req.body.senha,
        };

        const updateUsuario = await UsuarioModel.findByIdAndUpdate(id, usuario)


        if(!usuario){
            res.status(404).json({msg:"Usuario não encontrado"});
            return;
        }

        res.status(200).json({usuario, msg: "Usuario atualizado com sucesso." })
    },
};
module.exports = usuarioController;