const express = require("express")
const cors = require("cors") //garante que nao tenha conflito com o front 
const app = express()

app.use(cors())

app.use(express.json())

//db connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(3000,function(){
    console.log("servidor Online!");
}) 