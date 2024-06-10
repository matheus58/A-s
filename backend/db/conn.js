const mangoose = require("mongoose")

async function main(){
    try {
        //mongoose.set("strictQuery", true)
        await mangoose.connect("mongodb+srv://vinyciusmatheus58:ItedoFG7u0YkrV41@casino.amquons.mongodb.net/?retryWrites=true&w=majority&appName=casino")
        console.log("conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main