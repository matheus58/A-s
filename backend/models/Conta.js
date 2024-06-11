const mongoose = require("mongoose")

const {Schema} = mongoose 

const {usuarioSchema} = require("./Usuario") 

const contaSchema = new Schema({
    nome_titulat:{
        type: String,
        require: true,
    },
    cpf:{
        type: String,
        require: true,
    },
    numero_cartao:{
        type: String,
        require: true,
    },
    cvc:{
        type: String,
        require: true,
    },
    validade:{
        type: Date,
        require: true,
    },
    },
    { timestamps: true }
);

const Conta = mongoose.model("Conta",contaSchema);
module.exports = Conta;