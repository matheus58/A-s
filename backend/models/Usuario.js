const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nome: { 
        type: String, 
        required: true 
    },
    nome_usuario: { 
        type: String, 
        required: true 
    },
    data_nacimento: { 
        type: Date, 
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true 
        },
    senha: { 
        type: String,
        required: true 
        },
    },
    { timestamps: true }
);


const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = {
    Usuario,
    usuarioSchema,
};
